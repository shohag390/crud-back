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
  {
    id: 4,
    name: "Hasan",
    email: "hasan@gmail.com",
    role: "user",
    isActive: true,
  },
  {
    id: 5,
    name: "Sumon",
    email: "sumon@gmail.com",
    role: "seller",
    isActive: true,
  },
  {
    id: 6,
    name: "Jamal",
    email: "jamal@gmail.com",
    role: "user",
    isActive: false,
  },
  {
    id: 7,
    name: "Bappy",
    email: "bappy@gmail.com",
    role: "admin",
    isActive: true,
  },
  {
    id: 8,
    name: "Sabbir",
    email: "sabbir@gmail.com",
    role: "user",
    isActive: true,
  },
  {
    id: 9,
    name: "Fahim",
    email: "fahim@gmail.com",
    role: "seller",
    isActive: false,
  },
  {
    id: 10,
    name: "Nayeem",
    email: "nayeem@gmail.com",
    role: "user",
    isActive: true,
  },
  {
    id: 11,
    name: "Rifat",
    email: "rifat@gmail.com",
    role: "user",
    isActive: true,
  },
  {
    id: 12,
    name: "Tanvir",
    email: "tanvir@gmail.com",
    role: "seller",
    isActive: true,
  },
  {
    id: 13,
    name: "Arif",
    email: "arif@gmail.com",
    role: "user",
    isActive: false,
  },
  {
    id: 14,
    name: "Mahmud",
    email: "mahmud@gmail.com",
    role: "admin",
    isActive: true,
  },
  {
    id: 15,
    name: "Sakib",
    email: "sakib@gmail.com",
    role: "user",
    isActive: true,
  },
  {
    id: 16,
    name: "Imran",
    email: "imran@gmail.com",
    role: "seller",
    isActive: false,
  },
  {
    id: 17,
    name: "Noman",
    email: "noman@gmail.com",
    role: "user",
    isActive: true,
  },
  {
    id: 18,
    name: "Rubel",
    email: "rubel@gmail.com",
    role: "seller",
    isActive: true,
  },
  {
    id: 19,
    name: "Shuvo",
    email: "shuvo@gmail.com",
    role: "user",
    isActive: false,
  },
  {
    id: 20,
    name: "Rakib",
    email: "rakib@gmail.com",
    role: "admin",
    isActive: true,
  },

  // New Users (21-40)
  {
    id: 21,
    name: "Hridoy",
    email: "hridoy@gmail.com",
    role: "user",
    isActive: true,
  },
  {
    id: 22,
    name: "Foysal",
    email: "foysal@gmail.com",
    role: "seller",
    isActive: true,
  },
  {
    id: 23,
    name: "Mizan",
    email: "mizan@gmail.com",
    role: "user",
    isActive: false,
  },
  {
    id: 24,
    name: "Mehedi",
    email: "mehedi@gmail.com",
    role: "admin",
    isActive: true,
  },
  {
    id: 25,
    name: "Siam",
    email: "siam@gmail.com",
    role: "user",
    isActive: true,
  },
  {
    id: 26,
    name: "Rasel",
    email: "rasel@gmail.com",
    role: "seller",
    isActive: false,
  },
  {
    id: 27,
    name: "Tareq",
    email: "tareq@gmail.com",
    role: "user",
    isActive: true,
  },
  {
    id: 28,
    name: "Shakil",
    email: "shakil@gmail.com",
    role: "user",
    isActive: true,
  },
  {
    id: 29,
    name: "Rony",
    email: "rony@gmail.com",
    role: "seller",
    isActive: true,
  },
  {
    id: 30,
    name: "Sujon",
    email: "sujon@gmail.com",
    role: "admin",
    isActive: false,
  },
  {
    id: 31,
    name: "Saif",
    email: "saif@gmail.com",
    role: "user",
    isActive: true,
  },
  {
    id: 32,
    name: "Nafis",
    email: "nafis@gmail.com",
    role: "seller",
    isActive: true,
  },
  {
    id: 33,
    name: "Raihan",
    email: "raihan@gmail.com",
    role: "user",
    isActive: false,
  },
  {
    id: 34,
    name: "Shanto",
    email: "shanto@gmail.com",
    role: "user",
    isActive: true,
  },
  {
    id: 35,
    name: "Fardin",
    email: "fardin@gmail.com",
    role: "seller",
    isActive: false,
  },
  {
    id: 36,
    name: "Kawsar",
    email: "kawsar@gmail.com",
    role: "admin",
    isActive: true,
  },
  {
    id: 37,
    name: "Arafat",
    email: "arafat@gmail.com",
    role: "user",
    isActive: true,
  },
  {
    id: 38,
    name: "Sifat",
    email: "sifat@gmail.com",
    role: "seller",
    isActive: true,
  },
  {
    id: 39,
    name: "Tanjil",
    email: "tanjil@gmail.com",
    role: "user",
    isActive: false,
  },
  {
    id: 40,
    name: "Bashar",
    email: "bashar@gmail.com",
    role: "admin",
    isActive: true,
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
