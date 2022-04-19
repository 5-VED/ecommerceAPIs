const express = require('express');
const router = express.Router();
const { addCategory, getCategories } = require('../../Controllers/Category/category.Controller');
const { isAuthenticated } = require('../../Middlewares/permissions')
const { ifAdmin,ifUser } = require('../../Middlewares/permissions');

router.post('/category/create', isAuthenticated, ifAdmin, addCategory);
router.get('/category/getCategory', getCategories);


module.exports = router