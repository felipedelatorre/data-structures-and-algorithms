'use strict';

const repeatedWord = require('../repeatedWord');

describe('repeatedWord\'s Description ', () => {

  it('should return the only dup word available', () => {
    let string = 'a a';
    let result = repeatedWord.repeatedWords(string);
    expect(result).toBe('a');
  });

  it('should return No words found', () => {
    let string = 'a b';
    let result = repeatedWord.repeatedWords(string);
    expect(result).toBe('No words found');
  });

  it('should return summer from code example', () => {
    let string = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    let result = repeatedWord.repeatedWords(string);
    expect(result).toBe('summer');
  });

  it('should return it', () => {
    let string = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    let result = repeatedWord.repeatedWords(string);
    expect(result).toBe('it');
  });

});

describe('_split helper', () => {
  it('should split string into individual words', () => {
    let string = 'Hello!! Good Morning.';
    string = repeatedWord._split(string);

    expect(string).toStrictEqual(['Hello', 'Good', 'Morning']);

  });
});
