
#!/usr/bin/env bash
set -e

SOURCE=./patch/pngquant
DIST=./node_modules/pngquant-bin/vendor/

scp ${SOURCE} ${DIST}
echo 11112