'use require';

class Node{
  constructor(value, right, left){
    this.value = value;
    this.right = right || null;
    this.left = left || null;
  }
}
module.exports = Node;
