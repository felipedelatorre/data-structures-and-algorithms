'use strict';

const insertionSort = require('../insertionSort');

describe('Insertion Sort\'s Description ', () => {

  let array;

  beforeEach(() => {
    array = [3, 2, 1];
  });

  it('should sort by number', () => {
    insertionSort(array);
    expect(array[0]).toEqual(1);
    expect(array[1]).toEqual(2);
    expect(array[2]).toEqual(3);
  });

  it('should throw an error if an element is not number or cant be coerced into a number', () => {
    array = [3, 2, 'Hello!!!'];
    expect(() => {
      insertionSort(array).toThrow();
    });
  });

  it('should throw an error if the arg is not an array', () => {
    let string = 'Hello!!!';
    expect(() => {
      insertionSort(string).toThrow();
    });
  });

});
