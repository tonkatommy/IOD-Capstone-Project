const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

// Use .env variables
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

// Create connection to MongoDB
let dbConnect = require("./dbConnect");

// Use CORS npm package
app.use(cors());

// parse requests of content-type - application / json;
app.use(express.json());

// index route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

// User Routes
let userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Employee Routes
let employeeRoutes = require("./routes/employeeRoutes");
app.use("/api/employees", employeeRoutes);

// Visitor Routes
let visitorRoutes = require("./routes/visitorRoutes");
app.use("/api/visitors", visitorRoutes);

// Log Routes
let logRoutes = require("./routes/logRoutes");
app.use("/api/logs", logRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
