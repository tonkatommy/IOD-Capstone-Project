const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    idNo: { type: String, trim: true, required: true, unique: true },
    title: { type: String, trim: true, required: true },
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    origin: { type: String, trim: true, required: true },
    contact: { type: String, trim: true },
    safetyBrief: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", userSchema);
