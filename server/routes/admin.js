const express = require('express');
const adminController = require('../controllers/admin.js');

const router = express.Router();

router.post('/add/song', adminController.addSong);
router.get('/songs', adminController.getSongs);
router.put('/update/song/:id', adminController.updateSong);
router.delete('/delete/song/:id', adminController.deleteSong);


module.exports = router;