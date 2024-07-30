
#!/usr/bin/env bash
set -e

SOURCE=./patch/macos/pngquant
DIST=./node_modules/pngquant-bin/vendor/

# scp ${SOURCE} ${DIST}