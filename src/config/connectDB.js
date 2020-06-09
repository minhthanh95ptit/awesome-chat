import mongoose from "mongoose";
import bluebird from "bluebird";

let connectDB = () => {
  mongoose.Promise = bluebird;


  // mongodb://localhost/27017/awe_somechat
  let URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

  return mongoose.connect(URI, { useNewUrlParser: true }).then(() => console.log('CONNECTING...'))
    .catch(err => console.log(err));;
};

module.exports = connectDB;