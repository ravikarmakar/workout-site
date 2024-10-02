const express = require("express");
require("dotenv").config();

const workoutRouter = require("./routes/workOuts");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware

app.use(express.json());

// connect to DB

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connect to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// routes

app.use("/api/workouts", workoutRouter);

// listen for request

app.listen(process.env.PORT, () => {
  console.log(`listen on port ${process.env.PORT}`);
});
