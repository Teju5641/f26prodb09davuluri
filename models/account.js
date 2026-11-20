const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const plugin = require('passport-local-mongoose');

const accountSchema = new Schema({
    username: String,
    password: String
});

accountSchema.plugin(plugin.default || plugin);

module.exports = mongoose.model("Account", accountSchema);