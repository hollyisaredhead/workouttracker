const express = require("express");
const morgan = require("morgan")
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(require("./routes/api.js"));
app.use(require("./routes/htmlRoutes");


app.listen(PORT, function () {
    console.log(`Listing on Port: ${PORT}`);
});