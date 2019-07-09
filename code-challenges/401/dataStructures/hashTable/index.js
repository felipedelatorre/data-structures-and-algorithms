'use strict';

const { HashTable } = require('./hashTable');

let hashTable = new HashTable(5);

hashTable.add('cat', 42);
hashTable.add('foo', 55);
hashTable.add('bbt', 24);

console.log(hashTable.buckets[0].values());

hashTable.prettyPrint();
