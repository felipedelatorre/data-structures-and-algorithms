'use strict';

const arrayShift = require('../array-shift');

describe('ArrayShifting', () => {

  it('should be greater than the original array', () => {
    let array = [1,7,4,6];
    let insertee = 16;
    let newArray = arrayShift(array, insertee);

    expect(newArray.length).toEqual(5);
  });

  it('insertee(halfway point) should be 16', () => {
    let array = [1,7,4,6];
    let insertee = 16;
    let newArray = arrayShift(array, insertee);

    expect(newArray[2]).toEqual(16);
  });

  it('should work with strings and numbers', () => {
    let array = [1,'hello',4,6];
    let insertee = 'Felipe';
    let newArray = arrayShift(array, insertee);

    expect(newArray[2]).toEqual('Felipe');
  });






});
