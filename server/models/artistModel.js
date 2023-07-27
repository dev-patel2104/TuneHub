const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    id : {type: String},
    name : {type: String},
    genre : {type : Array, default: []}    
})

const Artist = mongoose.model('Artist', artistSchema, 'Artist');

Artist.checkIfArtistAlreadyPresent = async function (name) 
{
    try
    {
        const existingArtist = await this.findOne({name});
        if(existingArtist !== null)
        {
            return true;
        }
    }
    catch(error)
    {
        console.error("Error checking artist", error);
        return false;
    }
};

module.exports = Artist;