const mongoose = require('mongoose');
let movieschema = new mongoose.Schema({
    title: { type: String },
    genre: { type: String },
    director: { type: String },
    year: Number,
    rating: Number,
    image: { type: String }
});
let movies = mongoose.model('movie', movieschema);
module.exports = movies;