const URL = "mongodb+srv://vhronsz:password_ryansanjaya_dbtest@clusterbetest.xecjqtn.mongodb.net/?retryWrites=true&w=majority&appName=clusterBeTest`";

var express = require('express');
var router = express.Router();
var mongoDb = require("../database/connection");

router.get("/get", async function (req, res, next) {
    let conn;
    try {
        conn = await mongoDb.connect(URL);
        let db = conn.db("db_ryansanjaya_betest");
        let collection = db.collection("users");
        let data = await collection.find().toArray();
        res.json({
          message: "Get User Data",
          data: data
        });
      } catch(e) {
        console.error(e);
      }
});

router.post("/add", function(req, res, next){

});
module.exports = router;
