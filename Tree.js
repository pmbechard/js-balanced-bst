import { mergeSort } from './mergeSort';
import { Node } from './Node';

export class Tree {
  constructor(arr) {
    this.arr = mergeSort(arr);
  }

  get root() {
    return this.buildTree();
  }

  buildTree(subarray = this.arr) {
    const node = new Node(subarray[parseInt((subarray.length - 1) / 2)]);
    let leftArr = subarray.slice(0, parseInt((subarray.length - 1) / 2));
    node.left = leftArr.length > 0 ? this.buildTree(leftArr) : null;
    let rightArr = subarray.slice(parseInt((subarray.length - 1) / 2) + 1);
    node.right = rightArr.length > 0 ? this.buildTree(rightArr) : null;
    return node;
  }

  toArray() {
    const result = [];
    const fillResult = (node) => {
      result.push(node.value);
    };
    this.levelOrder(fillResult);
    return result;
  }

  levelOrder(callback, children = [this.root]) {
    if (children.length === 0) return;
    const node = children[0];
    children = children.slice(1);
    callback(node);
    node.left && children.push(node.left);
    node.right && children.push(node.right);
    this.levelOrder(callback, children);
  }

  inOrder(callback, children = [this.root]) {
    const node = children[children.length - 1];
    node.left && children.push(node.left) && this.inOrder(callback, children);
    callback(node);
    node.right && children.push(node.right) && this.inOrder(callback, children);
  }

  preOrder(callback, children = [this.root]) {
    const node = children[children.length - 1];
    callback(node);
    node.left && children.push(node.left) && this.preOrder(callback, children);
    node.right &&
      children.push(node.right) &&
      this.preOrder(callback, children);
  }

  postOrder(callback, children = [this.root]) {
    const node = children[children.length - 1];
    node.left && children.push(node.left) && this.postOrder(callback, children);
    node.right &&
      children.push(node.right) &&
      this.postOrder(callback, children);
    callback(node);
  }

  find(value) {
    let result;
    const checkValue = (node) => {
      if (value == node.value) result = node;
    };
    this.levelOrder(checkValue);
    return result || null;
  }

  insert(value) {}
  delete(value) {}
  height(node) {}
  depth(node) {}
  isBalanced() {}
  rebalance() {}
}
