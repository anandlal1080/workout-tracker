const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter an exercise name",
      },
      duration: {
        type: Number,
        required: "Enter an exercise duration in minutes",
      },
      weight: {
        type: Number,
        required: "Enter an exercise weight",
      },
      reps: {
        type: Number,
        required: "Enter number of reps for excercise",
      },
      sets: {
        type: Number,
        required: "Enter number of sets for excercise",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
