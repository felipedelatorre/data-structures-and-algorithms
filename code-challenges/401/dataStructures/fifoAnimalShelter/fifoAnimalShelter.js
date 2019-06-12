'use strict';

const Animal = require('./animal');


class AnimalShelter{
  constructor(){
    this.first = null;
  }


  enqueue(type){
    _validate(type) ? type = _capitalizeFirstLetter(type) : null;
    let animal = new Animal.Dog;
    this.first = animal;


  }

  dequeue(pref){
    this.front = this.front.next;
  }


}


function _validate(type){
  if (type === 'dog' || type === 'cat'){
    return true;
  } else{
    return false;
  }
}

function _capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}



module.exports = AnimalShelter;
