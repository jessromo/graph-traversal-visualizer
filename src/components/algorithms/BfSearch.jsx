const BfSearch = () => {
  const visited = [];
  const queue = [];
  const iter = 0;

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(false);
    }
    visited.push(row);
  }

  queue.push({ i: 0, j: 0 });

  while (queue.length > 0) {
    const currentNode = queue.shift();
    const { i, j } = currentNode;

    if (visited[i][j]) continue;
    visited[i][j] = true;

    setTimeout(() => {
        document.getElementById(`node-${i}-${j}`).style.animation =
          "buch 1s ease-out";
      }, iter);
      iter += 50;

      if( i > 0 && !visited[i - 1][j]) queue.push({ i: i - 1, j } )
      if(i < rows - 1 && !visited[i + 1][j]) queue.push({ i: i + 1, j })
      if(j > 0 && !visited[j-1][i]) queue.push({j: j - 1, i}) 
      if(j < cols -1 && !visited[j + 1][i]) queue.push({j: j + 1, i})
  }
};

export default BfSearch;
