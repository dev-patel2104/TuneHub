const express = require('express');
const artistController = require('../controllers/artist');

const router = express.Router();

router.post('/add', artistController.addArtist);
router.get('/:id', artistController.getArtist);
router.get('/', artistController.getAllArtist);

module.exports = router;