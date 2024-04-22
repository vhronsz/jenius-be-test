var express = require('express');
var jwt = require("jsonwebtoken");

var router = express.Router();

router.post('/generate-token', function(req, res, next) {
    const userName = req.body.userName;
    const secret = "secret";
    const token = jwt.sign({data: userName},secret, {expiresIn: "1h"});
    return res.json({
        "access-token": token
    });
});

module.exports = router;
