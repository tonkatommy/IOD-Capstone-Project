let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all users
router.get("/", (req, res) => {
    Controllers.userController.getUsers(res);
});

// Adds a GET route to return user by id
router.get("/:_id", (req, res) => {
    Controllers.userController.getUser(res);
});

// Adds a POST route to create a new user
router.post("/create", (req, res) => {
    Controllers.userController.createUser(req.body, res);
});

// Adds a POST route to insertMany users
router.post("/insert-many", (req, res) => {
    Controllers.userController.insertUsers(req.body, res);
});

// Adds a PUT route to update a user
router.put("/update/:_id", (req, res) => {
    // console.log("Mongoose: router.put: /update/:_id: req", req);
    Controllers.userController.updateUser(req, res);
});

// Adds a PUT route to update all users
router.put("/update-users", (req, res) => {
    Controllers.userController.updateUsers(req, res);
});

// Add a DELETE route to remove a user
router.delete("/:_id", (req, res) => {
    Controllers.userController.deleteUser(req, res);
});

module.exports = router;
