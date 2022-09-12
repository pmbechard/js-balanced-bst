import { Tree } from './Tree';

describe('Tree object methods', () => {
  let tree;

  beforeEach(() => {
    tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it('sorts provided array', () => {
    expect(tree.root.value).toBe(5);
  });
});
