var mongoose = require('mongoose');

let photosSchema = new mongoose.Schema({
    photo: String
})

let Photo = mongoose.model('Model', photosSchema);