'use strict';


// To help test
const BT = require('../binaryTree');
const Node = require('../node');

// To test
const treeInsertion = require('../treeInsertion');

describe('treeInsertion - Checks duplicates in two binary trees  ', () => {

  let btA;
  let btB;

  describe('Main function - treeInsertion()', () => {

    it('should check if nodes in trees match - 1 Match', () => {
      btA = new BT();
      let rootA = new Node(14);
      let fiveA = new Node(5);
      let eighteenA = new Node(18);
      rootA.left = fiveA;
      rootA.right = eighteenA;
      btA.root = rootA;
      //          14
      //        /   \
      //       5    18

      btB = new BT();
      let rootB = new Node(15);
      let sixB = new Node(6);
      let eighteenB = new Node(18);

      rootB.left = sixB;
      rootB.right = eighteenB;
      btB.root = rootB;
      //          15
      //        /   \
      //       6    18

      let result = treeInsertion(btA,btB);
      expect(result).toStrictEqual([18]);
    });

    it('should check if nodes in trees match - All Matches', () => {
      btA = new BT();
      let rootA = new Node(14);
      let fiveA = new Node(5);
      let eighteenA = new Node(18);
      rootA.left = fiveA;
      rootA.right = eighteenA;
      btA.root = rootA;
      //          14
      //        /   \
      //       5    18

      btB = new BT();
      let rootB = new Node(14);
      let fiveB = new Node(5);
      let eighteenB = new Node(18);

      rootB.left = fiveB;
      rootB.right = eighteenB;
      btB.root = rootB;
      //          14
      //        /   \
      //       5    18

      let result = treeInsertion(btA,btB);
      expect(result).toStrictEqual([5,18,14]);
    });

    it('should check if nodes in trees match - 0 Matches', () => {
      btA = new BT();
      let rootA = new Node(14);
      let fiveA = new Node(5);
      let eighteenA = new Node(18);
      rootA.left = fiveA;
      rootA.right = eighteenA;
      btA.root = rootA;
      //          14
      //        /   \
      //       5    18

      btB = new BT();
      let rootB = new Node(16);
      let sixB = new Node(6);
      let nineTeenB = new Node(19);

      rootB.left = sixB;
      rootB.right = nineTeenB;
      btB.root = rootB;
      //          16
      //        /   \
      //       6    19

      let result = treeInsertion(btA,btB);
      expect(result).toStrictEqual([]);
    });

    it('should throw error', () => {
      btA = new BT();
      let rootA = new Node(14);
      let fiveA = new Node(5);
      let eighteenA = new Node(18);
      rootA.left = fiveA;
      rootA.right = eighteenA;
      btA.root = rootA;

      btB = new BT();
      expect(()=>{
        treeInsertion(btA,btB);
      }).toThrow();
    });

  });
});
