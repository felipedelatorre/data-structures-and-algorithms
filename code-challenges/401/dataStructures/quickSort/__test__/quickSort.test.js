'use strict';

const quickSortFunction = require('../quickSort');
const quickSort = quickSortFunction.quickSort;

describe('quickSort\'s Description ', () => {

  let array;

  beforeEach(() => {
    array = [3, 2, 1];
  });

  it('should sort', () => {
    let newArray = quickSort(array, 0, array.length - 1);
    console.log(newArray);
    expect(newArray[0]).toBe(1);
    expect(newArray[1]).toBe(2);
    expect(newArray[2]).toBe(3);
  });

  it('should throw an error if an element is not number or cant be coerced into a number', () => {
    array = [3, 2, 'Hello!!!'];
    expect(() => {
      quickSort(array, 0, array.length - 1)(array).toThrow();
    });
  });

  it('should throw an error if the arg is not an array', () => {
    let string = 'Hello!!!';
    expect(() => {
      quickSort(array, 0, array.length - 1)(string).toThrow();
    });
  });



});
