import { visit } from "unist-util-visit";
import nodeTikzjax from "node-tikzjax";
import type { RemarkPlugin } from "@astrojs/markdown-remark";

// Initialize tikzjax
// @ts-ignore
const tex2svg = nodeTikzjax.default;
const tex2svgOptions = {
  showConsole: true,
  embedFontCss: true,
};

// Wrap SVG output in a div
const wrapSVG = (svg: string): string =>
  `<div class="responsive stroke-white margin-auto my-12 flex justify-center" style="zoom:1.2;">${svg}</div>`;

// Convert TikZ to SVG
const convertTikz = async (tex: string): Promise<string> => {
  const documentTex = `${tex}`;
  let svg = await tex2svg(documentTex, tex2svgOptions);
  svg = svg
    .replaceAll(/("#000"|"black")/g, `"currentColor"`)
    .replaceAll(
      /stroke="currentColor"/g,
      `stroke="currentColor" fill="currentColor"`,
    )
    .replaceAll(/("#fff"|"white")/g, `"var(--back)"`);
  return wrapSVG(svg);
};

// Remark plugin
const remarkTikzjax: RemarkPlugin = () => async (tree) => {
  const tikzNodes: any[] = [];
  
  // First, collect all TikZ nodes
  visit(tree, "code", (node: any) => {
    if (node.lang === "tikz") {
      tikzNodes.push(node);
    }
  });

  // Process nodes sequentially
  for (const node of tikzNodes) {
    try {
      const svg = await convertTikz(node.value);
      node.type = "html";
      node.value = svg;
    } catch (err) {
    }
  }
};

export default remarkTikzjax;