'use strict';

const GraphFunctions = require('../graph');
const Graph = GraphFunctions.Graph;
const Vertex = GraphFunctions.Vertex;

describe('BreadthFirst', () => {
  const graph = new Graph();

  afterEach(() => {
    graph._adjacencyList.clear();
  });

  it('BreadthFirst Happy Case', () => {
    let airplaneVertex = new Vertex('Airplane');
    let carVertex = new Vertex('Car');
    let trainVertex = new Vertex('Train');
    graph.addNode(airplaneVertex);
    graph.addNode(carVertex);
    graph.addNode(trainVertex);
    graph.addEdge(airplaneVertex, carVertex);
    graph.addEdge(airplaneVertex, trainVertex);

    let result = graph.breadthFirst(airplaneVertex);
    expect(result).toEqual([ 'Airplane', 'Car', 'Train' ]);
  });

  it('should return one result if only one added', () => {
    let airplaneVertex = new Vertex('Airplane');

    let result = graph.breadthFirst(airplaneVertex);
    expect(result).toEqual(['Airplane']);
  });

  it('No starting Node', () => {
    let result = graph.breadthFirst();
    expect(result).toEqual('Missing starting node');
  });

});

