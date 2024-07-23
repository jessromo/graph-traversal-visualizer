import { useState } from "react";

import "./App.css";
import Grid from "./components/Grid";

function App() {


  class arrayPrint {
    constructor() {
      this.arr = [];
    }

    print() {
      console.log(this.arr);
    }

    add(num){
      this.arr.push(num)
    }
  }

const printing = new arrayPrint(
)

printing.add(4)
printing.add(7)
printing.print()


  return (
    <>
      <Grid />
    </>
  );
}

export default App;
