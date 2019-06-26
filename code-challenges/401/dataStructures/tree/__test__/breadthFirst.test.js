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
    let four = new Node(4);
    let twenty = new Node(20);

    root.left = five;
    root.right = eighteen;
    
    five.left = four;
    five.right = twenty;

    bt.root = root;

  //          15
  //        /   \
  //       5    18
  //     /  \
  //    4    20
  });

  it('should be an instance of BreadthFirst', () => {
    // Assert
    expect(bt).toBeInstanceOf(BreadthFirst);
  });

  it('should return string if tree is empty', () => {
    let emptyBt = new BreadthFirst();
    let result = emptyBt.breadthFirst(emptyBt);
    expect(result).toBe('This Tree is empty');
  });

  it('should console.log', () => {
    const spy = jest.spyOn(console, 'log');

    // Act
    bt.breadthFirst(bt);

    // Assert
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should not modify the tree', () => {
    // Arrenge
    let root = bt.root;

    // Act
    bt.breadthFirst(bt);

    // Assert
    expect(root.value).toBe(15);
    expect(root.left.value).toBe(5);
    expect(root.right.value).toBe(18);
    expect(root.left.left.value).toBe(4);
    expect(root.left.right.value).toBe(20);
  });

});

