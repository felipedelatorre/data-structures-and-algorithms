'use strict';

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

  getValues(){
    let nodes = [ ...this._adjacencyList.keys() ];
    let result =[];
    nodes.map(key => {
      key = key.value;
      result.push(key);
    });
    return result;
  }

  getNodes(){
    let nodes = [ ...this._adjacencyList.keys() ];
    return nodes;
  }

  size(){
    return this._adjacencyList.size;
  }
  
  // printGraph(){
  //   for (let [key, value] of this._adjacencyList) {
  //     console.log(key.value, value);
  //   }
  // }

}

module.exports = {Graph, Vertex, Edge};
