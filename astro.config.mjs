import react from "@astrojs/react";
import markdownIntegration from "@astropub/md";
import remarkCallout from "@r4ai/remark-callout";
import icon from "astro-icon";
import mailObfuscation from "astro-mail-obfuscation";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { remarkObsidianLink } from "remark-obsidian-link";
import remarkRemoveFirstH1 from "./remark-remove-heading.mjs";
import remarkTikzjax from "./remark-tikzjax.ts";
import remarkRemoveComments from "./remark-remove-comments.mjs";
import { readFile } from "fs/promises"

import expressiveCode from "astro-expressive-code";

import tailwindcss from "@tailwindcss/vite";

import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
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
    favicons({
      input: {
        favicons: [
          await readFile("public/favicon-ty.png"),
          await readFile("public/favicon-xs.png"),
          await readFile("public/favicon-sm.png"),
          await readFile("public/favicon-md.png"),
          await readFile("public/favicon-lg.png"),
        ],
      }
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});