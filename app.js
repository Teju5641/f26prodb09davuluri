
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// MongoDB connection
require('dotenv').config();
var mongoose = require('mongoose');

var connectionString = process.env.MONGO_CON;

mongoose.connect(connectionString)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Get the default connection
var db = mongoose.connection;

// Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  console.log('MongoDB connection is open');
});

// Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var riversRouter = require('./routes/rivers');
var resourceRouter = require('./routes/resource');

var River = require("./models/river");

// Seed the database with three rivers
async function recreateDB() {
    try {
        // Delete existing rivers
        await River.deleteMany({});

        let river1 = new River({
            river_name: "Nile",
            country: "Egypt",
            length_km: 6650
        });

        let river2 = new River({
            river_name: "Amazon",
            country: "Brazil",
            length_km: 6400
        });

        let river3 = new River({
            river_name: "Mississippi",
            country: "United States",
            length_km: 3730
        });

        await river1.save();
        console.log("First river saved");

        await river2.save();
        console.log("Second river saved");

        await river3.save();
        console.log("Third river saved");

    } catch (err) {
        console.error(err);
    }
}

let reseed = false;

if (reseed) {
    recreateDB();
}

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rivers', riversRouter);
app.use('/resource', resourceRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
