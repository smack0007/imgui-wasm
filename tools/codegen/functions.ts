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

  igGetIO: {
    parameters: {},
    result: {
      type: "ImGuiIO*",
    },
  },

  igGetStyle: {
    parameters: {},
    result: {
      type: "ImGuiStyle*",
    },
  },

  igNewFrame: {
    parameters: {},
    result: {
      type: "void",
    },
  },

  igStyleColorsClassic: {
    parameters: {
      dst: {
        type: "ImGuiStyle*",
      },
    },
    result: {
      type: "void",
    },
  },

  igStyleColorsDark: {
    parameters: {
      dst: {
        type: "ImGuiStyle*",
      },
    },
    result: {
      type: "void",
    },
  },

  igStyleColorsLight: {
    parameters: {
      dst: {
        type: "ImGuiStyle*",
      },
    },
    result: {
      type: "void",
    },
  },
} as const;
