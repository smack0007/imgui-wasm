// This file is auto generated. To update the file make changes to the code generator.

// deno-lint-ignore-file no-unused-vars

import { Pointer } from "./types.ts";
import { wasm } from "./wasm.ts";
import { ImFontAtlas, ImGuiContext, ImGuiIO, ImGuiStyle, ImVec2 } from "./structs.ts";

export function igCreateContext(
  shared_font_atlas: Pointer<ImFontAtlas>,
): Pointer<ImGuiContext> {
  return (
    wasm.exports.igCreateContext(shared_font_atlas)
  );
}

export function igGetIO(): Pointer<ImGuiIO> {
  return (
    wasm.exports.igGetIO()
  );
}

export function igGetStyle(): Pointer<ImGuiStyle> {
  return (
    wasm.exports.igGetStyle()
  );
}

export function igNewFrame(): void {
  wasm.exports.igNewFrame();
}

export function igStyleColorsClassic(
  dst: Pointer<ImGuiStyle>,
): void {
  wasm.exports.igStyleColorsClassic(dst);
}

export function igStyleColorsDark(
  dst: Pointer<ImGuiStyle>,
): void {
  wasm.exports.igStyleColorsDark(dst);
}

export function igStyleColorsLight(
  dst: Pointer<ImGuiStyle>,
): void {
  wasm.exports.igStyleColorsLight(dst);
}
