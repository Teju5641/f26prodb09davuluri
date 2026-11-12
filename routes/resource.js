
var express = require('express');
var router = express.Router();

// Require controller modules
var api_controller = require('../controllers/api');
var river_controller = require('../controllers/river');

// API ROUTE

// GET resources base
router.get('/', api_controller.api);

// RIVER ROUTES

// POST request for creating a River
router.post('/rivers', river_controller.river_create_post);

// DELETE request to delete a River
router.delete('/rivers/:id', river_controller.river_delete);

// PUT request to update a River
router.put('/rivers/:id', river_controller.river_update_put);

// GET request for one River
router.get('/rivers/:id', river_controller.river_detail);

// GET request for list of all Rivers
router.get('/rivers', river_controller.river_list);

module.exports = router;
