'use strict';

module.exports = exports = {};

exports.quickSort = (arr, left, right) => {

  if(arr.some(isNaN)){
    throw new Error('Not all elements are numbers');
  }

  let position;
  if (left < right) {
    position = partition(arr, left, right); //position returned from partition
    // if (left < position - 1) { //more elements on the left side of the pivot
    exports.quickSort(arr, left, position - 1);
    // }
    // if (position < right) { //more elements on the right side of the pivot
    exports.quickSort(arr, position + 1, right);
  }
  // }
  return arr;
};

function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function swap(arr, i, low){
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}
