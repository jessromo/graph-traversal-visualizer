const LinearSearch = () => {
  let iter = 50;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      setTimeout(() => {
        document.getElementById(`node-${i}-${j}`).style.animation = "";
      }, iter);
      iter += 50;
    }
  }
};

let arr = [1, 2, 3, 4, 5];
let x = 4;
let n = arr.length;




const linSearch = (arr, x, n) => {
  for (let i = 0; i < n; i++) {
    if (arr[i] == x) {
      return i;
    }
    return -1;
  }
};

const searchInArr = (arr, x, n) => {
    const result = linSearch()
    if(result == -1){
        return console.log("Element not found :( ")
    } return console.log("Element has been found!")
};
