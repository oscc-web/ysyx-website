import { sidebar } from "vuepress-theme-hope";
import { zhBoard } from "./zh-board";

export const zhSidebar = sidebar({
    "/project/project-intro.html": [{
        text: "",
        children: [""]
    }],
    "/project/project-intro-past.html": [{
        text: "",
        children: [""]
    }],
    "/signup/": [{
        text: "",
        children: ["README.md"]
    }],
    "/achieve/achieve-teacher.html": [{
        text: "",
        children: [""]
    }],
    "/achieve/achieve-student.html": [{
        text: "",
        children: [""]
    }],
    "/board/official/": [{
        text: "",
        children: ["README.md"]
    }],
    "/sig/": [{
        text: "",
        children: ["README.md"]
    }],
    "/job/job-team.html": [{
        text: "",
        children: [""]
    }],
    "/job/job-company.html": [{
        text: "",
        children: [""]
    }],
    "/board/official/boards/": zhBoard
});
