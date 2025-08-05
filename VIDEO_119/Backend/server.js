// server.js
import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors()); // allow frontend access
app.use(express.json()); // parse JSON request bodies

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log("Received from frontend:", req.body);
  res.json({ message: "Data received", yourData: req.body });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
