'use strict';

const GraphFunctions = require('../graph');
const Graph = GraphFunctions.Graph;
const Vertex = GraphFunctions.Vertex;

const getEdge = require('../getEdge');

describe('getEdge', () => {
  const graph = new Graph();

  afterEach(() => {
    graph._adjacencyList.clear();
  });

  it('getEdge()', () => {
    let lumioseCity = new Vertex('Lumiose City');
    let cinnabarIsland = new Vertex('Cinnabar Island');
    let palletTown = new Vertex('Pallet Town');
    graph.addNode(lumioseCity);
    graph.addNode(cinnabarIsland);
    graph.addNode(palletTown);
    graph.addEdge(lumioseCity, cinnabarIsland, 43);
    graph.addEdge(cinnabarIsland, palletTown, 12);

    let destinations = ['Lumiose City', 'Cinnabar Island','Pallet Town'];
    // graph.printGraph();
    let result = getEdge(destinations, graph);
    expect(result).toEqual(55);
  });

  // it('should return one result if only one added', () => {
  //   let airplaneVertex = new Vertex('Airplane');

  //   let result = graph.breadthFirst(airplaneVertex);
  //   expect(result).toEqual(['Airplane']);
  // });

  // it('should throw an error. Missing city in map', () => {
  //   let lumioseCity = new Vertex('Lumiose City');
  //   let cinnabarIsland = new Vertex('Cinnabar Island');
  //   let palletTown = new Vertex('Pallet Town');
  //   let viridianCity = new Vertex('Viridian City');

  //   graph.addNode(lumioseCity);
  //   graph.addNode(cinnabarIsland);
  //   graph.addNode(palletTown);
  //   graph.addEdge(lumioseCity, cinnabarIsland);
  //   graph.addEdge(cinnabarIsland, palletTown);

  //   expect(()=>{
  //     graph.getEdge([lumioseCity,palletTown,viridianCity]).toThrow();
  //   });
  // });

});

