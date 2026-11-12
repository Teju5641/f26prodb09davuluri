var River = require('../models/river');

// List of all Rivers
exports.river_list = function(req, res) {
    res.send('NOT IMPLEMENTED: River list');
};

// Details of a specific River
exports.river_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: River detail: ' + req.params.id);
};

// Create a River using POST
exports.river_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: River create POST');
};

// Delete a River
exports.river_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: River delete DELETE ' + req.params.id);
};

// Update a River
exports.river_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: River update PUT ' + req.params.id);
};