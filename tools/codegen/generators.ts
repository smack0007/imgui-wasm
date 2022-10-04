import { structs } from "./structs.ts";
import {
  CodeGenFunctionParam,
  CodeGenFunctions,
  CodeGenStructMember,
  CodeGenStructs,
} from "./types.ts";

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

function isPointer(data: CodeGenFunctionParam | CodeGenStructMember): boolean {
  return data.type.endsWith("*");
}

export async function writeStructs(
  filePath: string,
  structs: CodeGenStructs
): Promise<void> {
  const lines = createLines();
  lines.push("// deno-lint-ignore-file no-unused-vars");
  lines.push("");
  lines.push(`import { Pointer } from "./types.ts";`);
  lines.push(`import { wasm } from "./wasm.ts";`);

  for (const [structName, struct] of Object.entries(structs)) {
    lines.push(`export class ${structName} {`);
    lines.push(`public static readonly SIZE_IN_BYTES = ${struct.size};`);
    lines.push("");
    lines.push(`private readonly _view;`);
    lines.push("");
    lines.push(
      `constructor(private readonly _pointer: Pointer<${structName}>) {`
    );
    lines.push("this._view = new DataView(wasm.memory.buffer);");
    lines.push("}");
    lines.push("");

    for (const [memberName, member] of Object.entries(struct.members)) {
      lines.push(`public get ${memberName}(): unknown {`);

      if (isPointer(member)) {
        lines.push(
          `return this._view.getUint32(this._pointer + ${member.offset}, true);`
        );
      } else {
        lines.push("return null;");
      }

      lines.push("}");
      lines.push("");
    }

    lines.push("}");
    lines.push("");
  }

  await writeLinesToFile(filePath, lines);
}

function mapFunctionParamType(param: CodeGenFunctionParam): string {
  if (param.overrideType) {
    return param.overrideType;
  }

  let type = param.type;

  if (type.endsWith("*")) {
    type = type.substring(0, type.length - "*".length);
    type = `Pointer<${type}>`;
  }

  return type;
}

export async function writeFunctions(
  filePath: string,
  functions: CodeGenFunctions
): Promise<void> {
  const lines = createLines();
  lines.push("// deno-lint-ignore-file no-unused-vars");
  lines.push("");

  lines.push(
    `import { Pointer } from "./types.ts";
import { wasm } from "./wasm.ts";`
  );

  const structNames = Object.keys(structs).join(", ");
  lines.push(`import { ${structNames} } from "./structs.ts";`);

  lines.push("");

  for (const [funcName, func] of Object.entries(functions)) {
    const returnType = mapFunctionParamType(func.result);

    lines.push(`export function ${funcName}(`);

    for (const [paramName, param] of Object.entries(func.parameters)) {
      const paramType = mapFunctionParamType(param);
      lines.push(`${paramName}: ${paramType},`);
    }

    lines.push(`): ${returnType} {`);

    if (func.result.type !== "void") {
      lines.push("return (");
    }

    const paramNames = Object.keys(func.parameters).join(", ");
    lines.push(`wasm.exports.${funcName}(${paramNames})`);

    if (func.result.type !== "void") {
      lines.push(");");
    }

    lines.push("}");
    lines.push("");
  }

  await writeLinesToFile(filePath, lines);
}
