import { mergeSort } from './mergeSort';
import { Node } from './Node';

export class Tree {
  constructor(arr) {
    this.arr = mergeSort(arr);
  }

  get root() {
    return this.buildTree();
  }

  buildTree() {
    // FIXME:
    const root = new Node(this.arr[parseInt(this.arr.length / 2)]);
    return root;
  }

  toString() {}
  insert(value) {}
  delete(value) {}
  find(value) {}
  levelOrder(callback) {}
  inOrder(callback) {}
  preorder(callback) {}
  postorder(callback) {}
  height(node) {}
  depth(node) {}
  isBalanced() {}
  rebalance() {}
}
