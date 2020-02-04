const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI);

const htmlController = require("./controllers/htmlController");
app.use(htmlController);
const workoutController = require("./controllers/workoutController");
app.use(workoutController);



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});