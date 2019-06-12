'use strict';

class Animal {
  constructor(){
    this.next = null;
  }
}

class Dog extends Animal{
}

class Cat extends Animal{
}

module.exports = {Dog, Cat};
