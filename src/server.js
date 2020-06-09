//var express = require("express"); // nap thu vien express vao
import express from "express";
import ConnectDB from "./config/connectDB";
import ContactModel from "./models/contact.model";

var app = express();

//Connect to MonggoDB
ConnectDB();


app.get("/test-database", async (req, res) => {
  try {
    let item = {
      userId: "123456789",
      contactId: "1238092498234",
    };
    let contact = await ContactModel.createNew(item);
    res.send(contact);
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Hello Minh Thanh, Running at -  ${process.env.APP_HOST}:${process.env.APP_PORT}`);
});
