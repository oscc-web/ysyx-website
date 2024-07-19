#!/usr/bin/env bash

set -e

PATH_ROOT=${PWD}
PATH_COMM=${PATH_ROOT}/common/
PATH_RESS=${PATH_ROOT}/src/.vuepress/public/res/
PATH_NODE=${PATH_ROOT}/node_modules/
PRJ_NAME=${PATH_ROOT##*/}

if [ ! -f ${PATH_ROOT}/src/.vuepress/config-temp.ts ]; then
    echo "Generating dynamic config..."
    echo ""
    cat > ${PATH_ROOT}/src/.vuepress/config-temp.ts << EOF
const config = {
    // baseURL: "http://localhost:9090/api/"
    baseURL: "https://ysyx.oscc.cc/api/"
};

export { config };
EOF
fi

if [ ! -d ${PATH_COMM} ]; then
    echo "Downloading common scripts..."
    rm -rf ${PATH_COMM}
    git clone git@github.com:oscc-web/oscc-common.git ${PATH_COMM}
else
    echo "Updating common scripts..."
    cd ${PATH_COMM}
    git pull origin main
    cd ${PATH_ROOT}
fi

if [ ! -d ${PATH_RESS}/.git ]; then
    echo ""
    echo "Downloading resources..."
    rm -rf ${PATH_RESS}
    git clone git@github.com:oscc-web/${PRJ_NAME}-resources.git ${PATH_RESS}
else
    echo ""
    echo "Updating resources..."
    cd ${PATH_RESS}
    git pull origin main
    cd ${PATH_ROOT}
fi

if [ ! -d ${PATH_NODE} ]; then
    echo ""
    echo "Downloading Node.js packages..."
    npm install
# else
    # echo ""
    # echo -n "Do you want to update Node.js packages? [Y/n]: "
    # read choice
    # if [ ${choice} == "Y" ]; then
    #     npm install
    # fi
    # echo "Already up to date."
fi
