const express = require('express');
const userController = require('../../Controllers/User/user.Controller');
const router = express.Router();

router.post('/signup', userController.signup);

router.get('/allUsers', userController.getAllUsers);

router.get('/user/:id', userController.getUser);

router.put('/user/:id', userController.deleteUser);

router.put('/updateUser/:id', userController.updateUser);

module.exports = router;