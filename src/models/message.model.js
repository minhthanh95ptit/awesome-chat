import mongoose from "mongoose";

let Schema = mongoose.Schema;

let messageSchema = new Schema({
  sender: {
    id: String,
    username: String,
    avatar: String
  },
  reciver: {
    id: String,
    username: String,
    avatar: String
  },
  text: String,
  file: { data: Buffer, contentType: String } // Buffer : Nhi phan, contentTyle: anh,stirng...
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: null },
  deletedAt: { type: Number, default: null }
});

module.exports = mongoose.model("message", messageSchema) // de so it vi len CSDL auto them "s"
