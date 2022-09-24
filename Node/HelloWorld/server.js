const http = require("http");
const dbinfo = require("./dbinfo");

http
  .createServer((request, response) => {
    if (request.url === "/") {
      debugger;
      response.end("Helloworld from home " + dbinfo.port);
    } else if (request.url === "/user") {
      response.end("Helloworld from uswr");
    } else if (request.url === "/games") {
      response.end("Helloworld from games");
    }
  })
  .listen(5000);
