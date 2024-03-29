const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitorSchema = new Schema({
    _id: { type: String },
    destination: { type: String, required: true },
    timeIn: { type: Date, required: true },
});

module.exports = mongoose.model("visitor", visitorSchema);
