import { MongoClient } from "mongodb";

async function insertTodo() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  const db = client.db("project");
  let data = { message: "Hello Mongo!" };
  let result = await db.collection("todo").insertOne(data);

  await client.close();
}

async function readAllTodo() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  const db = client.db("project");
  const todo_collection = db.collection("todo");

  let list = await todo_collection.find().toArray();
  console.log(list);

  await client.close();
}

// insertTodo();
readAllTodo();
