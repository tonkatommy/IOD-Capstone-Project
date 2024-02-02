let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all users
router.get("/", (req, res) => {
    Controllers.logController.getLogs(res);
});

// Adds a POST route to create a new user
router.post("/create", (req, res) => {
    Controllers.logController.createLog(req.body, res);
});

// Adds a PUT route to update a user
router.put("/:id", (req, res) => {
    Controllers.logController.updateLog(req, res);
});

// Add a DELETE route to remove a user
router.delete("/:id", (req, res) => {
    Controllers.logController.deleteLog(req, res);
});

module.exports = router;
