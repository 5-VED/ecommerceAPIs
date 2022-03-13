const express = require('express');
const userController = require('../../Controllers/User/user.Controller');
const router = express.Router();


router.post('/signup',userController.signup);

router.get('/allUsers',userController.getAllUsers);

router.get('/user',userController.getUser);



module.exports = router;