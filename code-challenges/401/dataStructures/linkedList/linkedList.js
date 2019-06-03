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

    if(!this.head){
      this.head = node;
    } else{
      node.next = this.head;
      this.head = node;
    }
  }

  append(value){
    let node = new Node(value);
    let current = this.head;
    while(current.next !== null){
      current = current.next;
    }
    current.next = node;
  }


  insertAfter(value, newValue){
    let node = new Node(newValue);
    let current = this.head;

    while(current.value !== value){
      current = current.next;
    }

    let temp = current.next;
    current.next = node;
    current.next.next = temp;
  }


  insertBefore(value, newValue){
    let node = new Node(newValue);
    let current = this.head;

    if(this.head.value === value){
      this.insert(newValue);
      return newValue.value;
    } else{
      while(current.next.value !== value){
        current = current.next;
      }
      let temp = current.next;
      current.next = node;
      node.next = temp;
    }
  }

  print(){
    let current = this.head;
    while(current){
      console.log(current.value);
      current = current.next;
    }
  }

  includes(value){
    let current = this.head;
    let result = false;
    while(current){
      if(current.value === value){
        result = true;
      }
      current = current.next;
    }
    return result;
  }
}

module.exports = Linkedlist;
