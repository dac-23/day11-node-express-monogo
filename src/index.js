import express from "express";
import { readAllTodo } from "./db_todo.js";

const app = express();

app.get("/", async (req, res) => {
  let list = await readAllTodo();
  res.json(list);
});

app.listen(4000);
