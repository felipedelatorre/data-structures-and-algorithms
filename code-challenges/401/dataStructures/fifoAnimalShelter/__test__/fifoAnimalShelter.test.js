'use strict';

const AnimalShelter = require('../fifoAnimalShelter');
const Animal = require('../animal');

describe('Animal Sheter ', () => {
  let animalShelter;

  beforeEach(() => {
    animalShelter = new AnimalShelter();
  });

  describe('AnimalShelter Class', () => {
    it('should be an instance of AnimalShelter class', () => {
      expect(animalShelter).toBeInstanceOf(AnimalShelter);
    });
  });

  describe('enqueue(animal)', () => {
    
    it('should only add cat or dog obj', () => {
      animalShelter.enqueue('cow');
      expect(animalShelter.first).toBeNull();
      
    });
    
    
    it('should add 1 to animal shelter', () => {
      animalShelter.enqueue('dog');
      expect(animalShelter.first).toBeInstanceOf(Animal.Dog);
    });


    it('should add multiple', () => {
      animalShelter.enqueue('cat');
      animalShelter.enqueue('cat');
      animalShelter.enqueue('dog');

      expect(animalShelter.first.next).toBe(Animal.Dog);
    });


  });


  // describe('Name of the group', () => {
    
  //   it('should return null if not cat or dog', () => {
      
  //   });

  //   it('should dequeue only cat or only dog', () => {
      
  //   });

  //   it('should return null if empty', () => {
      
  //   });






  // });



});
