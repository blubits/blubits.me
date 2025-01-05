import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import markdownIntegration from '@astropub/md';
import icon from "astro-icon";
import mailObfuscation from "astro-mail-obfuscation";
import { defineConfig } from 'astro/config';
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkCallout from "@r4ai/remark-callout";
import {remarkObsidianLink} from "remark-obsidian-link";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkCallout, remarkMath, remarkObsidianLink],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [tailwind(), icon(), react(), mailObfuscation(), markdownIntegration(), expressiveCode({
    themes: ["dark-plus"],
    styleOverrides: {
      codeFontFamily: "JetBrains Mono"
    }
  })]
});