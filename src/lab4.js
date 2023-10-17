/**
 Todo: Complete this lab 

 - Add a new task in scripts of package.json to run `lab4.js`
 - Use argv of process module to get `filename` (a path to an existing file './utils/content.txt') and `text` (a text)
 - Use writeFile of fs module to write text in filename
 - Use readFile of fs module to read nameFile
 */

//  const process = require("node:process");
const fs = require("node:fs");

const filename = process.argv[2]; // Todo;
const text = process.argv[3]; // Todo;
console.log(filename);

// Todo writeFile
fs.writeFile(filename, text, (err, res) => {
  if (err) {
    console.error(err);
  } else console.log("** File saved **");
});

// Todo readFile
fs.readFile(filename, "utf8", (err, res) => {
  console.log(res);
});
