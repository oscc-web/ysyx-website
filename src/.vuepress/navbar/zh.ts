import { navbar } from "vuepress-theme-hope";
import { zhCourse } from "./zh-course";
import { zhBoard } from "./zh-board";

export const zhNavbar = navbar([
    {
        text: "项目介绍",
        icon: "shield",
        prefix: "/project/",
        children: ["project-intro",
                   "project-intro-past"]
    }, {
        text: "报名参与",
        icon: "computer",
        prefix: "/signup/",
        children: ["signup-notice",
                   "signup-faq"]
    },
    zhCourse,
    zhBoard,
    {
        text: "学习记录",
        icon: "table",
        link: "https://docs.qq.com/sheet/DT29weHpIRWNnYlFl?tab=BB08J2"
    }, {
        text: "成果展示",
        icon: "star",
        prefix: "/achieve/",
        children: ["achieve-teacher",
                   "achieve-student"]
    }, {
        text: "兴趣小组",
        icon: "layer-group",
        link: "/sig/"
    }, {
        text: "推荐&招聘",
        icon: "book",
        prefix: "/job/",
        children: ["job-team.md",
                   "job-company"]
    }, {
        text: "联系我们",
        icon: "address-card",
        link: "/contact/"
    }
]);
