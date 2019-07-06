# Quick Sort
## Learning Objectives
Quick Sort algorithm is one of the most used and popular algorithms in any programming language. But, if you are a JavaScript developer, then you might of heard of sort() which is already available in JavaScript. Then, you might have been thinking what the need of this Quick Sort algorithm is. To understand this, first we need what is sorting and what is the default sorting in JavaScript. <sup>1<sup>

## Lecture Flow
* Diagram
* Algorithm
* Pseudocode
* JS code
* Reading and References

## Diagram
![](./assets/quickSort.png)

## Algorithm
* Pick a “pivot” element.
* “Partition” the array into 3 parts:
  * First part: all elements in this part is less than the pivot.
  * Second part: the pivot itself (only one element!)
  * Third part: all elements in this part is greater than or equal to the pivot.
* Then, apply the quicksort algorithm to the first and the third part. (recursively)<sup>2<sup>

## Efficiency
|Class|	Sorting algorithm|
|---|---|
|Worst-case performance|	O(n2)|
|Best-case performance	|O(n log n) (simple partition) or O(n) (three-way partition and equal keys)
|Average performance|	O(n log n)|
|Worst-case space complexity|	O(n) auxiliary (naive), O(log n) auxiliary, (Sedgewick 1978)

## Pseudocode
```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

### Code
```Javascript
exports.quickSort = (arr, left, right) => {

  if(arr.some(isNaN)){
    throw new Error('Not all elements are numbers');
  }

  let position;
  if (left < right) {
    position = partition(arr, left, right);
    exports.quickSort(arr, left, position - 1);
    exports.quickSort(arr, position + 1, right);
  }
  return arr;
};

function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
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
```

## Readings and References

### Watch
* [HackerRank - Algorithms: Quicksort](https://www.youtube.com/watch?v=SLauY6PpjW4&t=37s)

### Read
  * <sup>1</sup> [Guru99 - QuickSort Algorithm in JavaScript](https://www.guru99.com/quicksort-in-javascript.html)

  * <sup>2</sup> [Understanding Quicksort](https://me.dt.in.th/page/Quicksort/)

  * [GeeksForGeeks - QuickSort](https://www.geeksforgeeks.org/quick-sort/) 

### Bookmark
* [Hackerearth - QuickSort](https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/tutorial/)

