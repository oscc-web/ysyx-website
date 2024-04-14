import path from "path";
import { defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"

import { searchProPlugin } from "vuepress-plugin-search-pro";

import theme from "./theme.js";

export default defineUserConfig({
    base: "/",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "一生一芯",
            description: "一生一芯的官方网站"
        },
        "/en/": {
            lang: "en-US",
            title: "One Student One Chip",
            description: "The Offical Website of One Student One Chip"
        }
    },
    shouldPrefetch: false,
    plugins: [
        AutoImport({
            imports: ["vue"],
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    prefix: "Icon"
                })
            ]
        }),
        Components({
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    enabledCollections: ["ep"]
                })
            ]
        }),
        Icons({
            autoInstall: true
        }),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, "./components")
        }),
        searchProPlugin({
            indexContent: true,
            autoSuggestions: true,
            customFields: [{
                getter: (page) => page.frontmatter.title,
                formatter: "标题：$content"
            }, {
                getter: (page) => page.frontmatter.author,
                formatter: "作者：$content"
            }, {
                getter: (page) => page.frontmatter.category,
                formatter: "分类：$content"
            }, {
                getter: (page) => page.frontmatter.tag,
                formatter: "标签：$content"
            }],
            hotKeys: [{ key: "k", ctrl: true }, { key: "/", ctrl: true }],
            queryHistoryCount: 5,
            resultHistoryCount: 5,
            searchDelay: 150,
            sortStrategy: "max"
        }),
        googleAnalyticsPlugin({
            id: "G-JE9FFL5P3Q"
        })
    ],
    theme: theme,
    head: [
        [
            "meta", { name: "msvalidate.01", content: "DBA9CE921B74D9D73F0C965146BCFD06" },
        ],
        [
            "script", { type: "text/javascript", src: "/js/baidu.js" }
        ],
        [
            "script", { type: "text/javascript", src: "/js/cnzz.js" }
        ]
    ]
});
