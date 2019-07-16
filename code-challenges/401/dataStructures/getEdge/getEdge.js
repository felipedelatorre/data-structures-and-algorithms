'use struict';

module.exports = (destinations, graph) => {
  let startLocation;
  let vertexLocation = graph.getNodes();
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
