import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
    // Theme Basic
    hostname: "https://ysyx.oscc.cc",
    author: {
        name: "Team YSYX",
        url: "https://ysyx.oscc.cc",
        email: "ysyx@bosc.ac.cn"
    },
    favicon: "/res/images/logo/ysyx.png",

    // Theme Layout
    // Navbar
    navbarIcon: true,
    navbarLayout: {
        start: ["Brand"],
        center: ["Links"],
        end: ["Language", "Repo", "Outlook", "Search"]
    },
    logo: "/res/images/logo/ysyx.png",
    logoDark: "/res/images/logo/ysyx.png",
    repo: "oscc-web/ysyx-website",
    repoDisplay: false,
    repoLabel: "GitHub",
    navbarAutoHide: "mobile",
    hideSiteNameOnMobile: true,
    // Sidebar
    sidebarIcon: true,
    sidebarSorter: ["readme", "order", "title", "filename"],
    headerDepth: 2,
    // Route Navgation
    breadcrumb: false,
    breadcrumbIcon: true,
    prevLink: true,
    nextLink: true,
    // Title
    titleIcon: true,
    pageInfo: false,
    // Meta
    lastUpdated: true,
    contributors: true,
    editLink: false,
    docsRepo: "repo",
    docsBranch: "main",
    docsDir: "src",
    // Footer
    copyright: false,
    displayFooter: true,
    // Others
    toc: false,

    // Theme Appearance
    iconAssets: "fontawesome",
    darkmode: "toggle",
    themeColor: false,
    fullscreen: false,
    backToTop: true,
    pure: false,
    print: false,

    // Theme i18N
    locales: {
        "/": {
            navbar: zhNavbar,
            sidebar: zhSidebar,
            footer: "GPL协议 | 版权所有 © 2023-现在 一生一芯团队",
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            }
        },
        "/en/": {
            navbar: enNavbar,
            sidebar: enSidebar,
            footer: "GPL License | Copyright © 2023-Team YSYX",
            metaLocales: {
                editLink: "Edit this page on GitHub",
            }
        }
    },

    // Theme Plugins
    plugins: {
        blog: false,
        comment: false,
        copyright: {
            author: "Team YSYX",
            license: "GPL-3.0",
            triggerWords: 1,
            global: true,
            disableCopy: false,
            disableSelection: false
        },
        feed: {
            rss: false,
            rssOutputFilename: "rss.xml"
        },
        mdEnhance: {
            gfm: true,
            container: true,
            checkLinks: {
                status: "dev"
            },
            vPre: true,
            tabs: true,
            codetabs: true,
            align: true,
            attrs: true,
            sup: true,
            sub: true,
            footnote: true,
            mark: true,
            figure: true,
            imgLazyload: false,
            imgMark: true,
            imgSize: true,
            tasklist: true,
            include: true,
            katex: true,
            mathjax: true,
            chart: true,
            echarts: true,
            flowchart: true,
            mermaid: true,
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
            playground: {
                presets: ["ts", "vue"],
            },
            vuePlayground: true,
            demo: true,
            presentation: ["highlight", "math", "search", "notes", "zoom"],
            delay: 800
        },
        pwa: false,
        components: {
            components: [
                "AudioPlayer",
                "Badge",
                "BiliBili",
                "CodePen",
                "PDF",
                "StackBlitz",
                "VideoPlayer",
                "YouTube"
            ]
        },
        git: true,
        prismjs: true,
        photoSwipe: true,
        readingTime: {
            wordPerMinute: 300
        },
        seo: false,
        sitemap: false
    }
}, {
    custom: true
});
