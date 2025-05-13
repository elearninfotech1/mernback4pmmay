let express = require("express");
let Treatment = require("../model/treatmentModel");
let treatmentRouting = express.Router();

treatmentRouting.post("/treatment", async (req, res) => {
  try {
    let treatment = new Treatment(req.body);
    let result = await treatment.save();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

treatmentRouting.get("/treatment", async (req, res) => {
  try {
    let treatment = await Treatment.find();
    res.send(treatment);
  } catch (err) {
    console.log(err);
  }
});

treatmentRouting.get("/treatment/:tid", async (req, res) => {
  try {
    let treatment = await Treatment.findOne({ _id: req.params.tid });
    res.send(treatment);
  } catch (err) {
    console.log(err);
  }
});

treatmentRouting.delete("/treatment/:tid", async (req, res) => {
  try {
    let treatment = await Treatment.deleteOne({ _id: req.params.tid });
    res.send(treatment);
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
module.exports = treatmentRouting;
