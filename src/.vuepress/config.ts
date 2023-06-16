import path from "path";
import { defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import theme from "./theme.js";

export default defineUserConfig({
    base: "/ysyx-website/",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "一生一芯",
            description: "一生一芯的官方网站"
        }
    },
    shouldPrefetch: false,
    plugins: [
        AutoImport({
            imports: ["vue"],
            resolvers: [
                IconsResolver({
                    prefix: "Icon"
                }),
                ElementPlusResolver()
            ]
        }),
        Components({
            resolvers: [
                IconsResolver({
                    enabledCollections: ["ep"]
                }),
                ElementPlusResolver()
            ]
        }),
        Icons({
            autoInstall: true
        }),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, "./components")
        })
    ],
    theme: theme
});
