const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wrkoutSchema = new Schema({
    day: Date,
    exercises: [{
        duration: Number,
        performedExercises: String,
        weight: Number,
        sets: Number,
        reps: Number,
        distance: Number
    }]

});

const Workout = mongoose.model("Workout", wrkoutSchema);
module.exports = Workout;