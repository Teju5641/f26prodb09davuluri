const mongoose = require("mongoose");

const riverSchema = mongoose.Schema({
    river_name: String,
    country: String,
    length_km: Number
});

module.exports = mongoose.model("River", riverSchema);