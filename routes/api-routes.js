const Workout = require("../models/workout");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    Workout.find()
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    const data = req.body;
    Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
