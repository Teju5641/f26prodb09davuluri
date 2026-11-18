
var express = require('express');
var router = express.Router();

const river_controllers = require('../controllers/river');

// GET all rivers from MongoDB
router.get('/', river_controllers.river_view_all_Page);

// GET detail page for one river
router.get('/detail', river_controllers.river_view_one_Page);

 // GET create River page
router.get('/create', river_controllers.river_create_Page);

 // GET update page for a River
router.get('/update', river_controllers.river_update_Page);


module.exports = router;
