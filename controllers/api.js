// API for our resources
exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"rivers", ');
    res.write('"verbs":["GET","POST","PUT","DELETE"]');
    res.write('}');
    res.write(']');
    res.send();
};