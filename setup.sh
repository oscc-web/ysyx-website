#!/usr/bin/env bash

set -e

PATH_ROOT=${PWD}
PATH_RESS=${PATH_ROOT}/src/.vuepress/public/res/
PATH_NODE=${PATH_ROOT}/node_modules/

# Set resources
if [ ! -d ${PATH_RESS}/.git ]; then
    rm -rf ${PATH_RESS}
    git clone git@github.com:oscc-ysyx-web-project/ysyx-website-resources.git ${PATH_RESS}
else
    cd ${PATH_RESS}
    git pull origin main
    cd ${PATH_ROOT}
fi

if [ ! -d ${PATH_NODE} ]; then
    # Install packages
    npm install
fi
