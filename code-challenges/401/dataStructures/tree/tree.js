'use strict';

const Node = require('./node');



class BinarySearchTree {
  constructor(node){
    this.root = node;
  }


  preOrder(){

  }

  inOrder(){
    let result= [];

    let _walk = node => {
      // L Ro R

      // Left
      if (node.left) _walk(node.left);

      // Ro
      result.push(node.value);

      // right
      if (node.right) _walk(node.right);

      _walk(this.root);
      return result;
    };

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
        if(!currentNode.left){
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
