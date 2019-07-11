'use strict';

const HT = require('../hashTable');
const leftJoin = require('../leftJoin');

describe('Left\'s Join ', () => {
  let htLeft = new HT;
  let htRight = new HT;


  beforeAll(() => {

    htLeft.add('fond','enamored');
    htLeft.add('wrath','anger');
    htLeft.add('deligent', 'employed');
    htLeft.add('outfit', 'garb');
    htLeft.add('guide', 'usher');

    htRight.add('fond','averse');
    htRight.add('wrath','delight');
    htRight.add('deligent', 'idle');
    htRight.add('guide', 'follow');
    htRight.add('flow', 'jam');
  });

  it('should populate my hashtable content', () => {
    let resultLeft = htLeft.get('fond');
    let resultRight = htRight.get('outfit');
    expect(resultLeft).toEqual('enamored');
    expect(resultRight).toBeNull();
  });

  it('should return the left join of two hashtables', () => {
    let result = leftJoin(htLeft, htRight);

    expect(result).toStrictEqual( [ [ 'wrath', 'anger', 'delight' ],
      [ 'deligent', 'employed', 'idle' ],
      [ 'fond', 'enamored', 'averse' ],
      [ 'outfit', 'garb', null ],
      [ 'guide', 'usher', 'follow' ] ]);
  });

  it('should throw error if params arent hashTables', () => {
    expect(() => {
      leftJoin(1, htRight);
    }).toThrow();
  });

});
