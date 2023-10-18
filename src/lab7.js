/**
 Todo: follow the todos in file to complete the lab
 - 
 */

const EventEmitter = require("events");

// Todo use EventEmitter
const evt = new EventEmitter();

// Todo: write listener 1 that logs the following, `data` and `token` are emitted
evt.on("room1", (data, token) => {
  console.log(
    `Recieved payload ${JSON.stringify(data, null, 2)} with token: ${token}`
  );
});

// Todo: write listener 2 that logs the following
evt.on("room2", (data, token) => {
  console.log("A second listener as well");
});

setInterval(() => {
  // Todo: write an emitter based listener 1
  evt.emit("room1", Math.random(), String(Math.random()).substring(2));
}, 2000);
