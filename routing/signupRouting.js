let express = require("express");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let Signup = require("../model/signupModel");
const loginMiddleware = require("../middleware/loginMiddleware");
let signupRouting = express.Router();

signupRouting.post("/signup", async (req, res) => {
  try {
    let signup = new Signup({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      phone: req.body.phone,
      address: req.body.address,
    });
    let result = await signup.save();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

signupRouting.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let exists = await Signup.findOne({ email: email });
    if (!exists) {
      res.send("No User");
    } else if (!bcrypt.compareSync(password, exists.password)) {
      res.send("Invalid Password");
    } else {
      let payload = {
        user: {
          id: exists._id,
        },
      };
      jwt.sign(
        payload,
        "JSON123String",
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.send({ token });
        }
      );
    }
  } catch (err) {
    console.log(err);
  }
});

signupRouting.get("/admindashboard", loginMiddleware, async (req, res) => {
  res.send("Admin");
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
module.exports = signupRouting;
