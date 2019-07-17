'use struict';

module.exports = (destinations, graph) => {
  // Error checking
  for(let location of destinations){
    if(graph._adjacencyList.has(location)){
      throw new Error('A location does not match our records');
    }
  }

  let startLocation;
  let vertexLocation = graph.getNodes();
  let vertexLocationValue = vertexLocation.map(key => key.value);
  for(let location of destinations){
    console.log(location);
    if(!vertexLocationValue.includes(location)){
      throw new Error('A location does not match our records');
    }
  }

  let total = 0;


  for(let location of vertexLocation){
    if (location.value === destinations[0]){
      startLocation = location;
    }
  }

  for(let i = 1; i < destinations.length; i++){
    let neighbors = graph.getNeighbors(startLocation);
    for (let location of neighbors){
      if(location.vertex.value === destinations[i]){
        startLocation = location.vertex;
        total += location.weight;
      }
    }
  }
  return total;
};
