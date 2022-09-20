#!/bin/sh
SCRIPT_DIRECTORY=$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
file_server -p 8080 ./bin