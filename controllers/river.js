
var River = require('../models/river');


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

 // Handle a show one River view with id from query
exports.river_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id);

    try {
        let result = await River.findById(req.query.id);

        if (!result) {
            return res.status(404).render('riverdetail', {
                title: 'River Not Found',
                toShow: null
            });
        }

        res.render('riverdetail', {
            title: 'River Detail',
            toShow: result
        });
    }
    catch(err) {
        res.status(500).send({ error: err.message });
    }
};

 // Handle building the view for creating a River
exports.river_create_Page = function(req, res) {
    console.log("create view");

    try {
        res.render('rivercreate', {
            title: 'River Create'
        });
    }
    catch(err) {
        res.status(500).send({ error: err.message });
    }
};


 // Handle building the view for updating a River
exports.river_update_Page = async function(req, res) {
    console.log("update view for river " + req.query.id);

    try {
        let result = await River.findById(req.query.id);

        if (!result) {
            return res.status(404).render('riverupdate', {
                title: 'River Not Found',
                toShow: null
            });
        }

        res.render('riverupdate', {
            title: 'River Update',
            toShow: result
        });
    }
    catch(err) {
        res.status(500).send({ error: err.message });
    }
};

 // Handle building the view for deleting a River
exports.river_delete_Page = async function(req, res) {
    console.log("Delete view for river " + req.query.id);

    try {
        let result = await River.findById(req.query.id);

        res.render('riverdelete', {
            title: 'River Delete',
            toShow: result
        });
    }
    catch(err) {
        res.status(500).send({ error: err.message });
    }
};
