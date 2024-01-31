const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
    title: { type: String, trim: true, required: true },
    message: { type: String, trim: true, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("log", logSchema);
