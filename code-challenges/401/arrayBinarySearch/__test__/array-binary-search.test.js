'use strict';

const arrayBinarySearch = require('../array-binary-search');

describe('ArrayBinarySearch', () => {

  it('should return -1. Target not in array', () => {
    let array = [1,4,60,90,99,100,101];
    let target = 16;

    expect(arrayBinarySearch(array, target)).toEqual(-1);
  });

  it('should return arrays index', () => {
    let array = [1,4,60,90,99,100,101];
    let target = 4;

    expect(arrayBinarySearch(array, target)).toEqual(1);
  });

  it('should return null if not all numbers', () => {
    let array = [1,4,60,90,99,100,'101'];
    let target = 4;

    expect(arrayBinarySearch(array, target)).toEqual(null);
  });

});
