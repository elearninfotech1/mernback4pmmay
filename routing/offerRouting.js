let express = require("express");
let Offer = require("../model/offerModel");
let offerRouting = express.Router();

offerRouting.post("/offers", async (req, res) => {
  try {
    let offer = new Offer(req.body);
    let result = await offer.save();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

offerRouting.get("/offers", async (req, res) => {
  try {
    let offer = await Offer.find();
    res.send(offer);
  } catch (err) {
    console.log(err);
  }
});
/*
studentRouting.get("/student", async (req, res) => {
  try {
    let student = await Student.find();
    res.send(student);
  } catch (err) {
    console.log(err);
  }
});

studentRouting.delete("/student/:sid", async (req, res) => {
  try {
    let student = await Student.deleteOne({ _id: req.params.sid });
    res.send(student);
  } catch (err) {
    console.log(err);
  }
});

studentRouting.get("/student/:sid", async (req, res) => {
  try {
    let student = await Student.findOne({ _id: req.params.sid });
    res.send(student);
  } catch (err) {
    console.log(err);
  }
});

studentRouting.put("/student/:sid", async (req, res) => {
  try {
    let student = await Student.updateOne(
      { _id: req.params.sid },
      { $set: req.body }
    );
    res.send(student);
  } catch (err) {
    console.log(err);
  }
});
*/
module.exports = offerRouting;
