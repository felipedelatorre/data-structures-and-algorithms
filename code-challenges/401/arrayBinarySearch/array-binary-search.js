'use strict';

function checkForString(sortedArr){
  return sortedArr.map(x => typeof x).includes('string');
}

function binarySearch(sortedArr, target){

  if(checkForString(sortedArr)){
    return null;
  }

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


module.exports = binarySearch;
