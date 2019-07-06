'use strict';

class Node {

}

class LinkedList {

}





class HashTable {
  constructor(size){
    this.size = size || 5;
    this.buckets = new Array(this.size);
  }

  hash(key){
    return key.split('').reduce((prev, curr) => prev + curr.charCodeAt(),0) * 599 % this.size;
  }

  add(key, value){
    if(!key) throw new Error('Invalid key provided');

    let index = this.hash(key);

    if(!this.buckets[index]) {this.buckets[index] = new LinkedList();}

    try{
      this.buckets[index].add([key, value]);
    } catch(e){
      throw e;
    }
  }
}


module.exports = HashTable;
