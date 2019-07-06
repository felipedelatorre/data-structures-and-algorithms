'use strict';

const HashTable = require('../hashTable');

describe('HashTable', () => {

  it('', () => {
    let hashTable = new HashTable;
    expect(hashTable).toBeInstanceOf(HashTable);
  });


  describe('hash(key)', () => {
    it('should hash cat to 3 with 5 buckets', () => {
      let expectedHash = 3;
      let key = 'cat';
      let hashTable = new HashTable(5);

      let result = hashTable.hash(key);

      expect(result).toBe(expectedHash);
    });

    it('should hash foo to 1 with 5 buckets', () => {
      let expectedHash = 1;
      let key = 'foo';
      let hashTable = new HashTable(5);

      let result = hashTable.hash(key);

      expect(result).toBe(expectedHash);
    });

  });

  // it('Adding a key/value to your hashtable results in the value being in the data structure', () => {

  // });

  // it('Retrieving based on a key returns the value stored', () => {

  // });

  // it('Successfully returns null for a key that does not exist in the hashtable', () => {

  // });

  // it('Successfully handle a collision within the hashtable', () => {

  // });

  // it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {

  // });

  // it('Successfully hash a key to an in-range value', () => {

  // });





});
