import { createWasi } from "./wasi.ts";

// deno-lint-ignore ban-types
type WasmExports = Record<string, Function>;

export interface WasmContext {
  memory: WebAssembly.Memory;
  instance: WebAssembly.Instance;
  exports: WasmExports;
}

async function init(): Promise<WasmContext> {
  const memory = new WebAssembly.Memory({ initial: 256 });
  const { instance } = await WebAssembly.instantiateStreaming(
    fetch("./imgui.wasm"),
    {
      env: { memory },
      wasi_snapshot_preview1: createWasi(memory),
    }
  );

  return { memory, instance, exports: instance.exports as WasmExports };
}

export const wasm = await init();
