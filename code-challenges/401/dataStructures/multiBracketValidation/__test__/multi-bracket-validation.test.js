'use strict';

const multiBracketValidation = require('../multi-bracket-validation');

describe('multiBracketValidation', () => {

  it('should return true for no brackets', () => {
    let result = multiBracketValidation('hello')
    expect(result).toBeTruthy();
  });

  it('should return false for unmatching', () => {
    expect(multiBracketValidation('(hello]')).toBeFalsey();
  });

  it('should return true for matching', () => {
    expect(multiBracketValidation('(hello)')).toBeTruthy();
  });


  it('should return false for unmatching in different areas', () => {
    expect(multiBracketValidation('(hello]))]')).toBeFalsey();
  });






});
