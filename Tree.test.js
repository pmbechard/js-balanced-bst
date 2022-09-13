import { Tree } from './Tree';

describe('Tree object methods', () => {
  let tree;

  beforeEach(() => {
    tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('sorts provided array', () => {
    expect(tree.root.value).toBe(5);
  });

  it('buildTree() initializes balanced binary tree', () => {
    const node = tree.root;
    expect(node.value).toBe(5);
    expect(node.left.value).toBe(2);
    expect(node.right.value).toBe(7);
    expect(node.left.left.value).toBe(1);
    expect(node.left.right.value).toBe(3);
    expect(node.right.left.value).toBe(6);
    expect(node.right.right.value).toBe(8);
    expect(node.left.right.right.value).toBe(4);
    expect(node.right.right.right.value).toBe(9);
  });

  it('levelOrder() provides breadth-first traversal', () => {
    const result = [];
    const fillResult = (node) => {
      result.push(node.value);
    };
    tree.levelOrder(fillResult);
    expect(result).toStrictEqual([5, 2, 7, 1, 3, 6, 8, 4, 9]);
  });
});
