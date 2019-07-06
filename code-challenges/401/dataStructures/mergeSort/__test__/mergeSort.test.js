'use strict';

const mergeSort = require('../mergeSort');
const mergeFunction = mergeSort.mergeSort;

describe('merge Sort\'s Description ', () => {

  let shortArray;
  let longArray;
  let oddArray;
  let evenArray;

  beforeEach(() => {
    shortArray = [3, 2, 1];
    longArray = [
      55,	81,	33,	42,	41,
      92,	98,	28,	56,	69,
      84,	48,	28,	76,	13,
      54,	96,	94,	56,	8,
      64,	73,	79,	56,	54,
      8,	62,	19,	5,	78,
      99,	47,	88,	3,	9,
      86,	88,	8,	62,	52,
      13,	67,	60,	7,	86,
      57,	29,	75,	89,	89,
      25,	6, 88,	70,	10,
      48,	75,	69,	70,	19,
      99,	3, 9,	55,	82,
      16,	70,	31,	35,	27,
      78,	62,	89,	56,	77,
      67,	87,	61,	75,	15,
      93,	50,	45,	8,	34,
      76,	8, 62,	20,	26,
      9,	24,	15,	83,	80,
      92,	78,	79,	60,	30];

    oddArray = [14, 8, 10, 8, 19];
    evenArray = [15, 11, 13, 3, 2, 25];

  });

  it('should sort by number (short array)', () => {
    shortArray = mergeFunction(shortArray);
    expect(shortArray[0]).toBe(1);
    expect(shortArray[1]).toBe(2);
    expect(shortArray[2]).toBe(3);
  });

  it('should sort by number (long array)', () => {
    longArray = mergeFunction(longArray);
    expect(longArray[0]).toEqual(3);
    expect(longArray[50]).toEqual(57);
    expect(longArray[longArray.length - 1]).toEqual(99);
  });

  it('should sort by number (odd array)', () => {
    oddArray = mergeFunction(oddArray);
    expect(oddArray[0]).toEqual(8);
    expect(oddArray[2]).toEqual(10);
    expect(oddArray[oddArray.length - 1]).toEqual(19);
  });

  it('should sort by number (even array)', () => {
    evenArray = mergeFunction(evenArray);
    expect(evenArray[0]).toEqual(2);
    expect(evenArray[2]).toEqual(11);
    expect(evenArray[evenArray.length - 1]).toEqual(25);
  });

  it('should throw an error if an element is not number or cant be coerced into a number', () => {
    shortArray = [3, 2, 'Hello!!!'];
    expect(() => {
      mergeFunction(shortArray).toThrow();
    });
  });

  it('should throw an error if the arg is not an array', () => {
    let string = 'Hello!!!';
    expect(() => {
      mergeFunction(string).toThrow();
    });
  });

});
