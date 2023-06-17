import { sidebar } from "vuepress-theme-hope";
import { zhBoard } from "./zh-board";

export const zhSidebar = sidebar({
    "/project/": [{
        text: "项目介绍",
        icon: "shield",
        children: ["project-intro.md",
                   "project-intro-past.md"]
    }],
    "/signup/": [{
        text: "报名参与",
        icon: "computer",
        children: ["signup-notice.md",
                   "signup-faq.md"]
    }],
    "/board/official/boards/": zhBoard,
    "/achieve/": [{
        text: "成果展示",
        icon: "star",
        children: ["achieve-teacher.md",
                   "achieve-student.md"]
    }],
    "/job/": [{
        text: "推荐&招聘",
        icon: "book",
        children: ["job-university.md",
                   "job-company.md",
                   "job-self.md"]
    }]
});
