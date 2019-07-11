# Summary and name of challenge
Given two hashtables return all the values and keys from the first hash table and only the values of the second table where the key form the first hash table mathces the key of the second table.

## Challenge
* Write a function that LEFT JOINs two hashmaps into a single data structure.
* The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
* The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
* Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
* LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
* The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.
* Avoid utilizing any of the library methods available to your language.

## Approach & Efficiency
O(n) to add items to an array for comparison
O(1) to make the the actual comparison

## Solution
![](./assets/leftJoin.jpg)
![](./assets/leftJoin2.jpg)
```Js
module.exports = (htLeft, htRight) => {

  if( typeof htLeft === Object || typeof htRight === Object ) {
    throw new Error('Params must be instance of hashTables');
  }

  let resultLeft = [];


  htLeft.buckets.forEach(element => {
    let content = [];
    content.push(element.values()[0][0]);

    content.push(element.values()[0][1]);
    content.push(htRight.get(element.values()[0][0]));


    resultLeft.push(content);
  });

  return resultLeft;
};
```