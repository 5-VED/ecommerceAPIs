const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

app.use(cors());

app.use(bodyParser.json());

// Initializing Passport
app.use(passport.initialize());

app.use('/api', require('./Routes/User/user.route'));
app.use('/api', require('./Routes/Category/category.route'));

module.exports = app;