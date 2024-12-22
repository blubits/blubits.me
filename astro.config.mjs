import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";

import mailObfuscation from "astro-mail-obfuscation";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), react(), mailObfuscation()]
});