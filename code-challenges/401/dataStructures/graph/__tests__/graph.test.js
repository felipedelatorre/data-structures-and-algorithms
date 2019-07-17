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

  // it('addNode() Node can be successfully added to the graph', () => {
  //   let oneVertex = new Vertex(1);
  //   graph.addNode(oneVertex);
  //   expect(graph._adjacencyList.get(oneVertex)).toEqual([]);
  // });

  // it('addEdge() An edge can be successfully added to the graph', () => {
  //   let oneVertex = new Vertex(1);
  //   let twoVertex = new Vertex(2);
  //   graph.addNode(oneVertex);
  //   graph.addNode(twoVertex);
  //   graph.addEdge(oneVertex, twoVertex);

  //   let expected = [new Edge(new Vertex(2),0)];
  //   expect(graph._adjacencyList.get(oneVertex)).toStrictEqual(expected);
  // });

  // it('getValues() A collection of all nodes can be properly retrieved from the graph', () => {
  //   let oneVertex = new Vertex('Airplane');
  //   let twoVertex = new Vertex('Car');
  //   let threeVertex = new Vertex('Train');
  //   graph.addNode(oneVertex);
  //   graph.addNode(twoVertex);
  //   graph.addNode(threeVertex);
  //   graph.addEdge(oneVertex, twoVertex);
  //   graph.addEdge(oneVertex, threeVertex);


  //   let nodes = graph.getNodes();
  //   expect(nodes).toEqual([ 'Airplane', 'Car', 'Train' ]);
  // });

  // it('getNeighbors() All appropriate neighbors can be retrieved from the graph', () => {
  //   let oneVertex = new Vertex(1);
  //   let twoVertex = new Vertex(2);
  //   graph.addNode(oneVertex);
  //   graph.addNode(twoVertex);
  //   graph.addEdge(oneVertex, twoVertex);
  //   let expected = [{vertex: { value: 2, }, weight: 0} ];

  //   expect(graph.getNeighbors(oneVertex)).toEqual(expected);
  // });

  // it('Neighbors are returned with the weight between nodes included', () => {
  //   let oneVertex = new Vertex('Airplane');
  //   let twoVertex = new Vertex('Car');
  //   let threeVertex = new Vertex('Train');
  //   graph.addNode(oneVertex);
  //   graph.addNode(twoVertex);
  //   graph.addNode(threeVertex);
  //   graph.addEdge(oneVertex, twoVertex);
  //   graph.addEdge(oneVertex, threeVertex);


  //   graph.bfs(oneVertex);
  //   expect().toEqual();
  // });

  // it('size() The proper size is returned, representing the number of nodes in the graph', () => {
  //   let oneVertex = new Vertex(1);
  //   let twoVertex = new Vertex(2);
  //   graph.addNode(oneVertex);
  //   graph.addNode(twoVertex);
  //   graph.addEdge(oneVertex, twoVertex);
  //   let expected = 2;

  //   expect(graph.size()).toEqual(expected);
  // });

  it('getNodes() should return array of vertex', () => {
    let gothamVertex = new Vertex('Gotham');
    let palletTown = new Vertex('PalletTown');
    let bikiniBottom = new Vertex('Bikini Bottom');
    let stardewValley = new Vertex('Startdew Valley');
    graph.addNode(gothamVertex);
    graph.addNode(palletTown);
    graph.addNode(bikiniBottom);
    graph.addNode(stardewValley);
    graph.addEdge(gothamVertex, palletTown);

    let result = graph.getNodes();
    expect(result).toEqual(true);
  });

  // it('A graph with only one node and edge can be properly returned', () => {
  //   expect().toEqual();
  // });

  // it('An empty graph properly returns null', () => {
  //   expect().toEqual();
  // });
});
