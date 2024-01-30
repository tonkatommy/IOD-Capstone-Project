const express = require("express");
const app = express();
const path = require("path");

// Use .env variables
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

// Create connection to MongoDB
let dbConnect = require("./dbConnect");

// parse requests of content-type - application / json;
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

// User Routes
let userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
