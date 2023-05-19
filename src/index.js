import express from "express";
import { readAllTodo, insertTodo } from "./db_todo.js";

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// localhost:4000/
app.get("/", async (req, res) => {
  let list = await readAllTodo();
  res.json(list);
});

// localhost:4000/addtodo
app.get("/addtodo", async (req, res) => {
  let message = req.query.message || "hardcoded message";
  await insertTodo({ message: message });
  res.json({ message: "Success" });
});

// localhost:4000/addtodo
app.post("/addtodo", async (req, res) => {
  let data = req.body;
  await insertTodo(data);
  res.json({ message: "true" });
});

app.listen(4000);
