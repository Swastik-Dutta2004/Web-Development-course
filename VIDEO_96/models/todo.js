import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: String,
  desc: String,
  isDone: Boolean
});
export const todo = mongoose.model('todo', todoSchema);
