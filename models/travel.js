const mongoose = require('mongoose');

const travelSchema = mongoose.Schema({
    description: String,
    image: String
});

const Travel = mongoose.model('Travel', travelSchema);


module.exports = Travel;
