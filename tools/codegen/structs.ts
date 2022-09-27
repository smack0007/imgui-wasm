import { CodeGenStructs } from "./types.ts";

export const structs: CodeGenStructs = {
  ImGuiIO: {
    size: 14344,
    members: {
      ConfigFlags: {
        type: "ImGuiConfigFlags",
        offset: 0,
      },
      BackendFlags: {
        type: "ImGuiBackendFlags",
        offset: 4,
      },
      DisplaySize: {
        type: "ImVec2",
        offset: 8,
      },
      DeltaTime: {
        type: "float",
        offset: 16,
      },
      IniSavingRate: {
        type: "float",
        offset: 20,
      },
      IniFilename: {
        type: "char*",
        offset: 24,
      },
      LogFilename: {
        type: "char*",
        offset: 32,
      },
      MouseDoubleClickTime: {
        type: "float",
        offset: 40,
      },
      MouseDoubleClickMaxDist: {
        type: "float",
        offset: 44,
      },
      MouseDragThreshold: {
        type: "float",
        offset: 48,
      },
      KeyRepeatDelay: {
        type: "float",
        offset: 52,
      },
      KeyRepeatRate: {
        type: "float",
        offset: 56,
      },
      UserData: {
        type: "void*",
        offset: 64,
      },
      Fonts: {
        type: "ImFontAtlas*",
        offset: 72,
      },
      FontGlobalScale: {
        type: "float",
        offset: 80,
      },
      FontAllowUserScaling: {
        type: "bool",
        offset: 84,
      },
      FontDefault: {
        type: "ImFont*",
        offset: 88,
      },
      DisplayFramebufferScale: {
        type: "ImVec2",
        offset: 96,
      },
      ConfigDockingNoSplit: {
        type: "bool",
        offset: 104,
      },
      ConfigDockingWithShift: {
        type: "bool",
        offset: 105,
      },
      ConfigDockingAlwaysTabBar: {
        type: "bool",
        offset: 106,
      },
      ConfigDockingTransparentPayload: {
        type: "bool",
        offset: 107,
      },
      ConfigViewportsNoAutoMerge: {
        type: "bool",
        offset: 108,
      },
      ConfigViewportsNoTaskBarIcon: {
        type: "bool",
        offset: 109,
      },
      ConfigViewportsNoDecoration: {
        type: "bool",
        offset: 110,
      },
      ConfigViewportsNoDefaultParent: {
        type: "bool",
        offset: 111,
      },
      MouseDrawCursor: {
        type: "bool",
        offset: 112,
      },
      ConfigMacOSXBehaviors: {
        type: "bool",
        offset: 113,
      },
      ConfigInputTrickleEventQueue: {
        type: "bool",
        offset: 114,
      },
      ConfigInputTextCursorBlink: {
        type: "bool",
        offset: 115,
      },
      ConfigDragClickToInputText: {
        type: "bool",
        offset: 116,
      },
      ConfigWindowsResizeFromEdges: {
        type: "bool",
        offset: 117,
      },
      ConfigWindowsMoveFromTitleBarOnly: {
        type: "bool",
        offset: 118,
      },
      ConfigMemoryCompactTimer: {
        type: "float",
        offset: 120,
      },
      BackendPlatformName: {
        type: "char*",
        offset: 128,
      },
      BackendRendererName: {
        type: "char*",
        offset: 136,
      },
      BackendPlatformUserData: {
        type: "void*",
        offset: 144,
      },
      BackendRendererUserData: {
        type: "void*",
        offset: 152,
      },
      BackendLanguageUserData: {
        type: "void*",
        offset: 160,
      },
      ClipboardUserData: {
        type: "void*",
        offset: 184,
      },
      ImeWindowHandle: {
        type: "void*",
        offset: 200,
      },
      WantCaptureMouse: {
        type: "bool",
        offset: 208,
      },
      WantCaptureKeyboard: {
        type: "bool",
        offset: 209,
      },
      WantTextInput: {
        type: "bool",
        offset: 210,
      },
      WantSetMousePos: {
        type: "bool",
        offset: 211,
      },
      WantSaveIniSettings: {
        type: "bool",
        offset: 212,
      },
      NavActive: {
        type: "bool",
        offset: 213,
      },
      NavVisible: {
        type: "bool",
        offset: 214,
      },
      Framerate: {
        type: "float",
        offset: 216,
      },
      MetricsRenderVertices: {
        type: "int",
        offset: 220,
      },
      MetricsRenderIndices: {
        type: "int",
        offset: 224,
      },
      MetricsRenderWindows: {
        type: "int",
        offset: 228,
      },
      MetricsActiveWindows: {
        type: "int",
        offset: 232,
      },
      MetricsActiveAllocations: {
        type: "int",
        offset: 236,
      },
      MouseDelta: {
        type: "ImVec2",
        offset: 240,
      },
      KeyMap: {
        type: "int",
        offset: 248,
        length: 645,
      },
      KeysDown: {
        type: "bool",
        offset: 2828,
        length: 645,
      },
      MousePos: {
        type: "ImVec2",
        offset: 3476,
      },
      MouseDown: {
        type: "bool",
        offset: 3484,
        length: 5,
      },
      MouseWheel: {
        type: "float",
        offset: 3492,
      },
      MouseWheelH: {
        type: "float",
        offset: 3496,
      },
      MouseHoveredViewport: {
        type: "ImGuiID",
        offset: 3500,
      },
      KeyCtrl: {
        type: "bool",
        offset: 3504,
      },
      KeyShift: {
        type: "bool",
        offset: 3505,
      },
      KeyAlt: {
        type: "bool",
        offset: 3506,
      },
      KeySuper: {
        type: "bool",
        offset: 3507,
      },
      NavInputs: {
        type: "float",
        offset: 3508,
        length: 20,
      },
      KeyMods: {
        type: "ImGuiModFlags",
        offset: 3588,
      },
      KeysData: {
        type: "ImGuiKeyData",
        offset: 3592,
        length: 645,
      },
      WantCaptureMouseUnlessPopupClose: {
        type: "bool",
        offset: 13912,
      },
      MousePosPrev: {
        type: "ImVec2",
        offset: 13916,
      },
      MouseClickedPos: {
        type: "ImVec2",
        offset: 13924,
        length: 5,
      },
      MouseClickedTime: {
        type: "double",
        offset: 13968,
        length: 5,
      },
      MouseClicked: {
        type: "bool",
        offset: 14008,
        length: 5,
      },
      MouseDoubleClicked: {
        type: "bool",
        offset: 14013,
        length: 5,
      },
      MouseClickedCount: {
        type: "ImU16",
        offset: 14018,
        length: 5,
      },
      MouseClickedLastCount: {
        type: "ImU16",
        offset: 14028,
        length: 5,
      },
      MouseReleased: {
        type: "bool",
        offset: 14038,
        length: 5,
      },
      MouseDownOwned: {
        type: "bool",
        offset: 14043,
        length: 5,
      },
      MouseDownOwnedUnlessPopupClose: {
        type: "bool",
        offset: 14048,
        length: 5,
      },
      MouseDownDuration: {
        type: "float",
        offset: 14056,
        length: 5,
      },
      MouseDownDurationPrev: {
        type: "float",
        offset: 14076,
        length: 5,
      },
      MouseDragMaxDistanceAbs: {
        type: "ImVec2",
        offset: 14096,
        length: 5,
      },
      MouseDragMaxDistanceSqr: {
        type: "float",
        offset: 14136,
        length: 5,
      },
      NavInputsDownDuration: {
        type: "float",
        offset: 14156,
        length: 20,
      },
      NavInputsDownDurationPrev: {
        type: "float",
        offset: 14236,
        length: 20,
      },
      PenPressure: {
        type: "float",
        offset: 14316,
      },
      AppFocusLost: {
        type: "bool",
        offset: 14320,
      },
      AppAcceptingEvents: {
        type: "bool",
        offset: 14321,
      },
      BackendUsingLegacyKeyArrays: {
        type: "ImS8",
        offset: 14322,
      },
      BackendUsingLegacyNavInputArray: {
        type: "bool",
        offset: 14323,
      },
      InputQueueSurrogate: {
        type: "ImWchar16",
        offset: 14324,
      },
      InputQueueCharacters: {
        type: "ImVector<ImWchar>",
        offset: 14328,
      },
    },
  },

	ImVec2: {
		size: 8,
		members: {
			x: {
				type: "float",
				offset: 0,
			},
			y: {
				type: "float",
				offset: 4,
			},
		}
	}
} as const;
