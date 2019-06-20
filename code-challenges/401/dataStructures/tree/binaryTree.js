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


  breadthFirst(tree) {
    let queue = [tree.root];
    let currentNode = queue.shift();

    while (currentNode) {
      console.log(currentNode.value);
      queue.push(currentNode.left);
      queue.push(currentNode.right);
      currentNode = queue.shift();
    }
  }

  findMaximumValue(tree) {
    let queue = [tree.root];
    let currentNode = queue.shift();
    let maxVal = tree.root.value;
    while (currentNode) {
      if(currentNode.value > maxVal){
        maxVal = currentNode.value;
      }
      queue.push(currentNode.left);
      queue.push(currentNode.right);
      currentNode = queue.shift();
    }
    return maxVal;

  }


}



module.exports = binaryTree;
