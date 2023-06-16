import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  { text: "Demo", icon: "discover", link: "/en/demo/" },
  {
    text: "Guide",
    icon: "creative",
    prefix: "/en/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "note",
    link: "https://theme-hope.vuejs.press/en/",
  },
]);
