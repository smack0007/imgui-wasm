#!/bin/sh
SCRIPT_DIRECTORY=$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
WASI_DIRECTORY=${SCRIPT_DIRECTORY}/ext/wasi

[ -d "${WASI_DIRECTORY}" ] && echo "${WASI_DIRECTORY} already exists." && exit 0

mkdir -p ${WASI_DIRECTORY}
pushd ${WASI_DIRECTORY}
wget https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-16/wasi-sysroot-16.0.tar.gz
tar xvzf wasi-sysroot-16.0.tar.gz
rm wasi-sysroot-16.0.tar.gz
mv wasi-sysroot/* .
rm -rf wasi-sysroot
popd
