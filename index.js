const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "Shohag",
    email: "shohag@gmail.com",
    role: "admin",
    isActive: true,
  },
  {
    id: 2,
    name: "Rahim",
    email: "rahim@gmail.com",
    role: "user",
    isActive: true,
  },
  {
    id: 3,
    name: "Karim",
    email: "karim@gmail.com",
    role: "seller",
    isActive: false,
  },
];

app.get("/", (req, res) => {
  res.send("user server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`users server running at http://localhost:${port}`);
});
