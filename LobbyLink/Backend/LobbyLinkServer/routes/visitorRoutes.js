let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all users
router.get("/", (req, res) => {
    Controllers.visitorController.getVisitors(res);
});

// Adds a POST route to create a new user
router.post("/create", (req, res) => {
    Controllers.visitorController.createVisitor(req.body, res);
});

// Adds a PUT route to update a user
router.put("/:id", (req, res) => {
    Controllers.visitorController.updateVisitor(req, res);
});

// Add a DELETE route to remove a user
router.delete("/:id", (req, res) => {
    Controllers.visitorController.deleteVisitor(req, res);
});

module.exports = router;
