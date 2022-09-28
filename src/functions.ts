// This file is auto generated. To update the file make changes to the code generator.

// deno-lint-ignore-file no-unused-vars

import { Pointer } from "./types.ts";
import { wasm } from "./wasm.ts";
import { ImFontAtlas, ImGuiContext, ImGuiIO, ImVec2 } from "./structs.ts";

export function igCreateContext(
  shared_font_atlas: Pointer<ImFontAtlas>,
): Pointer<ImGuiContext> {
  return (
    wasm.exports.igCreateContext(shared_font_atlas)
  );
}
