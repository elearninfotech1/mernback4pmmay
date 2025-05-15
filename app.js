const express = require("express");
require("./dbconfig/dbconfig");
const cors = require("cors");

const studentRouting = require("./routing/studentRouting");
// const signupRouting = require("./routing/signupRouting");
const treatmentRouting = require("./routing/treatmentRouting");
const offerRouting = require("./routing/offerRouting");
const appointmentRouting = require("./routing/appointmentRouting");
const contactusRouting = require("./routing/contactusRouting");
const doctorRouting = require("./routing/doctorRouting");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// ✅ Add this guaranteed working root route
app.get('/', (req, res) => {
  res.send('✅ API is live — root path working!');
});

app.use("/", studentRouting);
// app.use("/", signupRouting);
app.use("/", treatmentRouting);
app.use("/", offerRouting);
app.use("/", appointmentRouting);
app.use("/", contactusRouting);
app.use("/", doctorRouting);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
