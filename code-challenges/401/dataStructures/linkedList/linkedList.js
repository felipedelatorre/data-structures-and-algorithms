'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor(){
    this.head = null;
  }

  insert(value){
    let node = new Node(value);
    this.head = node;
  }

  append(value){
    let node = new Node(value);
    let current = this.head;
    while(current.next !== null){
      current = current.next;
    }
    current.next = node;
  }

  print(){
    let current = this.head;
    while(current){
      current = current.next;
    }
  }

  includes(value){
    let current = this.head;
    let result = false;
    while(current.next !== null){
      if(current.value === value){
        result = true;
      }
      current = current.next;
    }
    return result;
  }
}

module.exports = Linkedlist;
