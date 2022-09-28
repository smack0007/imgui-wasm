import { CodeGenFunctions } from "./types.ts";

export const functions: CodeGenFunctions = {
  igCreateContext: {
    parameters: {
      shared_font_atlas: {
        type: "ImFontAtlas*",
        nullable: true,
      },
    },
    result: {
      type: "ImGuiContext*",
    },
  },
} as const;
