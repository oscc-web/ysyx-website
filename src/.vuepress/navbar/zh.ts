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
            "faq",
            "assistants"
        ]
    }, {
        text: "报名参与",
        link: "/signup/"
    }, {
        text: "课程资料",
        link: "https://ysyx.oscc.cc/docs/"
    }, {
        text: "学习记录",
        link: "https://docs.qq.com/sheet/DT29weHpIRWNnYlFl?tab=BB08J2"
    }, {
        text: "流片&板卡",
        prefix: "/chip/",
        children: [
            "tapout/",
            "board/official/"
        ]
    }, {
        text: "证书申请",
        link: "/cert/"
    }, {
        text: "兴趣小组",
        link: "/sig/"
    }, {
        text: "推荐&招聘",
        prefix: "/job/",
        children: ["team",{
            text: "外部委托",
            prefix: "external/",
            children: [
                "apply",
                "contents"
            ]
        }]
    }, {
        text: "联系我们",
        link: "/contact/"
    }
]);
