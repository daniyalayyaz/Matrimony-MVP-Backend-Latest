const mongoose = require('mongoose');
require("./userProfile");
require("./userRequest");

var religionSchema = new mongoose.Schema({

    name: { type: String, },
    status : { type: Boolean,default: false }
});
mongoose.model('Religion', religionSchema);
