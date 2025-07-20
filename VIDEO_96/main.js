import mongoose from "mongoose";
import express from "express";
import { todo as Todo } from "./models/todo.js";

const app = express();
const port = 3000;

(async () => {
  await mongoose.connect("mongodb://localhost:27017/todo");
  console.log("MongoDB connected");

  app.get('/', async (req, res) => {
    const myTodo = new Todo({
      title: "hey First todo",
      desc: "Description of the todo",
      isDone: false
    });
    await myTodo.save();
    res.send('Todo saved and Hello World!');
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
})();
