import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Deez Mods",
  tagline: "Which mods? Deez Mods.",
  //   favicon: "img/favicon.ico",
  favicon: "img/logo/deez_mods_icon_color@0.5x.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://deezmods.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "deez-mods", // Usually your GitHub org/user name.
  projectName: "deez-mods.github.io", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "./pages/docs",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          routeBasePath: "/",
        },
        // blog: {
        //   path: "./pages/blog",
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: [
            "./src/css/fonts.css",
            "./src/css/theme.css",
            "./src/css/styles.css",
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "DeezMods",
      style: "dark",
      logo: {
        alt: "My Site Logo",
        src: "img/logo/deez_mods_icon_color@0.5x.png",
      },
      items: [
        {
          type: "dropdown",
          label: "Projects",
          position: "left",
          items: [
            {
              type: "docSidebar",
              sidebarId: "hytale-unified-ui-sidebar",
              label: "Unified UI",
            },
            {
              label: "Emerald Craft",
              href: "https://www.curseforge.com/minecraft-bedrock/addons/emerald-craft",
            },
          ],
        },
        // {
        //   to: "/news",
        //   label: "News",
        //   position: "left",
        // },
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorial-sidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        // {
        //   to: "/blog",
        //   label: "Blog",
        //   position: "left",
        // },
        {
          type: "html",
          position: "right",
          value:
            '<a class="nav-html-button" data-icon="github" href="https://github.com/deez-mods" target="_blank">GitHub</a>',
        },
        {
          type: "html",
          position: "right",
          value:
            '<a class="nav-html-button" data-icon="curseforge" href="https://www.curseforge.com/members/deezmods/projects" target="_blank">Curse</a>',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Dev Docs",
          items: [
            {
              label: "Unified UI - Dev",
              to: "/hytale-unified-ui/developer-section/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "CurseForge",
              href: "https://www.curseforge.com/members/deezmods/projects",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/deez-mods",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DeezMods, HarleyCodes.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["java"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
