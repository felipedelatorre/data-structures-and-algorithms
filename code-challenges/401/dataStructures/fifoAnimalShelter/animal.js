'use strict';

class Animal {
  constructor(){
    this.next = null;
  }
}

class Dog extends Animal{
  constructor(){
    super();
    this.type = 'dog';
  }
}

class Cat extends Animal{
  constructor(){
    super();
    this.type = 'cat';
  }
}

module.exports = {Dog, Cat};
