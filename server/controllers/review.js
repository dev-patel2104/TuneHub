const Song = require('../models/songModel.js');
const Review = require('../models/reviewModel.js');
const {v4 : uuidv4 } = require('uuid'); 

exports.addReview = async (req, res) => {
    const songId = req.params.id;
    const review = req.body;

    if (review.comment === null || review.rating === null || review.userId === null ||
        songId === null) {

        return res.status(422).json({ error: "Invalid or empty input data" });
    }
    try {
        const songToAddReview = await Song.findOne({ id: songId });
        if (songToAddReview === null) {
            return res.status(404).json({ error: "Song not found" });
        }
        
        console.log(songToAddReview);
        const newId = uuidv4();

        const newReview = new Review({
            reviewId: newId,
            ...review
        })
        songToAddReview.reviews.push(newReview);

        await songToAddReview.save();

        return res.status(200).json({ message: "The review has been added successfully", AddedReview: review });
    }
    catch (error) {
        return res.status(500).json({ error: "Failed to add the review" });
    }

};

exports.editReview = async (req, res) => {
    const songId = req.params.id;
    const review = req.body;
    if (review.comment === null || review.rating === null || review.reviewId === null ||
        review.userId === null|| songId === null) {
        return res.status(422).json({ error: "Invalid or empty input data" });
    }
    
    try {

        const songToUpdateReview = await Song.findOne({ id: songId });
        
        if (songToUpdateReview === null) {
            return res.status(404).json({ error: "Song not found" });
        }
        
        const updatedReviews = songToUpdateReview.reviews.map(item => 
            {
                if(item.reviewId === review.reviewId)
                {
                    return review;   
                }  
                return item;  
            });
        
        songToUpdateReview.reviews = updatedReviews;
        console.log(songToUpdateReview.reviews);
        //const reviewToUpdate = songToUpdateReview.reviews.find(items => items.reviewId === review.reviewId)
        
        await songToUpdateReview.save();

        return res.status(200).json({ message: "The review has been edited successfully", AddedReview: review });
    }
    catch (error) {
        return res.status(500).json({ error: "Failed to edit the review" });
    }
};


exports.removeReview = async (req, res) => {
    
    const songId = req.params.id;
    const review = req.body;
    if(review.reviewId === null || songId === null)
    {
        return res.status(422).json({ error: "Invalid or empty input data" });    
    }

    try
    {
        const songToRemoveReview = await Song.findOne({id : songId});   
        
        if(!songToRemoveReview)
        {
            return res.status(404).json({error : "Song not found"});
        }
        //console.log(songToRemoveReview);
        const updatedReviews = songToRemoveReview.reviews.filter(item => item.reviewId !== review.reviewId);
        songToRemoveReview.reviews = updatedReviews;
        
        console.log(updatedReviews);
        await songToRemoveReview.save();
        return res.status(200).json({ message: "The review has been deleted successfully", AddedReview: review });
    
    }
    catch (error)
    {
        return res.status(500).json({ error: "Failed to delete the review" });
    }
};

exports.getReviews = async (req,res) => 
{
    const songId = req.params.id;
    if(songId === null)
    {
        return res.status(422).json({error : "Invalid or empty input data"});
    }
    try
    {
        const songToGetReviews = await Song.findOne({id : songId});
        console.log(songToGetReviews);
        return res.status(200).json({reviews : songToGetReviews.reviews});
    }
    catch(error)
    {
        return res.status(500).json({ error: "Failed to delete the review" });
    }
};