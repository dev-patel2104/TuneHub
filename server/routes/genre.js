const express = require('express');
const genreController = require('../controllers/genre');

const router = express.Router();

router.get('/', genreController.getAllGenre);

module.exports = router;