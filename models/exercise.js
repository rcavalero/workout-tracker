const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: String,
  type: String,
  weight: Number,
  sets: Number,
  reps: Number,
  distance: Number
});



name, type, weight, sets, reps, and duration of exercise.


const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;