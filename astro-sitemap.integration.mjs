import { defineIntegration } from "astro-integration";

export default defineIntegration({
  name: "astro-sitemap",
  hooks: {
    'astro:build:done': async ({ pages, logger }) => {
      const urls = pages.map((page) => `https://blubits.me${page.pathname}`);
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `<url><loc>${url}</loc></url>`).join("\n")}\n</urlset>`;
      await Bun.write("./dist/sitemap.xml", sitemap);
      logger.info("Sitemap generated!");
    },
  },
});
