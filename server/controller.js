var mongoose = require('mongoose');


module.export.login = function(req, res) {
    var email = req.body.data;
    console.log('Hello controller>>>>>>>>>>>>', email);
};
