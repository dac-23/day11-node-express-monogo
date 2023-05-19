import express from "express";
import { readAllTodo, insertTodo } from "./db_todo.js";

const app = express();

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

app.listen(4000);
