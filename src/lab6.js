/**
 Todo: Complete this lab 

 - Explore node `http` module
 - Create an http server on the port 3000
 - Create a handler of 
    - '/' req that serves to the client the following:
        A text: Hello, this is http node module 
        And a link: <a href="/">Dashbaoard -></a> 
    - '/dashboard' that serves to the client the following: 
        <h1>Dashbaoard</h1>
        <main>Basic routing using node http server</main>
        <a href="/">back home</a>
 
 */

const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.method);
  if (req.url === "/") {
    res.end(
      "<h1>Hello, this is http node module</h1><a href='/dashboard'>Dashbaoard -></a>"
    );
  } else if (req.url === "/dashboard") {
    res.end(`
          <h1>Dashboard</h1>
          <main>Basic routing using node http server</main>
          <a href="/">Home -></a>
      `);
  }
});
server.listen(3000, () => {
  console.log("running: ");
});
