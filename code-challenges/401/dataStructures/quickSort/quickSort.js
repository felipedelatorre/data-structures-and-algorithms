'use strict';

module.exports = exports = {};

exports.quickSort = (items, left, right) => {
  let index;
  if (items.length > 1) {
    index = _partition(items, left, right);
    if (left < index - 1) {
      exports.quickSort(items, left, index - 1);
    }
    if (index < right) {
      exports.quickSort(items, index, right);
    }
  }
  return items;
}

function _swap(items, leftIndex, rightIndex){
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function _partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)];
  let i = left;
  let j  = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      _swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

