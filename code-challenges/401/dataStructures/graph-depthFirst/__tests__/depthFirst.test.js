'use strict';

const GraphFunctions = require('../graph');
const Graph = GraphFunctions.Graph;
const Vertex = GraphFunctions.Vertex;
const Edge = GraphFunctions.Edge;


const depthFirst = require('../depthFirst');

describe('depthFirst\'s', () => {

  const graph = new Graph();

  afterEach(() => {
    graph._adjacencyList.clear();
  });


  it('', () => {
    let vertexA = new Vertex('A');
    let vertexB = new Vertex('B');
    let vertexC = new Vertex('C');
    let vertexD = new Vertex('D');

    graph.addNode(vertexA);
    graph.addNode(vertexB);
    graph.addNode(vertexC);
    graph.addNode(vertexD);

    graph.addBiDirectionalEdge(vertexA, vertexC);
    graph.addBiDirectionalEdge(vertexC, vertexD);
    graph.addBiDirectionalEdge(vertexA, vertexB);

    let result = depthFirst(graph);
    expect(result).toEqual(vertexA);

  });

});


