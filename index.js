const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://shohagwebdev_db_user:tgqriI7gsmOQVWIw@crud-operation.dyjf3wz.mongodb.net/?appName=crud-operation";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    await client.connect();
    const database = client.db("crud-operation");
    const usersCollection = database.collection("users");
    const parcelsCollection = database.collection("parcels");

    // Test Route
    app.get("/", (req, res) => {
      res.send("user server is running");
    });

    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/parcels", async (req, res) => {
      const cursor = parcelsCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const users = req.body;
      const result = await usersCollection.insertOne(users);
      res.send(result);
    });

    app.post("/parcels", async (req, res) => {
      const parcels = req.body;
      const result = await parcelsCollection.insertOne(parcels);
      res.send(result);
    });

    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`users server running at http://localhost:${port}`);
});

// shohagwebdev_db_user
// tgqriI7gsmOQVWIw
