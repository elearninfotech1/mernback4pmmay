let express = require("express");
let Student = require("../model/studentModel");
let studentRouting = express.Router();

studentRouting.post("/student", async (req, res) => {
  try {
    let student = new Student(req.body);
    let result = await student.save();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

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

module.exports = studentRouting;
