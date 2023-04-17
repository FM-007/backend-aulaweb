const port = 3000;
const http = require("http");
const express = require("express");

const app = express();

app.use(express.static("./public"));

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;
