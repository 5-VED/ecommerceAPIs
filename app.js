const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());


app.use('/api', require('./Routes/User/user.route'));
app.use('/api', require('./Routes/Category/category.route'));
app.use('/api', require('./Routes/Product/product.routes'));



module.exports = app;