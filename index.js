const express = require("express");
const routes = require("./routes");
const { sequelize, connectToDB } = require("./db");
const body_parser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", routes);
/* 
app.use((req, res) => {
  res.status(400);
  res.json({ message: "resourse not found" });
});

app.use((req, res) => {
  res.status(500);
  res.json({ message: "Oops... something go wrong" });
}); */

app.get("/", (req, res) => {
  res.status(200).json({ messege: "Hello World" });
});

app.listen(PORT, async () => {
  console.log("listening on port:", PORT);
  await connectToDB();
});

//npm install --save sequelize-cli
//npm install --save sequelize
