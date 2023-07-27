const Artist = require('../models/artistModel');
const {v4 : uuidv4 } = require('uuid'); 

exports.addArtist = async (req,res) => {
    
    const {name, genre} = req.body
    const newId = uuidv4();
    if(name === null || genre === null || genre.length === 0)
    {
        return res.status(422).json({ error: "Invalid or empty input data" });
    }
    
    try
    {
        const artistExists = await Artist.checkIfArtistAlreadyPresent(name);
        if(artistExists)
        {
            return res.status(409).json({ error: 'An artist with the same name already exists.' });    
        }
        const newArtist = new Artist({
            id : newId,
            name,
            genre
        });
    
        const addedArtist = await newArtist.save();
        return res.status(201).json(addedArtist);

    }
    catch(error)
    {
        return res.status(500).json({ error: "Failed to add the artist" });
    }
}

exports.getArtist = async (req,res) => {
    const artistId = req.params.id;
    if(artistId === null)
    {
        return res.status(422).json({error : "Invalid or empty input data"});
    }
    
    try
    {
        const artist = await Artist.findOne({id : artistId});
        console.log(artist);
        return res.status(201).json(artist);
    }
    catch (error)
    {
        return res.status(500).json({error : "Failed to get the artist for the given id"});
    }
}

exports.getAllArtist = async (req,res) => {
    console.log("Here");
    try
    {
        
        const artists = await Artist.find();
        console.log(artists);
        return res.status(200).json(artists);
    }
    catch (error)
    {
        return res.status(500).json({error : "Failed to get the list of the artists"});
    }
}