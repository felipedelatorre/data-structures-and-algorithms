'use strict';

module.exports = function insertShiftArray(arr, element) {
  let newArray = [];
  let mid = arr.length/2;
  let mod = 0;
  if (arr.length % 2 === 1) {
    mid += .5;
  }

  for (let i = 0; i <= arr.length; i++) {
    if (i !== mid) {
      newArray[i] = arr[i+mod];
    } else {
      newArray[i] = element;
      mod -= 1;
    }

  }
  return newArray;
};
