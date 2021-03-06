'use strict';

const BinaryTree = require('../tree');
const Node = require('../node');

describe('Binary Tree', () => {

  let bt;

  beforeEach(() => {
    bt = new BinaryTree();

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

  it('should be an instance of BreadthFirst ', () => {
    // Assert
    expect(bt).toBeInstanceOf(BinaryTree);
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


  it('should return max value in tree', () => {
    // Act
    let result = bt.findMaximumValue(bt);

    // Assert
    expect(result).toBe(20);
  });

});

