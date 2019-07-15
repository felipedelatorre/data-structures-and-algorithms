'use strict';
// Needs a Queue for BFS traversal
const Queue = require('./queue');

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight){
    this.vertex = vertex;
    this.weight = weight || 0;
  }
}

class Graph {
  constructor(){
    this._adjacencyList = new Map();
  }

  addValue(value){
    this.addNode(new Vertex(value));
  }

  addNode(vertex){
    this._adjacencyList.set(vertex, []);
  }

  addEdge(startVertex, endVertex, weight = 0){
    if(!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)){
      throw new Error('ERROR: Invalid Vertices');
    }

    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  addBiDirectionalEdge(vertex_a, vertex_b, weight = 0){
    this.addEdge(vertex_a, vertex_b, weight);
    this.addEdge(vertex_b, vertex_a, weight);
  }

  getNeighbors(vertex){
    if(!this._adjacencyList.has(vertex)){
      throw new Error('ERROR: Invalid vertex', vertex);
    }

    return [...this._adjacencyList.get(vertex)];
  }

  getNodes(){
    let nodes = [ ...this._adjacencyList.keys() ];
    let result =[];
    nodes.map(key => {
      key = key.value;
      result.push(key);
    });
    return result;
  }


  size(){
    return this._adjacencyList.size;
  }



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

  // function to performs BFS
  bfs(startingNode){

    // create a visited array
    var visited = [];
    // for (var i = 0; i < this.size(); i++){
    //   visited[i] = false;
    // }

    // Create an object for queue
    var q = new Queue();

    // add the starting node to the queue
    // visited[startingNode] = true;
    // console.log(visited);
    // console.log(visited[startingNode]);
    visited.push(startingNode);
    q.enqueue(startingNode);
    console.log(startingNode);

    // loop until queue is element
    while (q.peek()) {
      // get the element from the queue
      var getQueueElement = q.dequeue();

      // passing the current vertex to callback funtion
      // console.log(getQueueElement);

      // get the adjacent list for current vertex
      var get_List = this._adjacencyList.get(getQueueElement);
      // console.log(get_List);
      // loop through the list and add the element to the
      // queue if it is not processed yet
      for (let j in get_List) {
        var neigh = get_List[j];
        // console.log(get_List[j].vertex);
        // console.log(visited[neigh]);
        if (!visited.includes(neigh)) {
          visited.push(neigh.vertex);
          // visited[neigh] = true;
          console.log(neigh.vertex);
          console.log(visited);
          q.enqueue(neigh);
        }
      }
    }
  }

  printGraph(){
    for (let [key, value] of this._adjacencyList) {
      console.log(key.value, value);
    }
  }

  prettyPrintAdjacencyList(){
    // Iterate over all keys in map
    // For each key, print to screen
    // Print vertex in all edges
  }

  prettyPrintAdjacencyMatrix(){
    // Iterate over all keys in map
    // For each key, print to screen
    // Print vertex in all edges
  }

}

module.exports = {Graph, Vertex, Edge};
