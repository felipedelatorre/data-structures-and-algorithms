'use strict';

const GraphFunctions = require('../graph');
const Graph = GraphFunctions.Graph;
const Vertex = GraphFunctions.Vertex;
const Edge = GraphFunctions.Edge;

describe('Graphs', () => {
  const graph = new Graph();

  afterEach(() => {
    graph._adjacencyList.clear();
  });

  it('addVertex() Node can be successfully added to the graph', () => {
    let oneVertex = new Vertex(1);
    graph.addVertex(oneVertex);
    expect(graph._adjacencyList.get(oneVertex)).toEqual([]);
  });

  it('addDirectedEdge() An edge can be successfully added to the graph', () => {
    let oneVertex = new Vertex(1);
    let twoVertex = new Vertex(2);
    graph.addVertex(oneVertex);
    graph.addVertex(twoVertex);
    graph.addDirectedEdge(oneVertex, twoVertex);

    let expected = [new Edge(new Vertex(2),0)];
    expect(graph._adjacencyList.get(oneVertex)).toStrictEqual(expected);
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    let oneVertex = new Vertex(1);
    let twoVertex = new Vertex(2);
    let threeVertex = new Vertex(3);
    graph.addVertex(oneVertex);
    graph.addVertex(twoVertex);
    graph.addVertex(threeVertex);
    graph.addDirectedEdge(oneVertex, twoVertex);
    graph.addDirectedEdge(oneVertex, threeVertex);


    graph.printGraph();
    // expect(graph.getNeighbors(oneVertex)).toEqual(expected);
  });

  it('getNeighbors() All appropriate neighbors can be retrieved from the graph', () => {
    let oneVertex = new Vertex(1);
    let twoVertex = new Vertex(2);
    graph.addVertex(oneVertex);
    graph.addVertex(twoVertex);
    graph.addDirectedEdge(oneVertex, twoVertex);
    let expected = [{vertex: { value: 2, }, weight: 0} ];

    expect(graph.getNeighbors(oneVertex)).toEqual(expected);
  });

  // it('Neighbors are returned with the weight between nodes included', () => {
  //   expect().toEqual();
  // });

  // it('The proper size is returned, representing the number of nodes in the graph', () => {
  //   expect().toEqual();
  // });

  // it('A graph with only one node and edge can be properly returned', () => {
  //   expect().toEqual();
  // });

  // it('An empty graph properly returns null', () => {
  //   expect().toEqual();
  // });
});

