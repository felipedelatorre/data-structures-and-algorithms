```js
  breadthFirst(startingNode){
    if(!startingNode){
      return 'Missing starting node';
    }
    let visited = [];
    let q = new Queue();

    visited.push(startingNode);
    q.enqueue(startingNode);

    while (q.peek()) {
      let getQueueElement = q.dequeue();

      let list = this._adjacencyList.get(getQueueElement);
      for (let i in list) {
        let neigh = list[i];
        if (!visited.includes(neigh)) {
          visited.push(neigh.vertex);
          q.enqueue(neigh);
        }
      }
    }
    let keys = visited.map(key => key.value);
    return keys;
  }
```

```js
  pathTo(startVertex, goalVertex){
    const stack = [];
    const visitedVertices = new Set();
    const parentPath = new Map();

    stack.push(startVertex);
    visitedVertices.add(startVertex);

    while(stack.length){
      const currentVertex = stack.pop();

      if(currentVertex === goalVertex){
        return parentPath;
      }

      const neighbors = this.getNeighbors(currentVertex);

      for(let edge of neighbors){
        const neighborVertex = edge.vertex;

        if(visitedVertices.has(neighborVertex)){
          continue;
        }else{
          visitedVertices.add(neighborVertex);
        }
        stack.push(neighborVertex);
        parentPath.set(neighborVertex, currentVertex);
      }
    }
  }
```