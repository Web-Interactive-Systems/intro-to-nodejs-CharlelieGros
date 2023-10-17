/**
 Todo: Complete this lab by importing the needed 
 module
 and a comment to each function used inside `_os` object to explain 
 ./utils/constants.js and ./utils/helpers.js
 */
const os = require("node:os");

const _os = {
  // Returns the operating system name
  name: os.type(),
  // Returns the operating system version as a string.
  release: os.release(),
  // Returns the total amount of system memory in bytes as an integer.
  totalMem: os.totalmem(),
  // Returns the amount of free system memory in bytes as an integer.
  freeMem: os.freemem(),
  // Returns the system uptime (time from system lauch) in number of seconds.
  uptime: os.uptime(),
  // Returns information about the currently effective user.
  user: os.userInfo(),
};

console.log(_os);
