require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = "mongodb+srv://admin:Pass1234@cluster0-tvhyd.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connect to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongo"), err;
});

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(3000, () => {
  console.log("Listerning on port 3000");
});
