class Node {
  next = Node;
  back = Node;
  up = Node;
  down = Node;
  wall = Boolean
  constructor(row, col, wall) {
    this.row = row;
    this.col = col;
    this.wall = wall;
  }
}

export default Node;
