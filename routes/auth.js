var express = require('express');
var jwt = require("jsonwebtoken");

var router = express.Router();

router.get('/generate-token', function(req, res, next) {
    const name = req.body.name;
    const secret = "secret";
    const token = jwt.sign({data: name},secret, {expiresIn: "1h"});
    return res.json({
        "access-token": token
    });
});

module.exports = router;
