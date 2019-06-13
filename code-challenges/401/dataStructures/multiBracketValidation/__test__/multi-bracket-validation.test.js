'use strict';

const multiBracketValidation = require('../multi-bracket-validation');

describe('multiBracketValidation', () => {

  // it('should return true for no brackets', () => {
  //   let result = multiBracketValidation('hello');
  //   expect(result).toBeTruthy();
  // });

  // it('should return false for unmatching', () => {
  //   expect(multiBracketValidation('(hello]')).toBeFalsy();
  // });

  // it('should return false for unmatching in different areas', () => {
  //   expect(multiBracketValidation('(hello]))]')).toBeFalsy();
  // });

  it('should return true for matching', () => {
    let result = multiBracketValidation('(hello)');
    console.log(result);
    expect(result).toBeTruthy();
  });
});
