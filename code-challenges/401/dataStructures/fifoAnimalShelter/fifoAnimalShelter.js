'use strict';

class AnimalShelter{
  constructor(){
    this.first = null;
    this.back = null;
  }


  enqueue(animalObject){
    if(animalObject.type === 'dog' || animalObject.type === 'cat'){
      if(!this.back){
        this.first = animalObject;
        this.back = animalObject;
      } else{
        this.back.next = animalObject;
        this.back = animalObject;
      }
    } else{
      return null;
    }
  }

  dequeue(type){
    if(type === 'cat' || type === 'dog'){
      let current = this.first;
      while(type !== current.next.type){
        current = current.next;
      }

      let result = current.next;
      current.next = result.next;

      return result;
    }
    return null;
  }
}


module.exports = AnimalShelter;
