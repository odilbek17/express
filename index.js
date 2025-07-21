console.log("hi");

const { clear } = require('console');
const express = require('express');
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "alixon", age: 18 },
  { id: 2, name: "sunbul", age: 23 },
  { id: 3, name: "jonibek", age: 33 },
  { id: 4, name: "dunbul", age: 21 },
  { id: 5, name: "dilshod", age: 19 }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  res.send("poste")
  users.push(newUser);
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
