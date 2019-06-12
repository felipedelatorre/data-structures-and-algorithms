'use strict';

const Animal = require('./animal');
const Dog = Animal.Dog;
const Cat = Animal.Cat;


class AnimalShelter{
  constructor(){
    this.first = null;
  }


  enqueue(type){
    let animal;
    if (type === 'dog') {
      animal = new Dog;
    } else if(type === 'cat'){
      animal = new Cat;
    } else{
      return null;
    }

    if(this.first === null){
      this.first = animal;
    } else{
      let current = this.first;
      while(current.next){
        current = current.next;
      }
      current.next = animal;
    }


  }

  // dequeue(type){
  //   if (type === 'dog') {

  //     let current = this.first;
  //     if (current instanceof Dog)



  //   } else if(type === 'cat'){
  //     // do something
  //   } else{
  //     return null;
  //   }
  // }


}


function _validate(type){
  if (type !== 'dog' || type !== 'cat'){
    return null;
  }

}

function _capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}



module.exports = AnimalShelter;
