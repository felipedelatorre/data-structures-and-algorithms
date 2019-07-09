'use strict';

const { HashTable } =require('../hashTable');

describe('Hash Table', () => {
  it('should construct a Hash Table', () => {
    //Arrange
    let hashTable;
    let expectedSize = 42;

    //Act
    hashTable = new HashTable(expectedSize);

    //Assert
    expect(hashTable).toBeInstanceOf(HashTable);
    expect(hashTable.size).toBeDefined();
    expect(hashTable.size).toBe(expectedSize);
    expect(hashTable.buckets).toBeDefined();
    expect(hashTable.buckets.length).toBe(expectedSize);
  });
});

describe('hash(key) function', () => {
  it('should hash a key, cat, to 3 to an in-range value of 5 buckets ', () => {
    //Arrange
    let expectedHash = 3;
    let key = 'cat';
    let hashTable = new HashTable(5);

    //Act
    let result = hashTable.hash(key);

    //Assert
    expect(result).toBe(expectedHash);
  });

  it('should hash foo to 1 with 5 buckets', () => {
    //Arrange
    let expectedHash = 1;
    let key = 'foo';
    let hashTable = new HashTable(5);

    //Act
    let result = hashTable.hash(key);

    //Arrange
    expect(result).toBe(expectedHash);
  });

});

describe('add(key, value)', () => {
  it('should add a key/value to the hashtable resulting in the value being in the data structure', () => {
    let hashTable = new HashTable(5);
    let key = 'pig';
    let value = 'round';
    let key1 = 'foo';
    let value1 = 55;

    hashTable.add(key, value);
    hashTable.add(key1, value1);

    expect(hashTable.buckets[0].values()).toEqual([['pig', 'round']]);
    expect(hashTable.buckets[1].values()).toEqual([['foo', 55]]);

  });

  it('should throw an error if the key is already being used', () => {
    let hashTable = new HashTable(5);
    let key = 'pig';
    let value = 'round';
    let key1 = 'pig';
    let value1 = 55;

    hashTable.add(key, value);
    expect( () => {
      hashTable.add(key1, value1);
    }).toThrow('Key already being used');
  });

  it('should throw an error if no key is provided', () => {
    let hashTable = new HashTable(5);
    let key = '';
    let value = 'round';
    expect( () => {
      hashTable.add(key, value);
    }).toThrow('Invalid key provided');
  });

});

describe('get(key)', () => {
  it('should retrieve based on a key returns the value stored', () => {
    let key = 'horse';
    let value = 'brown';
    let hashTable = new HashTable(5);

    hashTable.add(key, value);

    let result = hashTable.get(key);

    expect(result).toBe(value);

  });

  it('should successfully throws an error for a key that does not exist in the hashtable', () => {
    let badKey = '';
    let hashTable = new HashTable(5);
    expect( () => {
      hashTable.get(badKey);
    }).toThrow('Invalid key provided');
  });

});

describe('Collision handling', () => {
  it('should successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let hashTable = new HashTable(5);
    let key = 'cat';
    let value = 42;
    let key1 = 'bbt';
    let value1 = 25;

    hashTable.add(key, value);
    hashTable.add(key1, value1);

    expect(hashTable.buckets[3].values()).toEqual([['cat', 42], ['bbt', 25]]);
  });

  it('should successfully handle a collision within the hashtable', () => {
    let hashTable = new HashTable(5);
    let key = 'cat';
    let value = 42;
    let key1 = 'bbt';
    let value1 = 25;

    hashTable.add(key, value);
    hashTable.add(key1, value1);

    expect(hashTable.buckets[3].values()).toEqual([['cat', 42], ['bbt', 25]]);
  });
});