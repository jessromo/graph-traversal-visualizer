import Node from "./Node";

const rows = 13;
const cols = 17;

function Grid() {
  function graph(rows, cols) {
    const grid = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(new Node(i, j));
      }
      grid.push(row);
    }

    return grid;
  }

  const grid = graph(rows, cols);

  // linear search
  const linearSearch = () => {
    let iter = 50;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        setTimeout(() => {
          document.getElementById(`node-${i}-${j}`).style.animation =
            "buch 1s ease-out";
        }, iter);
        iter += 50;
      }
    }

    setTimeout(() => {
      window.location.reload();
    }, iter);
  };

  // breadth first search

  const bfSearch = () => {
    const visited = [];
    const queue = [];
    let iter = 0;

    //visited[]

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(false); // false = not yet visited
      }
      visited.push(row);
    }
    //queue[]
    queue.push({ i: 6, j: 8 }); // starting point
    // traverse
    while (queue.length > 0) {
      const currentNode = queue.shift();
      const { i, j } = currentNode;

      if (visited[i][j]) continue;
      visited[i][j] = true; /// node has been visited, no longer in queue

      setTimeout(() => {
        document.getElementById(`node-${i}-${j}`).style.animation =
          "buch 1s ease-out";
      }, iter);
      iter += 15;

      if (i > 0 && !visited[i - 1][j]) queue.push({ i: i - 1, j }); // checking nodes above
      if (i < rows - 1 && !visited[i + 1][j]) queue.push({ i: i + 1, j }); // checking nodes below
      if (j > 0 && !visited[i][j - 1]) queue.push({ i, j: j - 1 }); // checking nodes to the left
      if (j < cols - 1 && !visited[i][j + 1]) queue.push({ i, j: j + 1 }); // checking nodes to the right
    }

    setTimeout(() => {
      window.location.reload();
    }, iter);
  };

  ///dfs

  const dfSearch = () => {
    const visited = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(false);
      }
      visited.push(row);
    }

    const dfs = (i, j, iter = 0) => {
      if (i < 0 || i >= rows || j < 0 || j >= cols || visited[i][j]) {
        return;
      }

      visited[i][j] = true; /// node has been visited

      setTimeout(() => {
        document.getElementById(`node-${i}-${j}`).style.animation =
          "buch 1s ease-out";
      }, iter);

      iter += 50;

      dfs(i, j + 1, iter); // right
      dfs(i, j - 1, iter); // left
      dfs(i - 1, j, iter); // up
      dfs(i + 1, j, iter); // down
    };

    dfs(0, 0); // starting point
    setTimeout(() => {
      window.location.reload();
    }, iter);
  };

  return (
    <>
      <div className="graph">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((col, colIndex) => (
              <div
                id={`node-${rowIndex}-${colIndex}`}
                key={`node-${rowIndex}-${colIndex}`}
                className="col"
              />
            ))}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={linearSearch} id="linearbtn">
          Linear
        </button>
        <button onClick={bfSearch} id="bfbtn">
          Breadth First
        </button>
        <button onClick={dfSearch}>Depth First</button>
      </div>
    </>
  );
}

export default Grid;
