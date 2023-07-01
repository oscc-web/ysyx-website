#!/usr/bin/env bash

set -e

PATH_ROOT=${PWD}
PATH_RESS=${PATH_ROOT}/src/.vuepress/public/res/

# Set resources
if [ -d PATH_RESS ]; then
    git clone git@github.com:oscc-ysyx-web-project/ysyx-website-resources.git ${PATH_RESS}
else
    cd ${PATH_RESS}
    git pull origin main
    cd ${PATH_ROOT}
fi

# Install packages
npm install
