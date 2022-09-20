#!/bin/sh
SCRIPT_DIRECTORY=$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
BIN_DIRECTORY=${SCRIPT_DIRECTORY}/bin
EXT_DIRECTORY=${SCRIPT_DIRECTORY}/ext

mkdir -p ${BIN_DIRECTORY}

clang++ \
    --target=wasm32-unknown-wasi \
    --sysroot ${SCRIPT_DIRECTORY}/ext/wasi \
    -Oz \
    -nostartfiles \
    -Wl,--import-memory \
    -Wl,--no-entry \
    -Wl,--export-all \
    -o ${BIN_DIRECTORY}/imgui.wasm \
    ${EXT_DIRECTORY}/cimgui/cimgui.cpp \
    ${EXT_DIRECTORY}/cimgui/imgui/imgui.cpp \
    ${EXT_DIRECTORY}/cimgui/imgui/imgui_draw.cpp \
    ${EXT_DIRECTORY}/cimgui/imgui/imgui_demo.cpp \
    ${EXT_DIRECTORY}/cimgui/imgui/imgui_tables.cpp \
    ${EXT_DIRECTORY}/cimgui/imgui/imgui_widgets.cpp
