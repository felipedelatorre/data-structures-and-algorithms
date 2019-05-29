'use strict';

const arrayReverse = require('../arrayReverse');

describe('Array Reverse', () => {
  let array = [];

  beforeEach(() => {
    array = [3,5,6,1,6];
  });

  it('should return an array', () => {
    expect(arrayReverse(array) instanceof Array).toBeTruthy();
  });

  it('should swap the values of index 0 with the value of the last index in the array', () => {
    let newArray = arrayReverse(array);
    expect(array[0]).toEqual(newArray[newArray.length - 1]);
  });

  it('should work with any data type', () => {
    array.push('Hello World!');
    expect(arrayReverse(array)).toContain('Hello World!');

  });
});
