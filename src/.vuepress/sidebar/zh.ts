import { sidebar } from "vuepress-theme-hope";
import { zhBoard } from "./zh-board";

export const zhSidebar = sidebar({
    "/project/intro": [{
        text: "",
        children: [""]
    }],
    "/project/intro-past": [{
        text: "",
        children: [""]
    }],
    "/signup/": [{
        text: "",
        children: [""]
    }],
    "/chip/board/official/boards/": zhBoard,
    "/cert/": [{
        text: "",
        children: [""]
    }],
    "/sig/": [{
        text: "",
        children: [""]
    }],
    "/job/team.html": [{
        text: "",
        children: [""]
    }],
    "/job/external/apply": [{
        text: "",
        children: [""]
    }],
    "/job/external/contents": [{
        text: "",
        children: [""]
    }]
});
