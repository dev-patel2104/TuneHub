const Genre = require('../models/genreModel');
const {v4 : uuidv4 } = require('uuid'); 

exports.getAllGenre = async (req,res) => {
   
    try
    {
        const allGenres = await Genre.find();
        console.log(allGenres);
        return res.status(201).json(allGenres);
    }
    catch (error)
    {
        return res.status(500).json({error : "Failed to get the genres"});
    }
}