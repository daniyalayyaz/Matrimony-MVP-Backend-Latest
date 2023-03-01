const mongoose = require('mongoose');
require("./userProfile");
require("./userRequest");

var houseSchema = new mongoose.Schema({

    name: { type: String, },
    status : { type: Boolean ,default: false}
});
mongoose.model('House', houseSchema);
