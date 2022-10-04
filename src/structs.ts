// This file is auto generated. To update the file make changes to the code generator.

// deno-lint-ignore-file no-unused-vars

import { Pointer } from "./types.ts";
import { wasm } from "./wasm.ts";
export class ImFontAtlas {
  public static readonly SIZE_IN_BYTES = 0;

  private readonly _view;

  constructor(private readonly _pointer: Pointer<ImFontAtlas>) {
    this._view = new DataView(wasm.memory.buffer);
  }
}

export class ImGuiContext {
  public static readonly SIZE_IN_BYTES = 0;

  private readonly _view;

  constructor(private readonly _pointer: Pointer<ImGuiContext>) {
    this._view = new DataView(wasm.memory.buffer);
  }
}

export class ImGuiIO {
  public static readonly SIZE_IN_BYTES = 14344;

  private readonly _view;

  constructor(private readonly _pointer: Pointer<ImGuiIO>) {
    this._view = new DataView(wasm.memory.buffer);
  }

  public get ConfigFlags(): unknown {
    return null;
  }

  public get BackendFlags(): unknown {
    return null;
  }

  public get DisplaySize(): unknown {
    return null;
  }

  public get DeltaTime(): unknown {
    return null;
  }

  public get IniSavingRate(): unknown {
    return null;
  }

  public get IniFilename(): unknown {
    return this._view.getUint32(this._pointer + 24, true);
  }

  public get LogFilename(): unknown {
    return this._view.getUint32(this._pointer + 32, true);
  }

  public get MouseDoubleClickTime(): unknown {
    return null;
  }

  public get MouseDoubleClickMaxDist(): unknown {
    return null;
  }

  public get MouseDragThreshold(): unknown {
    return null;
  }

  public get KeyRepeatDelay(): unknown {
    return null;
  }

  public get KeyRepeatRate(): unknown {
    return null;
  }

  public get UserData(): unknown {
    return this._view.getUint32(this._pointer + 64, true);
  }

  public get Fonts(): unknown {
    return this._view.getUint32(this._pointer + 72, true);
  }

  public get FontGlobalScale(): unknown {
    return null;
  }

  public get FontAllowUserScaling(): unknown {
    return null;
  }

  public get FontDefault(): unknown {
    return this._view.getUint32(this._pointer + 88, true);
  }

  public get DisplayFramebufferScale(): unknown {
    return null;
  }

  public get ConfigDockingNoSplit(): unknown {
    return null;
  }

  public get ConfigDockingWithShift(): unknown {
    return null;
  }

  public get ConfigDockingAlwaysTabBar(): unknown {
    return null;
  }

  public get ConfigDockingTransparentPayload(): unknown {
    return null;
  }

  public get ConfigViewportsNoAutoMerge(): unknown {
    return null;
  }

  public get ConfigViewportsNoTaskBarIcon(): unknown {
    return null;
  }

  public get ConfigViewportsNoDecoration(): unknown {
    return null;
  }

  public get ConfigViewportsNoDefaultParent(): unknown {
    return null;
  }

  public get MouseDrawCursor(): unknown {
    return null;
  }

  public get ConfigMacOSXBehaviors(): unknown {
    return null;
  }

  public get ConfigInputTrickleEventQueue(): unknown {
    return null;
  }

  public get ConfigInputTextCursorBlink(): unknown {
    return null;
  }

  public get ConfigDragClickToInputText(): unknown {
    return null;
  }

  public get ConfigWindowsResizeFromEdges(): unknown {
    return null;
  }

  public get ConfigWindowsMoveFromTitleBarOnly(): unknown {
    return null;
  }

  public get ConfigMemoryCompactTimer(): unknown {
    return null;
  }

  public get BackendPlatformName(): unknown {
    return this._view.getUint32(this._pointer + 128, true);
  }

  public get BackendRendererName(): unknown {
    return this._view.getUint32(this._pointer + 136, true);
  }

  public get BackendPlatformUserData(): unknown {
    return this._view.getUint32(this._pointer + 144, true);
  }

  public get BackendRendererUserData(): unknown {
    return this._view.getUint32(this._pointer + 152, true);
  }

  public get BackendLanguageUserData(): unknown {
    return this._view.getUint32(this._pointer + 160, true);
  }

  public get ClipboardUserData(): unknown {
    return this._view.getUint32(this._pointer + 184, true);
  }

  public get ImeWindowHandle(): unknown {
    return this._view.getUint32(this._pointer + 200, true);
  }

  public get WantCaptureMouse(): unknown {
    return null;
  }

  public get WantCaptureKeyboard(): unknown {
    return null;
  }

  public get WantTextInput(): unknown {
    return null;
  }

  public get WantSetMousePos(): unknown {
    return null;
  }

  public get WantSaveIniSettings(): unknown {
    return null;
  }

  public get NavActive(): unknown {
    return null;
  }

  public get NavVisible(): unknown {
    return null;
  }

  public get Framerate(): unknown {
    return null;
  }

  public get MetricsRenderVertices(): unknown {
    return null;
  }

  public get MetricsRenderIndices(): unknown {
    return null;
  }

  public get MetricsRenderWindows(): unknown {
    return null;
  }

  public get MetricsActiveWindows(): unknown {
    return null;
  }

  public get MetricsActiveAllocations(): unknown {
    return null;
  }

  public get MouseDelta(): unknown {
    return null;
  }

  public get KeyMap(): unknown {
    return null;
  }

  public get KeysDown(): unknown {
    return null;
  }

  public get MousePos(): unknown {
    return null;
  }

  public get MouseDown(): unknown {
    return null;
  }

  public get MouseWheel(): unknown {
    return null;
  }

  public get MouseWheelH(): unknown {
    return null;
  }

  public get MouseHoveredViewport(): unknown {
    return null;
  }

  public get KeyCtrl(): unknown {
    return null;
  }

  public get KeyShift(): unknown {
    return null;
  }

  public get KeyAlt(): unknown {
    return null;
  }

  public get KeySuper(): unknown {
    return null;
  }

  public get NavInputs(): unknown {
    return null;
  }

  public get KeyMods(): unknown {
    return null;
  }

  public get KeysData(): unknown {
    return null;
  }

  public get WantCaptureMouseUnlessPopupClose(): unknown {
    return null;
  }

  public get MousePosPrev(): unknown {
    return null;
  }

  public get MouseClickedPos(): unknown {
    return null;
  }

  public get MouseClickedTime(): unknown {
    return null;
  }

  public get MouseClicked(): unknown {
    return null;
  }

  public get MouseDoubleClicked(): unknown {
    return null;
  }

  public get MouseClickedCount(): unknown {
    return null;
  }

  public get MouseClickedLastCount(): unknown {
    return null;
  }

  public get MouseReleased(): unknown {
    return null;
  }

  public get MouseDownOwned(): unknown {
    return null;
  }

  public get MouseDownOwnedUnlessPopupClose(): unknown {
    return null;
  }

  public get MouseDownDuration(): unknown {
    return null;
  }

  public get MouseDownDurationPrev(): unknown {
    return null;
  }

  public get MouseDragMaxDistanceAbs(): unknown {
    return null;
  }

  public get MouseDragMaxDistanceSqr(): unknown {
    return null;
  }

  public get NavInputsDownDuration(): unknown {
    return null;
  }

  public get NavInputsDownDurationPrev(): unknown {
    return null;
  }

  public get PenPressure(): unknown {
    return null;
  }

  public get AppFocusLost(): unknown {
    return null;
  }

  public get AppAcceptingEvents(): unknown {
    return null;
  }

  public get BackendUsingLegacyKeyArrays(): unknown {
    return null;
  }

  public get BackendUsingLegacyNavInputArray(): unknown {
    return null;
  }

  public get InputQueueSurrogate(): unknown {
    return null;
  }

  public get InputQueueCharacters(): unknown {
    return null;
  }
}

export class ImGuiStyle {
  public static readonly SIZE_IN_BYTES = 0;

  private readonly _view;

  constructor(private readonly _pointer: Pointer<ImGuiStyle>) {
    this._view = new DataView(wasm.memory.buffer);
  }
}

export class ImVec2 {
  public static readonly SIZE_IN_BYTES = 8;

  private readonly _view;

  constructor(private readonly _pointer: Pointer<ImVec2>) {
    this._view = new DataView(wasm.memory.buffer);
  }

  public get x(): unknown {
    return null;
  }

  public get y(): unknown {
    return null;
  }
}
