# insertion Sort Assigment
Complete a working, tested implementation of Insertion Sort, based on the pseudo code provided

## Challenge
Complete a working, tested implementation of Insertion Sort, based on the pseudo code provided

Research and prepare a lecture on the Insertion Sort Algorithm suitable for delivery to 301 level student. Your lecture notes should be the only material an instructor should need to conduct a high quality lecture on the subject.

## Approach & Efficiency
O(n). This algorithm will take as long as there are items in the array

## Solution
```
InsertionSort(int[] arr)

  FOR i = 1 to arr.length
  
    int j <-- i - 1
    int temp <-- arr[i]
    
    WHILE j >= 0 AND temp < arr[j]
      arr[j + 1] <-- arr[j]
      j <-- j - 1
      
    arr[j + 1] <-- temp
```