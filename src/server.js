//var express = require("express"); // nap thu vien express vao
import express from "express"
var app = express();

var hostname = "localhost";
var port = 8017;

app.get("/", (req, res) => {
  res.send("<h1>Hello World !!!</h1>")
});

app.listen(port, hostname, () => {
  console.log(`Hello Minh Thanh, Running at -  ${hostname}:${port}`);
});
