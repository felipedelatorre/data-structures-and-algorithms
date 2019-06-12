'use strict';

class Animal {
}

class Dog extends Animal{
  super(){
    this.next = null;
  }

}

class Cat extends Animal{
  super(){
    this.next = null;
  }

}
module.exports = {Dog, Cat};
