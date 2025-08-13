import react from "@astrojs/react";
import markdownIntegration from "@astropub/md";
import remarkCallout from "@r4ai/remark-callout";
import icon from "astro-icon";
import mailObfuscation from "astro-mail-obfuscation";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { remarkObsidianLink } from "remark-obsidian-link";
import expressiveCode from "astro-expressive-code";
import tailwindcss from "@tailwindcss/vite";
import remarkRemoveFirstH1 from "./remark-remove-heading.mjs";
import remarkTikzjax from "./remark-tikzjax.ts";
import remarkRemoveComments from "./remark-remove-comments.mjs";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://blubits.me",
  markdown: {
    remarkPlugins: [
      remarkTikzjax,
      remarkRemoveFirstH1,
      remarkRemoveComments,
      remarkCallout,
      remarkMath,
      remarkObsidianLink,
    ],
    rehypePlugins: [rehypeKatex],
  },

  integrations: [
    icon(),
    react(),
    mailObfuscation(),
    markdownIntegration(),
    expressiveCode({
      themes: ["dark-plus"],
      styleOverrides: {
        codeFontFamily: "JetBrains Mono",
      },
    }),
    sitemap(),
    // Temporarily commented out to test theme-color functionality
    // favicons({
    //   input: {
    //     favicons: [
    //       await readFile("public/favicon-ty.png"),
    //       await readFile("public/favicon-xs.png"),
    //       await readFile("public/favicon-sm.png"),
    //       await readFile("public/favicon-md.png"),
    //       await readFile("public/favicon-lg.png"),
    //     ],
    //   },
    //   config: {
    //     manifestMaskable: false,
    //     themeColor: false, // Completely disable theme-color generation
    //     appleTouch: {
    //       themeColor: false,
    //     },
    //     manifest: {
    //       themeColor: false,
    //     }
    //   }
    // }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});