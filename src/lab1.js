/**
 Todo: create a function that sets a timeout of 3000ms and 
  do the following inside its callback:
  - console.table an array of elements
  - console.log __dirname
  - console.log __filename
  - console.log require
  - console.log module
  - console.log process
  - console.log window
 */

const randArr = ["el1", "el2", "el3", "el3"];
setTimeout(() => {
  console.table(randArr);
  console.log(__dirname);
  console.log(__filename);
  console.log(require);
  console.log(module);
  console.log(process);
  console.log(window);
}, 3000);
