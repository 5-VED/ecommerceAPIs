const express = require('express');
const router = express.Router();
const userController = require('../../Controllers/User/user_Controller');
const { userValidator } = require('../../Utils/Validators/user_validator');
const passport = require('passport');
const passportManager = require('../../Middlewares/passport');


router.post('/signup', userValidator, userController.signup);

router.post('/adminSignin', (req, res) => userController.signin(req, "admin", res));

router.post('/userSignin', (req, res) => userController.signin(req, "user", res));

router.get('/allUsers', userController.getAllUsers);

router.get('/user/:id', userController.getUser);

router.put('/user/:id', userController.deleteUser);

router.put('/updateUser/:id', userValidator, userController.updateUser);

module.exports = router;    