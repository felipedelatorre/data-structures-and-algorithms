'use strict';

class binaryTree{
  constructor(node){
    this.root = node;
  }

  preOrder(){
    let result= [];

    let _walk = node => {
      // L R Ro

      // Ro
      result.push(node.value);

      // Left
      if (node.left) _walk(node.left);

      // right
      if (node.right) _walk(node.right);      
    };
    _walk(this.root);
    return result;
  }

  postOrder(){
    let result= [];

    // L R Ro
    let _walk = node => {

      // Left
      if (node.left) _walk(node.left);

      // right
      if (node.right) _walk(node.right);

      // Ro
      result.push(node.value);
    };
    _walk(this.root);
    return result;
  }

  inOrder(){
    let result= [];

    // L Ro R
    let _walk = node => {

      // Left
      if (node.left) _walk(node.left);

      // Ro
      result.push(node.value);

      // right
      if (node.right) _walk(node.right);

    };
    _walk(this.root);
    return result;
  }

}



module.exports = binaryTree;
