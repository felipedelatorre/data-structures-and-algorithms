'use strict';

const Stack = require('./stack');


class PseudoQueue{
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){
    this.stack1.push(value);
  }

  dequeue(){
    while(this.stack1.top){
      let temp = this.stack1.pop();
      this.stack2.push(temp);
    }
    return this.stack2.pop();
  }


}

module.exports = PseudoQueue;
