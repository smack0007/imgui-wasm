import { ensureDirectory } from "./fs.ts";
import { EXT_PATH, joinPath, TMP_PATH } from "./paths.ts";

const FILE_PATHS_TO_SCRAPE = [joinPath(EXT_PATH, "cimgui", "imgui", "imgui.h")];

const STRUCTS_TO_SCRAPE = ["ImGuiIO"];

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

  for await (const filePath of FILE_PATHS_TO_SCRAPE) {
    writePrintF(`// ${filePath}`);
    await scrapeFile(filePath);
    writePrintF("");
  }

  writeEndCode();

  ensureDirectory(TMP_PATH);

  const cOutputPath = `${TMP_PATH}/codegen-scraper.cpp`;
  await Deno.writeTextFile(cOutputPath, buffer);

  const exeOutputPath = `${TMP_PATH}/codegen-scraper.exe`;
  const { code } = await Deno.run({
    cmd: ["clang++", cOutputPath, "-o", exeOutputPath],
  }).status();

  if (code !== 0) {
    return 1;
  }

  const process = Deno.run({ cmd: [exeOutputPath] });
  await process.status();

  return 0;
}

function writeStartCode(): void {
  write(`#include "../ext/cimgui/imgui/imgui.h"`);
  write("#include <stdio.h>");
  write("");
  write("int main(int argc, char* args[]) {");
  writePrintF("sizeof(int) === %llu", "sizeof(int)");
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
          writePrintF(`${struct}: {`);
          writePrintF("\tsize: %llu,", `sizeof(${struct})`);
          writePrintF("\tmembers: {");
          captureMode = "struct";
          captureName = struct;
        }
      }
    } else if (captureMode === "struct") {
      if (
        !line.startsWith("{") &&
        !line.startsWith("}") &&
        !line.startsWith("IMGUI_API ") &&
        !line.startsWith("#")
      ) {
        write(`// ${line}`);

        const parts = line
          .replaceAll("ImFontAtlas*Fonts", "ImFontAtlas* Fonts")
          .replaceAll("const char*", "char*")
          .split(/\s+/, 2);
        write(`// ${JSON.stringify(parts)}`);

        const memberType = parts[0];
        let memberName = parts[1];

        if (memberName.startsWith("(*") || memberName === "_UnusedPadding;") {
          continue;
        }

        const memberNameEnd = memberName.indexOf(";");
        if (memberNameEnd !== -1) {
          memberName = memberName.substring(0, memberNameEnd);
        }

        writePrintF(`\t\t${memberName}: {`);
        writePrintF(`\t\t\ttype: "${memberType}",`);
        writePrintF(
          "\t\t\toffset: %llu,",
          `offsetof(${captureName}, ${memberName})`
        );
        writePrintF(`\t\t}`);
      } else if (line.startsWith("}")) {
        writePrintF("\t}");
        writePrintF("}");
        captureMode = null;
        captureName = null;
      }
    }
  }
}

Deno.exit(await main());
