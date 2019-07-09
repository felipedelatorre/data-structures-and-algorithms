# Summary and name of challenge
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## Solution
![](./assets/repeatedWord.jpg)

```Js
const _split = (string) =>{
  let regex = /\b(\w+)\b/g;
  return string.match(regex);
};

const repeatedWords = (string) => {
  let ht = new HT;
  let arrayWords = _split(string);
  for(let i = 0; i < arrayWords.length; i++){
    let value = arrayWords[i].toLowerCase();
    let key = value;
    if(ht.contains(value)){
      return value;
    }
    ht.add(key, value);
  }
  return 'No words found';
};
```



 - [ ] Top-level README “Table of Contents” is updated
 - [ ] Feature tasks for this challenge are completed
 - [ ] Unit tests written and passing
     - [ ] “Happy Path” - Expected outcome
     - [ ] Expected failure
     - [ ] Edge Case (if applicable/obvious)
 - [ ] README for this challenge is complete
     - [ ] Summary, Description, Approach & Efficiency, Solution
     - [ ] Link to code
     - [ ] Picture of whiteboard