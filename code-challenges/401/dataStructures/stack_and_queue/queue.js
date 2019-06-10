'use strict';

const Node = require('./node');

class Queue{
  constructor(){
    this.front = null;
  }
  enqueue(item){
    let node = new Node(item);
    let curr = this.front;

    if(!this.front){
      this.front = node;
    } else{
      while(curr.next){
        curr = curr.next;
      }
      curr.next = node;
    }
  }

  dequeue(){
    this.front = this.front.next;
  }

  peek() {
    return this.front.value;
  }


}


module.exports = Queue;
