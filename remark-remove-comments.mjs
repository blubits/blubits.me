import { findAndReplace } from 'mdast-util-find-and-replace';

export default function remarkRemoveComments() {
  return (tree) => {
    findAndReplace(tree, [/%%[^%]*%%/g, '']);
  };
}
