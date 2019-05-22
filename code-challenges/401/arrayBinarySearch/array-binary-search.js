'use strict';

function binarySearch(sortedArr, target){
  let left = 0;
  let right = sortedArr.length - 1;
  while(left <= right){
    let mid = Math.floor((left+right) / 2);
    if (sortedArr[mid] < target){
      left = mid + 1;
    }else if(sortedArr[mid] > target){
      right = mid -1;
    }else{
      return mid;
    }
  }
  return -1;
}
