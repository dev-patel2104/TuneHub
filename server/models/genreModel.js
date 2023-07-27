const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    id : {type : String},
    name : {type : String}
})

const Genre = mongoose.model('Genre', genreSchema, 'Genres');
module.exports = Genre;