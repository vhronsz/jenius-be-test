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

router.get("/get/{id}");

router.post("/add", async function (req, res, next) {
  //Validasi ga boleh sama
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

router.post("/bulk-add", async function (req, res, next) {
  //Validasi ga boleh sama
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

router.put("/update", async function (req, res, next) {
  //Validasi not found, ga boleh sama dengan user laen
  const userToUpdate = req.body.userToUpdate;
  const updateData = req.updateData;
  let conn;
  try {
    conn = await mongoDb.connect(URL);
    let db = conn.db("db_ryansanjaya_betest");
    let collection = db.collection("users");
    collection.updateOne({userName: userToUpdate}, {
      updateData
    });
    res.json({
      type: "success",
      message: "success update user",
      data: {
        
      }
    })
  } catch (err) {
    console.error(err);
    res.json({
      type: "error",
      message: err
    })
  }

});

router.delete("/delete", async function (req, res, next) {
  const userToDelete = req.body.userToDelete;

  try {
    conn = await mongoDb.connect(URL);
    let db = conn.db("db_ryansanjaya_betest");
    let collection = db.collection("users");
    collection.deleteOne({userName: userToDelete});
    res.json({
      type: "success",
      message: "success delete user",
      data: {  
        userName: userToDelete
      }
    })
  } catch (err) {
    console.error(err);
    res.json({
      type: "error",
      message: err
    })
  }

});

router.delete("/bulk-delete", async function (req, res, next) {
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
