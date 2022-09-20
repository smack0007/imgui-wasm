# imgui-wasm

Dear ImGui compiled to wasm.

## Building

```bash
./update-submodules.sh
./download-wasi.sh
./build-wasm.sh
./build.sh
```

```
wasm-ld: error: cannot open .../lib/wasi/libclang_rt.builtins-wasm32.a: No such file or directory
```

See [this page](https://github.com/jedisct1/libclang_rt.builtins-wasm32.a) to fix the error related
to `libclang_rt.builtins-wasm32.a` is missing.

## Credit

- [@rapodaca](https://github.com/rapodaca/) for the article on how to compile
  to wasm using only clang: [Compiling C to WebAssembly and Running It - without Emscripten](https://depth-first.com/articles/2019/10/16/compiling-c-to-webassembly-and-running-it-without-emscripten/)
