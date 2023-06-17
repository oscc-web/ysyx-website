import { sidebar } from "vuepress-theme-hope";
import { zhBoard } from "./zh-board";

export const zhSidebar = sidebar({
    "/project/": [{
        text: "项目介绍",
        icon: "shield",
        children: ["project-intro",
                   "project-intro-past"]
    }],
    "/signup/": [{
        text: "报名参与",
        icon: "computer",
        children: ["signup-notice",
                   "signup-faq"]
    }],
    "/board/official/boards/": zhBoard,
    "/achieve/": [{
        text: "成果展示",
        icon: "star",
        children: ["achieve-teacher",
                   "achieve-student"]
    }],
    "/job/": [{
        text: "推荐&招聘",
        icon: "book",
        children: ["job-university",
                   "job-company",
                   {
                       text: "团队招聘",
                       icon: "user",
                       prefix: "job-team/",
                       children: ["job-submit",
                                  "job-objects"]
                   }]
    }]
});
