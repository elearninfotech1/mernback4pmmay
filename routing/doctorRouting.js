let express = require("express");
let Doctor = require("../model/doctorModel");
let doctorRouting = express.Router();

doctorRouting.post("/doctor", async (req, res) => {
  try {
    let doctor = new Doctor(req.body);
    let result = await doctor.save();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

doctorRouting.get("/doctor/:tname", async (req, res) => {
  try {
    let doctor = await Doctor.find({ tname: req.params.tname });
    res.send(doctor);
  } catch (err) {
    console.log(err);
  }
});
/*
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
module.exports = doctorRouting;
