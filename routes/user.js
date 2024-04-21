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
  } catch (e) {
    console.error(e);
  }
});

router.post("/add", async function (req, res, next) {
  const userName = req.body.userName ? req.body.userName : "";
  const identityNumber = req.body.identityNumber ? req.body.identityNumber : "";
  const emailAddress = req.body.emailAddress ? req.body.emailAddress : "";
  const accountNumber = req.body.accountNumber ? req.body.accountNumber : "";

  let conn;
  try {
    conn = await mongoDb.connect(URL);
    let db = conn.db("db_ryansanjaya_betest");
    let collection = db.collection("users");

    let data = await collection.insertOne({
      userName: userName,
      identityNumber: identityNumber,
      emailAddress: emailAddress,
      accountNumber: accountNumber
    });

    res.json({
      message: "Success Add User",
      data: {
        userName: userName,
        identityNumber: identityNumber,
        emailAddress: emailAddress,
        accountNumber: accountNumber
      }
    });
  } catch (e) {
    console.error(e);
  }
});

router.patch("/patch", function (req, res, next) {

});

module.exports = router;
