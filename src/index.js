import { MongoClient } from "mongodb";

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  const db = client.db("project");
  let data = { message: "Hello Mongo!" };
  let result = await db.collection("todo").insertOne(data);

  await client.close();
}

main();
