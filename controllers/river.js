var River = require('../models/river');

// List of all Rivers

// List of all Rivers
exports.river_list = async function(req, res) {
    try {
        const theRivers = await River.find();
        res.send(theRivers);
    }
    catch(err) {
        res.status(500);
        res.send({ error: err.message });
    }
};


// Details of a specific River
exports.river_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: River detail: ' + req.params.id);
};

// Create a River using POST

 // Create a River using POST
 exports.river_create_post = async function(req, res) {
     console.log(req.body);

     let document = new River();

     document.river_name = req.body.river_name;
     document.country = req.body.country;
     document.length_km = req.body.length_km;

     try {
         let result = await document.save();
         res.send(result);
     }
     catch(err) {
         res.status(500);
         res.send({ error: err.message });
     }
 };


// Delete a River
exports.river_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: River delete DELETE ' + req.params.id);
};

// Update a River
exports.river_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: River update PUT ' + req.params.id);
};


// VIEWS

// Handle a show all view
exports.river_view_all_Page = async function(req, res) {
    try {
        const theRivers = await River.find();

        res.render('rivers', {
            title: 'River Search Results',
            results: theRivers
        });
    }
    catch(err) {
        res.status(500);
        res.send({ error: err.message });
    }
};
