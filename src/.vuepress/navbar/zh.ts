import { navbar } from "vuepress-theme-hope";
import { zhCourse } from "./zh-course";
import { zhBoard } from "./zh-board";

export const zhNavbar = navbar([
    {
        text: "项目介绍",
        icon: "shield",
        prefix: "/project/",
        children: [{
            text: "项目概述",
            icon: "bullseye",
            link: "project-intro"
        }, {
            text: "往期介绍",
            icon: "route",
            link: "project-intro-past"
        }]
    }, {
        text: "报名参与",
        icon: "computer",
        prefix: "/signup/",
        children: [{
            text: "报名需知",
            icon: "flag",
            link: "signup-notice"
        }, {
            text: "常见问题",
            icon: "circle-question",
            link: "signup-faq"
        }]
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
        children: [{
            text: "助教团队",
            icon: "person-chalkboard",
            link: "achieve-teacher"
        }, {
            text: "学生成果",
            icon: "graduation-cap",
            link: "achieve-student"
        }]
    }, {
        text: "兴趣小组",
        icon: "layer-group",
        link: "/sig/"
    }, {
        text: "推荐&招聘",
        icon: "book",
        prefix: "/job/",
        children: [{
            text: "高校推荐",
            icon: "building-columns",
            link: "job-university"
        }, {
            text: "企业招聘",
            icon: "building",
            link: "job-company"
        }, {
            text: "自行培养",
            icon: "user",
            link: "job-self"
        }]
    }, {
        text: "联系我们",
        icon: "address-card",
        link: "/contact/"
    },
]);
