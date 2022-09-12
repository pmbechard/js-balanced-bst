import { Node } from './Node';

describe('Node object', () => {
  it('creates node of value 2 with null left and right', () => {
    const node = new Node(2);
    expect(node.value).toBe(2);
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
  });

  it('returns values of right and left nodes', () => {
    const node = new Node(2, new Node(1), new Node(3));
    expect(node.value).toBe(2);
    expect(node.left.value).toBe(1);
    expect(node.right.value).toBe(3);
  });
});
