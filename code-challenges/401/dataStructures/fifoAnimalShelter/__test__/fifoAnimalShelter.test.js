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
      let cow = {type:'cow'};
      animalShelter.enqueue(cow);
      expect(animalShelter.first).toBeNull();
    });


    it('should add 1 dog if arg is dog', () => {
      let newDog = new Dog;
      animalShelter.enqueue(newDog);
      expect(animalShelter.first.type).toBe('dog');
    });

    it('should add 1 cat if arg is cat', () => {
      let newCat = new Cat;
      animalShelter.enqueue(newCat);
      expect(animalShelter.first).toBeInstanceOf(Cat);
    });


    it('should add multiple', () => {
      let newDog = new Dog;
      let newCat = new Cat;
      animalShelter.enqueue(newDog);
      animalShelter.enqueue(newCat);
      expect(animalShelter.first.type).toBe('dog');
      expect(animalShelter.first.next.type).toBe('cat');
    });
  });


  describe('Dequeue(animal)', () => {

    it('should return null if not cat or dog', () => {
      let newDog = new Dog;
      animalShelter.enqueue(newDog);
      expect(animalShelter.dequeue('cow')).toBeNull();
    });
    it('should dequeue cat', () => {
      let newDog = new Dog;
      let newCat = new Cat;
      let newestDog = new Dog;
      animalShelter.enqueue(newDog);
      animalShelter.enqueue(newCat);
      animalShelter.enqueue(newestDog);
      let result = animalShelter.dequeue('cat');
      expect(result.type).toBe('cat');

    });

    it('should dequeue dog', () => {
      let newCat = new Cat;
      let newDog = new Dog;
      let newestCat = new Cat;
      animalShelter.enqueue(newCat);
      animalShelter.enqueue(newDog);
      animalShelter.enqueue(newestCat);
      let result = animalShelter.dequeue('dog');
      expect(result.type).toBe('dog');
    });


    it('should dequeue animal even if its lat in queue', () => {
      let newDog = new Dog;
      let newCat = new Cat;
      let newestDog = new Dog;
      animalShelter.enqueue(newDog);
      animalShelter.enqueue(newestDog);
      animalShelter.enqueue(newCat);
      let result = animalShelter.dequeue('cat');
      expect(result.type).toBe('cat');

    });
  });
});
