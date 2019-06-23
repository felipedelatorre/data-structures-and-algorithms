'use strict';

const Node = require('./node');

class Queue{
  constructor(){
    this.front = null;
    this.back = null;
  }
  
  enqueue(item){
    let node = new Node(item);

    if(!this.back){
      this.front = node;
      this.back = node;
    } else{
      this.back.next = node;
      this.back = node;
    }
  }

  dequeue(){
    let result = this.front.value;
    this.front = this.front.next;
    return result;
  }

  peek() {
    if (this.front){
      return this.front.value;
    } else {
      return null;
    }
  }


}


module.exports = Queue;
