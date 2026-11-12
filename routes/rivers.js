
var express = require('express');
var router = express.Router();

const river_controllers = require('../controllers/river');

// GET all rivers from MongoDB
router.get('/', river_controllers.river_view_all_Page);

module.exports = router;
