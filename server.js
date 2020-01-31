const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

const exerciseController = require("./controllers/exerciseController");
app.use(exerciseController)
const workoutController = require("./controllers/workoutController");
app.use(workoutController)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});