'use strict';

const AnimalShelter = require('../fifoAnimalShelter');
const Animal = require('../animal');
const Dog = Animal.Dog;
const Cat = Animal.Cat;

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
    
    
    it('should add 1 dog if arg is dog', () => {
      animalShelter.enqueue('dog');
      expect(animalShelter.first).toBeInstanceOf(Dog);
    });

    it('should add 1 cat if arg is cat', () => {
      animalShelter.enqueue('cat');
      expect(animalShelter.first).toBeInstanceOf(Cat);
    });


    it('should add multiple', () => {
      animalShelter.enqueue('cat');
      animalShelter.enqueue('dog');
      
      expect(animalShelter.first.next).toBeInstanceOf(Dog);
    });


  });


  describe('Dequeue(animal)', () => {
    
    it('should return null if not cat or dog', () => {
      animalShelter.enqueue('cat');
      animalShelter.enqueue('dog');
      
      expect(animalShelter.dequeue()).toBeNull();
      expect(animalShelter.dequeue('cow')).toBeNull();

    });

    // it('should dequeue only cat or only dog in order', () => {
      
    // });

    // it('should return null if empty', () => {
      
    // });






  });



});
