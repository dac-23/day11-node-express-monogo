import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function insertTodo(data) {
  const db = client.db("project");
  let result = await db.collection("todo").insertOne(data);

  await client.close();
}

async function readAllTodo() {
  const db = client.db("project");
  const todo_collection = db.collection("todo");

  let list = await todo_collection.find().toArray();
  await client.close();

  return list;
}

export { insertTodo, readAllTodo };
