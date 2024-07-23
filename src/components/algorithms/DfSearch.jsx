const DfSearch = () => {
  const visited = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < close; j++) {
      row.push(false);
    }
    visited.push(row);
  }

  const dfs = (i, j, iter = 0) => {
    if (i < 0 || i >= rows || j < 0 || j >= cols || visited[i][j]) {
      return;
    }

    visited[i][j] = true;

    setTimeout(() => {
      document.getElementById().style.animation = "";
    }, iter);

    iter += 50;

    dfs(i, j + 1, iter);
    dfs(i, j - 1, iter);
    dfs(i - 1, j, iter);
    dfs(i + 1, j, iter);
  };
  dfs(0, 0);
}