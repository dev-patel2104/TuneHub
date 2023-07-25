const express = require('express');

const userController = require('../controllers/users.js');

const router = express.Router();

router.get( '/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.put('/update/:id', userController.updateUser);
router.post('/add', userController.addUser);

module.exports = router;