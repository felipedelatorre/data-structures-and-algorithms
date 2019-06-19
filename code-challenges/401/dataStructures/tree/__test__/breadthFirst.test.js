'use strict';

const BreadthFirst = require('../tree');
const Node = require('../node');

describe('Name of the group', () => {

  let bt;

  beforeEach(() => {
    bt = new BreadthFirst();

    let root = new Node(15);
    let five = new Node(5);
    let eighteen = new Node(18);

    root.left = five;
    root.right = eighteen;

    bt.root = root;
  });

  it('should be an instance of BreadthFirst ', () => {
    expect(bt).toBeInstanceOf(BreadthFirst);
  });

  it('should console.log', () => {
    const spy = jest.spyOn(console, 'log');

    bt.breadthFirst(bt);

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });

});

