const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/WorkoutController");

const router = express.Router();

// to Get all worksots
router.get("/", getWorkouts);

// to Get one worksots
router.get("/:id", getWorkout);

// to Create  worksots
router.post("/", createWorkout);

// to delete one worksots
router.delete("/:id", deleteWorkout);

// to update workouts
router.patch("/:id", updateWorkout);

module.exports = router;
