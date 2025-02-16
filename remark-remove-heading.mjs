import { visit } from 'unist-util-visit';

export default function remarkRemoveFirstH1() {
  return (tree) => {
    let firstH1Removed = false;
    // Remove the first h1
    visit(tree, 'heading', (node, index, parent) => {
      if (!firstH1Removed && node.depth === 1 && parent && typeof index === 'number') {
        parent.children.splice(index, 1);
        firstH1Removed = true;
      }
    });
  };
}