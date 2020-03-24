const db = require("../models/workout");

module.exports = function (app) {

    //GET route for workouts
    app.get("/api/workouts", function (req, res) {
        Workout.find({})
            .sort({ _id: -1 })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
        })
    })

    //POST route for saving workouts
    app.post("/api/workouts", function (req, res) {
        Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
        })
    })
}