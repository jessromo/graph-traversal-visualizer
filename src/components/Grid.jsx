import Node from "./Node";

const rows = 8;
const cols = 10;

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

  return (
    <>
      <div className="graph">
        {grid.map((row, index) => (
          <div key={index} className="row">
            {row.map((node, index) => (
              <div key={index} className="node" />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Grid;
