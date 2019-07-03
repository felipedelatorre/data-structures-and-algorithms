'use strict';

const mergeSort = require('../mergeSort');
const mergeFunction = mergeSort.mergeSort;

describe('merge Sort\'s Description ', () => {

  let array;

  beforeEach(() => {
    array = [3, 2, 1];
  });

  it('should sort', () => {
    let newArray = mergeFunction(array);
    console.log(newArray);
    expect(newArray[0]).toBe(1);
    expect(newArray[1]).toBe(2);
    expect(newArray[2]).toBe(3);
  });

  it('should throw an error if an element is not number or cant be coerced into a number', () => {
    array = [3, 2, 'Hello!!!'];
    expect(() => {
      mergeFunction(array).toThrow();
    });
  });

  it('should throw an error if the arg is not an array', () => {
    let string = 'Hello!!!';
    expect(() => {
      mergeFunction(string).toThrow();
    });
  });



});
