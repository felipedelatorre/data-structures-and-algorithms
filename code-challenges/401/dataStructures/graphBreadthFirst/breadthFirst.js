'use struct';

const Queue = require('./queue');


module.exports = (startingNode) => {
  let visited = [];
  let q = new Queue();

  visited.push(startingNode);
  q.enqueue(startingNode);
  console.log(startingNode);

  while (q.peek()) {
    let getQueueElement = q.dequeue();

    var get_List = this._adjacencyList.get(getQueueElement);
    for (let i in get_List) {
      var neigh = get_List[i];
      if (!visited.includes(neigh)) {
        visited.push(neigh.vertex);
        console.log(neigh.vertex);
        console.log(visited);
        q.enqueue(neigh);
      }
    }
  }
  return visited;
};
