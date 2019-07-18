'use strict';

const Stack = require('./stack');

module.exports = (graph) => {
  let stack = new Stack();
  let output = [];
  let visited = [];

  let startVertex = graph._adjacencyList.keys().next().value;
  stack.push(startVertex);
  visited.push(startVertex);
  output.push(startVertex.value);

  while(stack.peek()){

    let neighborsArr = graph.getNeighbors(startVertex);
    for(let neighbor of neighborsArr){
      // console.log(neighborsArr);
      if(!visited.includes(neighbor)){
        console.log(neighbor);
        stack.push(neighbor);
        visited.push(neighbor);
        output.push(neighbor);
        startVertex = neighbor;
        break;
        // console.log(startVertex);
      } else {
        stack.pop();
      }
    }

    
  }

};


// for(let i = 0; i < neighborsArr.length + 1; i++){
//   // console.log(neighbor);

  
//   if(!visited.includes(neighborsArr[i])){
//     stack.push(neighborsArr[i]);
//     visited.push(neighborsArr[i]);
//     startVertex = neighborsArr[i];
//     break;
//   } else if (i === neighborsArr){
//     startVertex = stack.pop();
//   } else{
//     continue;
//   }
// }
