
var River = require('../models/river');

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
exports.river_detail = async function(req, res) {
    console.log("detail " + req.params.id);

    try {
        let result = await River.findById(req.params.id);

        if (!result) {
            return res.status(404).send({
                error: "River not found"
            });
        }

        res.send(result);
    }
    catch(err) {
        res.status(500);
        res.send({ error: err.message });
    }
};


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
exports.river_delete = async function(req, res) {
    console.log("delete " + req.params.id);

    try {
        let result = await River.findByIdAndDelete(req.params.id);

        if (!result) {
            return res.status(404).send({
                error: "River not found"
            });
        }

        console.log("Removed " + result);
        res.send(result);
    }
    catch(err) {
        res.status(500);
        res.send({ error: err.message });
    }
};


// Update a River using PUT
exports.river_update_put = async function(req, res) {
    console.log("update on id " + req.params.id);
    console.log(req.body);

    try {
        let toUpdate = await River.findById(req.params.id);

        if (!toUpdate) {
            return res.status(404).send({
                error: "River not found"
            });
        }

        // Update properties
        if(req.body.river_name)
            toUpdate.river_name = req.body.river_name;

        if(req.body.country)
            toUpdate.country = req.body.country;

        if(req.body.length_km !== undefined)
            toUpdate.length_km = req.body.length_km;

        let result = await toUpdate.save();

        console.log("Success " + result);
        res.send(result);
    }
    catch(err) {
        res.status(500);
        res.send({ error: err.message });
    }
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
