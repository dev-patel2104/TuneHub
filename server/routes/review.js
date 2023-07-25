const express = require('express');
const reviewController = require('../controllers/review.js');

const router = express.Router();

// adding review for a song
router.patch('/add/:id', reviewController.addReview);

router.patch('/edit/:id', reviewController.editReview);

router.delete('/delete/:id', reviewController.removeReview);

router.get('/reviews/:id', reviewController.getReviews);

module.exports = router;