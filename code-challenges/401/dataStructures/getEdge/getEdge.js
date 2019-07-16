'use struict';

module.exports = (destinations, graph) => {
  let startLocation;
  let vertexLocation = graph.getNodes();
  let total = 0;

  for(location in vertexLocation){
    if (location.value === destinations[0]){
      startLocation = location;
      total += location.weight;
    }
  }

  for(let i = 1; i < destinations.length; i++){
    console.log('here');
    console.log(startLocation);
    let neighbors = graph.getNeighbors(startLocation);
    for (location in neighbors){
      if(location.value === destinations[i]){
        startLocation = location;
        total += location.weight;
      }
    }
  }
  return total;
};
