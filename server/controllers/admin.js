const Song = require('../models/songModel.js')
const Review = require('../models/reviewModel.js');

exports.addSong = async (req, res) => {
    try {
        const { id, name, artist, duration, genres, releaseYear, image, reviews } = req.body;
        if (name == null || artist == null || duration == null ||
            name.trim() === '' || artist.length === 0 || duration.trim() === '') {
            return res.status(422).json({ error: "Invalid or empty input data" });
        }

        const newSong = new Song({
            id,
            name,
            artist,
            duration,
            genres,
            releaseYear,
            reviews,
            image
        })
        console.log(newSong);
        const addedSong = await newSong.save();

        return res.status(201).json(addedSong);
    }
    catch (error) {
        console.error('Error creating song:', error);
        res.status(500).json({ error: 'Failed to create song' });
    }
};

exports.getSongs = async (req, res) => {
    try {

        const songs = await Song.find();

        return res.status(201).json(songs);
    }
    catch (error) {
        console.error('Error creating song:', error);
        return res.status(500).json({ error: 'Failed to create song' });
    }
}

exports.updateSong = async (req, res) => {
    const songId = req.params.id;
    const updatedData = req.body;
    if (updatedData.id == null || updatedData.name == null || updatedData.artist == null ||
        updatedData.duration == null || updatedData.genres == null || updatedData.releaseYear == null) {
        return res.status(422).json({ error: 'Improper input has been given' });
    }
    try {
        await Song.updateOne({ id: songId }, updatedData);
        return res.status(200).json({ message: "Song updated successfully" });
    }
    catch (error) {
        return res.status(500).json({ error: "Failed to update the song" });
    }
}

exports.deleteSong = async (req, res) => {
    const songId = req.params.id;
    if (songId == null) {
        return res.status(422).json({ error: 'Improper input has been given' });
    }
    try {
        await Song.deleteOne({ id: songId });
        console.log("Inside delete");
        return res.status(200).json({ message: "Song has been successfully removed" });
    }
    catch (error) {
        return res.status(500).json({ error: "Failed to delete the song" });
    }
}