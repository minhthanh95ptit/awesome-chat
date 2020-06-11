import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";
import bodyParser from "body-parser";


let app = express();

//Connect to MonggoDB
ConnectDB();

//config view Engine

configViewEngine(app);

// Enable post data for request
app.use(bodyParser.urlencoded({ extended: true }));

//init all routes
initRoutes(app);

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Hello Minh Thanh, Running at -  ${process.env.APP_HOST}:${process.env.APP_PORT}`);
});
