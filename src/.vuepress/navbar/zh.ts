import { navbar } from "vuepress-theme-hope";
import { zhCourse } from "./zh-course";
import { zhBoard } from "./zh-board";

export const zhNavbar = navbar([
    {
        text: "首页",
        link: "/"
    }, {
        text: "关于项目",
        prefix: "/project/",
        children: ["project-intro",
                   "project-intro-past",
                   "project-faq",
                   "project-assistant"]
    }, {
        text: "报名参与",
        link: "/signup/"
    },
    zhCourse,
    {
        text: "学习记录",
        link: "https://docs.qq.com/sheet/DT29weHpIRWNnYlFl?tab=BB08J2"
    }, {
        text: "芯片板卡",
        prefix: "/chip/",
        children: ["tapout/",
                   "board/official/"]
    },
    {
        text: "兴趣小组",
        link: "/sig/"
    }, {
        text: "推荐&招聘",
        prefix: "/job/",
        children: ["job-team",
                   "job-company"]
    }, {
        text: "联系我们",
        link: "/contact/"
    }
]);
