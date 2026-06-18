import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IQ Key Value Docs",
  description:
    "Free, open-source, SaaS platform built using Spring Boot, Rabbitmq, Postgresql, and ReactJs.",
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
      { text: "Demo Site", link: "https://www.iqkv.site" },
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
        link: "https://github.com/IQKV/microservice-platform",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2026 IQ Key Value Platform",
    },

    editLink: {
      pattern: "https://github.com/IQKV/foundation-docs-website",
    },

    search: {
      provider: "local",
    },
  },
  ignoreDeadLinks: [/^https?:\/\/localhost/],
  cleanUrls: false,
});
