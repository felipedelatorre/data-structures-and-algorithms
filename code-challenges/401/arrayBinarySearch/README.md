# Challenge Summary
Binary search in a sorted 1D array

## Challenge Description
Return the index of a given target in a sorted array without using built in functions. If given target is not inside the array return -1.

## Approach & Efficiency
You first want to get the mid point of the array and compare to see if the target number equals the mid point. If the sorted array at mid index is less than target, then shift left and compare the mid index + 1. Repeat until target is found. If the sorted array at mid index is less than target, then shift right and compare the mid index - 1. Repeat until target is found. If target is not found in array return -1.

## Solution
![](assets/arrayBinarySearch.JPG)
![](assets/arrayBinarySearch_2.JPG)
