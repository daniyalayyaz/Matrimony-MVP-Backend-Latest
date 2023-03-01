const mongoose = require('mongoose');
require("./userProfile");
require("./userRequest");
require("./religion");
require("./motherLanguage.model");

var sectSchema = new mongoose.Schema({

    name: { type: String, },
    status : { type: Boolean,default: false }
});
mongoose.model('Sect', sectSchema);
