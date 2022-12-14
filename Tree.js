import { mergeSort } from './mergeSort.js';
import { Node } from './Node.js';

export class Tree {
  constructor(arr) {
    this.arr = mergeSort(arr);
  }

  get root() {
    return this.buildTree();
  }

  set root(arr) {
    this.arr = arr;
  }

  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  buildTree(subarray = this.arr) {
    const node = new Node(subarray[parseInt((subarray.length - 1) / 2)]);
    let leftArr = subarray.slice(0, parseInt((subarray.length - 1) / 2));
    if (leftArr.length === 2) {
    }
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

  insert(value) {
    this.root = mergeSort(this.arr.concat(value));
  }

  delete(value) {
    this.root = this.arr.filter((node) => {
      return node !== value;
    });
  }

  height(node = this.root, count = 0) {
    if (!node) return;
    if (!node.left && !node.right) return count;
    let left = this.height(node.left, count + 1);
    let right = this.height(node.right, count + 1);
    return left > right ? left : right;
  }

  depth(node = this.root, count = 0) {
    return this.height() - this.height(node);
  }

  isBalanced() {
    return (
      Math.abs(this.height(this.root.left) - this.height(this.root.right)) <= 1
    );
  }

  rebalance() {
    this.buildTree();
  }
}
