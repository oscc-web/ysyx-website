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
            {
              text: "TA Team",
              link: "https://fa45epzd9c7.feishu.cn/docx/ClBIdKNVIo0n3gxkNGIcizw6nZz"
            }
        ]
    }, {
        text: "Signup",
        link: "/en/signup/"
    }, {
        text: "Course",
        link: "https://ysyx.oscc.cc/docs/en/"
    },
    // {
    //     text: "Study Record",
    //     link: "https://fa45epzd9c7.feishu.cn/base/Ftq7bp8IhakPHGsN4AIc5xXuncf"
    // },
    // {
    //     text: "Tape-Out & Board",
    //     prefix: "/en/chip/",
    //     children: [
    //         "tapeout/",
    //         "board/official/"
    //     ]
    // },
    // {
    //     text: "Certificate & CV",
    //     link: "/en/cert/"
    // },
    // {
    //     text: "SIG",
    //     link: "/en/sig/"
    // },
    // {
    //     text: "Recruitment",
    //     prefix: "/en/job/",
    //     children: ["team", {
    //         text: "External",
    //         prefix: "external/",
    //         children: [
    //             "apply",
    //             "contents"
    //         ]
    //     }]
    // },
    {
        text: "Contact us",
        link: "/en/contact/"
    }
]);
