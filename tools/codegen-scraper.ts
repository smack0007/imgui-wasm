import { ensureDirectory } from "./fs.ts";
import { EXT_PATH, joinPath, TMP_PATH } from "./paths.ts";

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

  const filesToScrape = [joinPath(EXT_PATH, "cimgui", "imgui", "imgui.h")];

  for await (const file of filesToScrape) {
    writePrintF(`// ${file}`);
    //await scrapeFile(`${SDL_PATH}/include/${entry.name}`);
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

Deno.exit(await main());
