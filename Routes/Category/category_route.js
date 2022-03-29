const express = require('express');
const {addCategory, getCategories} = require('../../Controllers/Category/category_Controller');
const router = express.Router();


router.post('/category/create',addCategory);
router.get('/category/getCategory',getCategories);


module.exports = router