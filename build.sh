#!/bin/sh
SCRIPT_DIRECTORY=$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
BIN_DIRECTORY=${SCRIPT_DIRECTORY}/bin
EXT_DIRECTORY=${SCRIPT_DIRECTORY}/ext
SRC_DIRECTORY=${SCRIPT_DIRECTORY}/src

mkdir -p ${BIN_DIRECTORY}

cp -u ${SRC_DIRECTORY}/index.html ${BIN_DIRECTORY}/index.html
