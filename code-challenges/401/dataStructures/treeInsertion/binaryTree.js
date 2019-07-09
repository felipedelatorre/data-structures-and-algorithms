'use strict';

class binaryTree{
  constructor(node){
    this.root = node || null;
  }

  preOrder(){
    let result= [];
    let _walk = node => {
      result.push(node.value); // Ro
      if (node.left) _walk(node.left); // L
      if (node.right) _walk(node.right); //R
    };
    _walk(this.root);

    return result;
  }

  postOrder(){
    let result= [];
    let _walk = node => {
      if (node.left) _walk(node.left); // L
      if (node.right) _walk(node.right); // R
      result.push(node.value); // Ro
    };
    _walk(this.root);

    return result;
  }

  inOrder(){
    let result= [];
    let _walk = node => {
      if (node.left) _walk(node.left); // L
      result.push(node.value); // Ro
      if (node.right) _walk(node.right); // R
    };
    _walk(this.root);

    return result;
  }

  breadthFirst(tree) {
    if(tree.root === null) return 'This Tree is empty';
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
