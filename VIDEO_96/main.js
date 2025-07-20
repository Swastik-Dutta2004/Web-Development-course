import mongoose from "mongoose";
import express from "express"
import { todo } from "./models/todo.js";

const app = express()
const port = 3000

(async ()=>{
   
        await mongoose.connect("mongodb://localhost:27017/todo")

        app.get('/', (req, res) => {
            const todo = new todo({title: "hey First todo", desc:"Description of the todo", isDone: false
            });
            await todo.save()
          res.send('Hello World!')
        })
        
        app.listen(port, () => {
          console.log(`Example app listening on port ${port}`)
        })
    }

)