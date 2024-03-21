import Node from "./Node";
import { useEffect } from "react";
const rows = 8;
const cols = 10;

// for linear search
let arr = [1, 2, 3, 4, 5, 6];
let x = 1;
let n = arr.length;

// grid component
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

  useEffect(() => {
    let iter = 0;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        setTimeout(() => {
          document.getElementById(`node-${i}-${j}`).style.animation =
            "buch 1s ease-out";
        }, iter);
        iter += 50;
      }
    }
  });

  // linear search
  function linearSearch(arr, x, n) {
    for (let i = 0; i < n; i++) {
      if (arr[i] == x) {
        return i;
      }
      return -1;
    }
  }

  function searchInArr() {
    const result = linearSearch(arr, x, n);
    if (result == -1) {
      return console.log("element was not found");
    }
    return console.log("element was found!");
  }

  searchInArr();
  //
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
                onClick={() => {}}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Grid;

/*
unique id names for divs, not classname, ID name

id= node-{row-col}

doule 4 loop - within this - setTimeout in the nested loop of the two

doc.getElementbyID`$nodexyz.style.animation = keyframe animation name 1s ease out linear (write in main.css)

from border radius 100px indigo to green
*/
