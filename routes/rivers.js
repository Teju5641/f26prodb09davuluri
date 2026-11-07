
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('rivers', { title: 'Search Results Rivers' });
});

module.exports = router;
