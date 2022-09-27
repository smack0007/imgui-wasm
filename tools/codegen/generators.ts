import { CodeGenStructs } from "./types.ts";

function createLines(): string[] {
  return [
    "// This file is auto generated. To update the file make changes to the code generator.",
    "",
  ];
}

async function writeLinesToFile(path: string, lines: string[]): Promise<void> {
  await Deno.writeTextFile(path, lines.join("\n"));
  await (await Deno.run({ cmd: ["deno", "fmt", path] })).status();
}

export async function writeStructs(
  filePath: string,
  structs: CodeGenStructs
): Promise<void> {
  const lines = createLines();
  lines.push("// deno-lint-ignore-file no-unused-vars");
  lines.push("");

  for (const [structName, struct] of Object.entries(structs)) {
    lines.push(`export class ${structName} {`);
    lines.push("}");
    lines.push("");
  }

  await writeLinesToFile(filePath, lines);
}
