import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IQKV Foundation",
  description:
    "Free, open-source, API-first, headless platform built using Spring Boot, Kafka, Postgresql, and ReactJs.",
  theme: "./theme",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Platform Overview", link: "/platform-overview" },
      {
        text: "User Guides",
        items: [
          { text: "Tenant App", link: "/tenant-app" },
          { text: "Platform Admin", link: "/platform-admin" },
        ],
      },
    ],

    sidebar: [
      {
        text: "Documentation",
        items: [
          { text: "Platform Overview", link: "/platform-overview" },
          { text: "Tenant App", link: "/tenant-app" },
          { text: "Platform Admin", link: "/platform-admin" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/IQKV/foundation-docs-website",
      },
    ],
  },
});
