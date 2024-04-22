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
      type: "success",
      message: "Get User Data",
      data: data
    });
  } catch (err) {
    console.error(err);
    res.json({
      type: "error",
      message: err
    })
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

    await collection.insertOne({
      userName: userName,
      identityNumber: identityNumber,
      emailAddress: emailAddress,
      accountNumber: accountNumber
    });

    res.json({
      type: "success",
      message: "Success Add User",
      data: {
        userName: userName,
        identityNumber: identityNumber,
        emailAddress: emailAddress,
        accountNumber: accountNumber
      }
    });
  } catch (err) {
    console.error(err);
    res.json({
      type: "error",
      message: err
    })
  }
});

router.put("/update", function (req, res, next) {
  const userToUpdate = req.body.userToUpdate;
  const updateData = req.updateData;

  try {

  } catch (err) {
    console.error(err);
    res.json({
      type: "error",
      message: err
    })
  }

});

router.delete("/delete", function (req, res, next) {
  const userToDelete = req.body.userToDelete;

  try {

  } catch (err) {
    console.error(err);
    res.json({
      type: "error",
      message: err
    })
  }

});

module.exports = router;
