'use strict';

const BinaryTree = require('./binaryTree');

class BinarySearchTree extends BinaryTree {
  constructor(node){
    super(node);
  }

  add(node){
    if(!this.root){
      this.root = node;
      return node;
    }

    let currentNode = this.root;

    while(currentNode){

      if(node.value < currentNode.value){

        if(!currentNode.left){
          currentNode.left = node;
          break;
        } else{
          currentNode = currentNode.left;
        }

      } else if(node.value > currentNode.value){
        if(!currentNode.right){
          currentNode.right = node;
          break;
        } else{
          currentNode = currentNode.right;
        }

      }else{
        throw new Error('Value already exist');
      }

    }


  }

}

module.exports = BinarySearchTree;
