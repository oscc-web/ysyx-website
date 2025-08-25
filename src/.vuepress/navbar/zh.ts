import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    {
        text: "首页",
        link: "/"
    }, {
        text: "关于项目",
        prefix: "/project/",
        children: [
            "intro",
            "intro-past",
            "community",
            "faq",
            {
              text: "贡献名单",
              link: "https://fa45epzd9c7.feishu.cn/docx/ClBIdKNVIo0n3gxkNGIcizw6nZz"
            }
        ]
    }, {
        text: "报名参与",
        link: "/signup/"
    }, {
        text: "课程资料",
        link: "https://ysyx.oscc.cc/docs/"
    }, {
        text: "学习记录",
        link: "https://fa45epzd9c7.feishu.cn/base/Ftq7bp8IhakPHGsN4AIc5xXuncf"
    }, {
        text: "专题分享",
        link: "https://fa45epzd9c7.feishu.cn/wiki/MKNowVYskijDGGkpTyQcN8BenIe"
    }, {
        text: "流片&板卡",
        prefix: "/chip/",
        children: [
            "tapeout/",
            "board/official/"
        ]
    }, {
        text: "证书&简历",
        link: "/cert/"
    }, {
        text: "兴趣小组",
        link: "/sig/"
    }, {
        text: "推荐&招聘",
        prefix: "/job/",
        children: ["team", {
            text: "外部委托",
            prefix: "external/",
            children: [
                "apply",
                "contents"
            ]
        }]
    }, {
        text: "线下基地招生",
        link: "https://fa45epzd9c7.feishu.cn/docx/Jdl7d1ZWtoLD6ZxXDdcc7Reonsc"
    }, {
        text: "联系我们",
        link: "/contact/"
    }
]);
