'use strict';

const Node = require('../node');
const BinarySearchTree = require('../tree');

describe('Class binarySearchTree ', () => {


  it('Can successfully instantiate an empty tree', () => {
    let tree = new BinarySearchTree();
    expect(tree).toBeInstanceOf(BinarySearchTree);
  });

  it('Can successfully instantiate a tree with a single root node ', () => {
    let tree = new BinarySearchTree(55);
    expect(tree.root).toBe(55);
  });

  it('Can successfully add a left child and right child to a single root node ', () => {
    let initNode = new Node(5);
    let tree = new BinarySearchTree(initNode);
    let nodeA = new Node(1);
    let nodeB = new Node(10);

    tree.add(nodeA);
    tree.add(nodeB);

    expect(tree.root.left.value).toBe(1);
    expect(tree.root.right.value).toBe(10);
  });


  describe('Bst traversal', () => {
    let bst = new BinarySearchTree();

    beforeEach(() => {
      let root = new Node(42);
      let four = new Node(4);
      let five = new Node(5);
      let seven = new Node(7);
      let fifty = new Node(50);
      let fiftyFive = new Node(55);
      let senventySeven = new Node(77);

      root.left = five;
      root.right = fiftyFive;

      five.left = four;
      five.right = seven;

      fiftyFive.left = fifty;
      fiftyFive.right = senventySeven;

      bst.root = root;
    });

    it('Can successfully return a collection from a preorder traversal', () => {
      let preOrder = bst.preOrder();
      expect(preOrder).toStrictEqual([42, 5, 4, 7, 55, 50, 77]);
    });


    it('Can successfully return a collection from an inorder traversal', () => {
      let inOrderArr = bst.inOrder();
      expect(inOrderArr).toStrictEqual([4, 5, 7, 42, 50, 55, 77]);
    });

    it('Can successfully return a collection from a postorder traversal', () => {
      let postOrderArr = bst.postOrder();
      expect(postOrderArr).toStrictEqual([4, 7, 5, 50, 77, 55, 42]);
    });


  });


});
