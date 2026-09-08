
const express = require("express");
const router = express.Router();

const tourController = require("../controller/tourController");

// GET all tours
router.get("/tours", tourController.getAllTours);

// GET tour by ID
router.get("/tours/:id", tourController.getTourById);

// POST new tour
router.post("/tours", tourController.addTour);

// DELETE tour
router.delete("/tours/:id", tourController.deleteTour);

// PUT update tour
router.put("/tours/:id", tourController.updateTour);

module.exports = router;