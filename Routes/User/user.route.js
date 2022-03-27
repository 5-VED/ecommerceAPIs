const express = require('express');
const router = express.Router();
const userController = require('../../Controllers/User/user.Controller');
const { userValidator } = require('../../Middlewares/Validators/user_validator');

router.post('/signup', userValidator, userController.signup);

router.post('/signin', userController.signin);

router.get('/allUsers', userController.getAllUsers);

router.get('/user/:id', userController.getUser);

router.put('/user/:id', userController.deleteUser);

router.put('/updateUser/:id', userValidator, userController.updateUser);

module.exports = router;    