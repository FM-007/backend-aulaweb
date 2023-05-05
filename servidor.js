const port = 80;
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static('./public'));

const server = http.createServer(app);

app.get(["/", "/home"], (req, resp) => {
  resp.redirect("./home.html")
})

app.get("/login", (req, res) => {
  res.render("login")
})

app.post("/cadastrar", (req, res) => {
  var login = req.body.login
  var senha = req.body.senha
  res.render("resposta", {login, senha})
})

server.listen(port, () => {
  console.log(`BACKEND is running on port ${port}.`)
});

module.exports = server;
