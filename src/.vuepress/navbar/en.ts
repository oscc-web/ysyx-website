import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
    {
        text: "Home",
        link: "/en/"
    }, {
        text: "About Project",
        prefix: "/en/project/",
        children: [
            "intro",
            "intro-past",
            "faq",
            "assistants"
        ]
    }, {
        text: "Signup",
        link: "/en/signup/"
    }, {
        text: "Course",
        link: "https://ysyx.oscc.cc/docs/en/"
    }, {
        text: "Study Record",
        link: "https://docs.qq.com/sheet/DT29weHpIRWNnYlFl?tab=BB08J2"
    }, {
        text: "Tap-Out & Board",
        prefix: "/en/chip/",
        children: [
            "tapout/",
            "board/official/"
        ]
    }, {
        text: "Certificate",
        link: "/en/cert/"
    }, {
        text: "SIG",
        link: "/en/sig/"
    }, {
        text: "Recruitment",
        prefix: "/en/job/",
        children: ["team", {
            text: "External",
            prefix: "external/",
            children: [
                "apply",
                "contents"
            ]
        }]
    }, {
        text: "Contact US",
        link: "/en/contact/"
    }
]);
