'use strict';

const HT = require('./hashTable');

const _split = (string) =>{
  let regex = /\b(\w+)\b/g
  return string.match(regex);
};


const repeatedWords = (string) => {
  let ht = new HT;
  let arrayWords = _split(string);
  for(let i = 0; i < arrayWords.length; i++){
    let value = arrayWords[i].toLowerCase();
    let key = value;
    if(ht.contains(value)){
      return value;
    }
    ht.add(key, value);
  }

  return 'No words found';

};

module.exports = { _split, repeatedWords };
