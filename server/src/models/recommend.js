const mongoose = require("mongoose")

const recommendSchema = new mongoose.Schema({
    type: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, default: null },
    rating: { type: Number, default: null }
})

module.exports = mongoose.model("recommend", recommendSchema)