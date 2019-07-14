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
    this.addVertex(new Vertex(value));
  }

  addVertex(vertex){
    this._adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight = 0){
    if(!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)){
      throw new Error('ERROR: Invalid Vertices');
    }

    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  addBiDirectionalEdge(vertex_a, vertex_b, weight = 0){
    this.addDirectedEdge(vertex_a, vertex_b, weight);
    this.addDirectedEdge(vertex_b, vertex_a, weight);
  }

  getNeighbors(vertex){
    if(!this._adjacencyList.has(vertex)){
      throw new Error('ERROR: Invalid vertex', vertex);
    }

    return [...this._adjacencyList.get(vertex)];
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

  breadthFirstTraversal(){

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
