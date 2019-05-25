'use strict';


function arrayReverse(arr) {
  let newArray = [];
  let iterator = 0;
  for(let i = arr.length - 1; i >= 0; i--) {
    newArray[iterator] = arr[i];
    iterator++;
  }
  return newArray;
}

module.exports = arrayReverse;
