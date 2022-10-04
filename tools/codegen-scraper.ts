import { ensureDirectory } from "./fs.ts";
import { EXT_PATH, joinPath, TMP_PATH } from "./paths.ts";

const CIMGUI_HEADER_PATH = joinPath(EXT_PATH, "cimgui", "cimgui.h");

// TODO: For now let's just limit which structs get scraped. Eventually we should get rid of this though.
const STRUCTS_TO_SCRAPE = ["ImGuiIO", "ImVec2"];

let buffer = "";

function write(value: string): void {
  buffer += value + "\n";
}

function writePrintF(value: string, ...args: string[]): void {
  value = value
    .replaceAll("\\", "\\\\")
    .replaceAll("\n", "\\n")
    .replaceAll("\t", "\\t")
    .replaceAll('"', '\\"');

  if (args.length <= 0) {
    value = value.replaceAll("%", "%%");
  }

  let argsString = args.join(", ");

  if (argsString.length > 0) {
    argsString = ", " + argsString;
  }

  write(`printf("${value}\\n"${argsString});`);
}

async function main(): Promise<number> {
  writeStartCode();

  await scrapeFile(CIMGUI_HEADER_PATH);

  writeEndCode();

  ensureDirectory(TMP_PATH);

  const cOutputPath = `${TMP_PATH}/codegen-scraper.c`;
  await Deno.writeTextFile(cOutputPath, buffer);

  const exeOutputPath = `${TMP_PATH}/codegen-scraper.exe`;
  const { code } = await Deno.run({
    cmd: ["clang", cOutputPath, "-o", exeOutputPath],
  }).status();

  if (code !== 0) {
    return 1;
  }

  const process = Deno.run({ cmd: [exeOutputPath] });
  await process.status();

  return 0;
}

function writeStartCode(): void {
  write(`#define CIMGUI_DEFINE_ENUMS_AND_STRUCTS`);
  write(`#include "../ext/cimgui/cimgui.h"`);
  write("#include <stddef.h>");
  write("#include <stdio.h>");
  write("");
  write("int main(int argc, char* args[]) {");
  writePrintF("sizeof(int) === %llu", "sizeof(int)");
  writePrintF("sizeof(void*) === %llu", "sizeof(void*)");
  writePrintF("");
}

function writeEndCode(): void {
  write("return 0;");
  write("}");
  write("");
}

async function scrapeFile(filePath: string): Promise<void> {
  let captureMode: "struct" | null = null;
  let captureName: string | null = null;

  const lines = (await Deno.readTextFile(filePath)).split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.length === 0 || line.startsWith("//")) {
      continue;
    }

    if (captureMode === null) {
      for (const struct of STRUCTS_TO_SCRAPE) {
        if (line === `struct ${struct}`) {
          writePrintF(`/* Struct */`);
          writePrintF(`${struct}: {`);
          writePrintF("\tsize: %llu,", `sizeof(${struct})`);
          writePrintF("\tmembers: {");
          captureMode = "struct";
          captureName = struct;
        }
      }

      if (line.startsWith("CIMGUI_API ")) {
        const funcDeclaration = line.substring("CIMGUI_API ".length);

        write(`// ${funcDeclaration}`);

        const parts = funcDeclaration
          .replaceAll(", ", ",")
          // replace the const stuff for now so that split sees it as one piece
          .replaceAll("const char*", "const_char*")
          // Just get rid of no parameters declaration.
          .replaceAll("(void)", "()")
          .split(/(\s|\(|\)|,)+/)
          .filter(
            (x) =>
              x.trim() !== "" &&
              x !== "," &&
              x !== "(" &&
              x !== ")" &&
              x !== ";"
          );

        write(`// ${JSON.stringify(parts)}`);

        writePrintF("/* Function */");
        writePrintF(`${parts[1]}: {`);

        writePrintF("\tparameters: {");
        for (let i = 2; i < parts.length; i += 2) {
          writePrintF(`\t\t${parts[i + 1]}: {`);
          writePrintF(`\t\t\ttype: "${parts[i]}",`);
          writePrintF("\t\t},");
        }
        writePrintF("\t},");
        writePrintF("\tresult: {");
        writePrintF(`\t\ttype: "${parts[0]}",`);
        writePrintF("\t},");
        writePrintF("},");
        writePrintF("");
      }
    } else if (captureMode === "struct") {
      if (!line.startsWith("{") && !line.startsWith("}")) {
        write(`// Line: ${line}`);

        const parts = line
          .replaceAll(", ", ",")
          // ImGuiIo has a weird declaration for Fonts
          .replaceAll("ImFontAtlas*Fonts", "ImFontAtlas* Fonts")
          // replace the const stuff for now so that split sees it as one piece
          .replaceAll("const char*", "const_char*")
          .split(/\s+/, 2);

        write(`// ${JSON.stringify(parts)}`);

        let memberType = parts[0];

        if (memberType.startsWith("const_")) {
          memberType = memberType.replace("const_", "const ");
        }

        const memberNames = parts[1].split(",");

        for (let memberName of memberNames) {
          if (
            // TODO: We'll need to be able to parse funcitons eventually
            memberName.startsWith("(*") ||
            // Skip over _UnusedPadding
            memberName === "_UnusedPadding;"
          ) {
            continue;
          }

          const memberNameEnd = memberName.indexOf(";");
          if (memberNameEnd !== -1) {
            memberName = memberName.substring(0, memberNameEnd);
          }

          let arrayLength = "";
          if (memberName.endsWith("]")) {
            const arrayLengthStart = memberName.indexOf("[") + 1;
            const arrayLengthEnd = memberName.length - 1;
            arrayLength =
              "(unsigned long long)" +
              memberName.substring(arrayLengthStart, arrayLengthEnd);
            memberName = memberName.substring(0, arrayLengthStart - 1);
          }

          writePrintF(`\t\t${memberName}: {`);
          writePrintF(`\t\t\ttype: "${memberType}",`);
          writePrintF(
            "\t\t\toffset: %llu,",
            `offsetof(${captureName}, ${memberName})`
          );
          if (arrayLength !== "") {
            writePrintF("\t\t\tlength: %llu,", arrayLength);
          }
          writePrintF(`\t\t},`);
        }
      } else if (line.startsWith("}")) {
        writePrintF("\t}");
        writePrintF("}");
        writePrintF("");
        captureMode = null;
        captureName = null;
      }
    }
  }

  writePrintF("");
}

Deno.exit(await main());
