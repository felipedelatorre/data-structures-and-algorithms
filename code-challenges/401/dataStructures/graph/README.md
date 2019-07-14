# Summary and name of challenge
A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph can be defined as, "A Graph consists of a finite set of vertices(or nodes) and set of Edges which connect a pair of nodes."

## Challenge
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

* AddNode()
  * Adds a new node to the graph
  * Takes in the value of that node
  * Returns the added node
* AddEdge()
  * Adds a new edge between two nodes in the graph
  * Include the ability to have a “weight”
  * Takes in the two nodes to be connected by the edge
  * Both nodes should already be in the Graph
* GetNodes()
  * Returns all of the nodes in the graph as a collection (set, list, or similar)
* GetNeighbors()
  * Returns a collection of nodes connected to the given node
  * Takes in a given node
  * Include the weight of the connection in the returned collection
* Size()
  * Returns the total number of nodes in the graph

## Approach & Efficiency
* AddNode() -> O(1)
* AddEdge() -> O(1)
* GetNodes() -> O(n)
* GetNeighbors() -> O(1)
* Size() -> O(1)

## API
* AddNode() -> O(1) Adds a vertex to the graph
* AddEdge() -> O(1) Adds an edge to a vertex
* GetNodes() -> Retruns a list of all vertexes
* GetNeighbors(vertex) -> Returns all adjecent vertexes
* Size() -> Gets the numbers of vertexes in the graph