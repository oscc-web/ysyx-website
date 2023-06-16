import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
    // 主题基本配置
    hostname: "https://oscc-ysyx-web-project.github.io",
    author: {
        name: "Miao Yuyang",
        url: "https://myyerrol.github.io",
        email: "myyerrol@126.com"
    },
    favicon: "/logo.png",

    // 主题布局配置
    // 导航栏
    navbarIcon: true,
    navbarLayout: {
        start: ["Brand"],
        center: ["Links"],
        end: ["Language", "Repo", "Outlook", "Search"]
    },
    logo: "/logo.png",
    logoDark: "/logo.png",
    repo: "oscc-ysyx-web-project/ysyx-website",
    repoDisplay: true,
    repoLabel: "GitHub",
    navbarAutoHide: "mobile",
    hideSiteNameOnMobile: true,
    // 侧边栏
    sidebarIcon: true,
    sidebarSorter: ["readme", "order", "title", "filename"],
    headerDepth: 2,
    // 路径
    breadcrumb: true,
    breadcrumbIcon: true,
    prevLink: true,
    nextLink: true,
    // 标题
    titleIcon: true,
    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
    // 基础
    lastUpdated: true,
    contributors: true,
    editLink: false,
    docsBranch: "main",
    docsDir: "src/",
    // 页脚
    copyright: false,
    // 杂项
    toc: true,

    // 主题外观配置
    iconAssets: "fontawesome",
    darkmode: "toggle",
    themeColor: false,
    fullscreen: false,
    backToTop: true,
    pure: false,
    print: true,

    // 主题语言配置
    locales: {
        "/": {
            navbar: zhNavbar,
            sidebar: zhSidebar,
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
            footer: "GPL协议 | 版权所有 © 2023-present 一生一芯Web团队",
            copyright: false,
            displayFooter: true
        }
    },

    // 主题插件配置
    plugins: {
        blog: false,
        comment: false,
        copyright: false,
        feed: {
            rss: true
        },
        mdEnhance: {
            // 图片
            figure: true,
            imgLazyload: true,
            imgMark: true,
            imgSize: true,

            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            container: true,
            demo: true,
            echarts: true,
            flowchart: true,
            gfm: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: ["highlight", "math", "search", "notes", "zoom"],
            stylize: [{
                matcher: "Recommended",
                replacer: ({ tag }) => {
                    if (tag === "em")
                        return {
                            tag: "Badge",
                            attrs: { type: "tip" },
                            content: "Recommended"
                        };
                }
            }],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true
        },
        components: {
            components: ["AudioPlayer",
                         "Badge",
                         "BiliBili",
                         "CodePen",
                         "PDF",
                         "StackBlitz",
                         "VideoPlayer",
                         "YouTube"]
        }
    }
});
