const getMinDistanceUsingBfs = function(graph, visited, startNode, goalNode) {
  const queue = [[startNode, 1]];
  visited[startNode] = true;
  
  while(queue.length) {
      let [currentNode, distance] = queue.shift();
      const adjecentNodes = graph[currentNode];
      distance++;
      
      for(let i = 0 ; i < adjecentNodes.length; i++) {
          const adjecentNode = adjecentNodes[i];
          if (!visited[adjecentNode]) {
              visited[adjecentNode] = true;
              if(adjecentNode === goalNode) {
                  return distance
              }
              queue.push([adjecentNode, distance]);
          }
      }

  }
  
  return -1;
  
}