let express = require("express");
let Appointment = require("../model/bookappointmentModel");
let appointmentRouting = express.Router();

appointmentRouting.post("/appointment", async (req, res) => {
  try {
    let appointment = new Appointment(req.body);
    let result = await appointment.save();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

appointmentRouting.get("/appointment", async (req, res) => {
  try {
    let appointment = await Appointment.find();
    res.send(appointment);
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
module.exports = appointmentRouting;
