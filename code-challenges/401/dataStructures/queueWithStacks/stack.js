'use strict';

const Node = require('./node');

class Stack {
  constructor(){
    this.top = null;
  }

  push(item){
    let node = new Node(item);
    node.next = this.top;
    this.top = node;
  }

  pop(){
    if(!this.top){
      return null;
    }else{
      let result = this.top.value;
      this.top = this.top.next;
      return result;
    }
  }

  peek(){
    if(!this.top){
      return null;
    }else{
      return this.top.value;
    }
  }

}

module.exports = Stack;
