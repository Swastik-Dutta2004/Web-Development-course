import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: String,
  dosc: String,
  isDone: Boolean
});
export const todo = mongoose.model('todo', todoSchema);
