'use strict';

const fizzBuzzTree = require('../fizz-buzz-tree');
const BST = require('../tree');
const Node = require('../node');

describe('fizzBuzz(treeObj) ', () => {
  let bst = new BST();

  beforeEach(() => {
    let root = new Node(15);
    let two = new Node(2);
    let five = new Node(5);
    let eighteen = new Node(18);

    root.left = five;
    root.right = eighteen;

    five.left = two;

    //      15
    //    5   18
    //   2
    bst.root = root;
  });

  it('should return instance of BST', () => {
    expect(bst).toBeInstanceOf(BST);
  });

  it('should change value of root.left from 5 to Buzz', () => {
    fizzBuzzTree(bst);
    expect(bst.root.left.value).toBe('Buzz');
  });

  it('should change value of root.right from 18 to Fizz', () => {
    fizzBuzzTree(bst);
    expect(bst.root.right.value).toBe('Fizz');
  });

  it('should not change value of root.left.left', () => {
    fizzBuzzTree(bst);
    expect(bst.root.left.left.value).toBe(2);
  });


});
