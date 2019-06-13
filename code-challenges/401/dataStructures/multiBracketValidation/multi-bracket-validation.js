function multiBracketValidation(string){
  let brackets = ['(',')','[',']','{','}',];
  let stringArr = string.split('');
  let bracketArr = [];

  
  for(let i = 0; i < stringArr.length; i++){
    if (brackets.includes(stringArr[i])){
      bracketArr.push(stringArr[i]);
    }
  }
  if(bracketArr.length % 2 === 1){
    return false;
  }

  let end = bracketArr.length - 1;
  
  for(let start = 0; start < end; start++){

    if(bracketArr[start] !== bracketArr[end]){
      
      console.log(bracketArr[start],bracketArr[end]);
      return false;
    } else{
      // console.log('here');
      end--;
    }
  }
  return true;
}

module.exports = multiBracketValidation;
