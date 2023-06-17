import { navbar } from "vuepress-theme-hope";
import { zhCourse } from "./zh-course";
import { zhBoard } from "./zh-board";

export const zhNavbar = navbar([
    {
        text: "项目介绍",
        icon: "shield",
        prefix: "/project/",
        children: ["project-intro.md",
                   "project-intro-past.md"]
    }, {
        text: "报名参与",
        icon: "computer",
        prefix: "/signup/",
        children: ["signup-notice.md",
                   "signup-faq.md"]
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
        children: ["achieve-teacher.md",
                   "achieve-student.md"]
    }, {
        text: "兴趣小组",
        icon: "layer-group",
        link: "/sig/"
    }, {
        text: "推荐&招聘",
        icon: "book",
        prefix: "/job/",
        children: ["job-university.md",
                   "job-company.md",
                   "job-self.md"]
    }, {
        text: "联系我们",
        icon: "address-card",
        link: "/contact/"
    }
]);
