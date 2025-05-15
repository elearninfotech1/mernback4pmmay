let express = require("express");
require("./dbconfig/dbconfig");
let cors = require("cors");

const studentRouting = require("./routing/studentRouting");
// const signupRouting = require("./routing/signupRouting");
const treatmentRouting = require("./routing/treatmentRouting");
const offerRouting = require("./routing/offerRouting");
const appointmentRouting = require("./routing/appointmentRouting");
const contactusRouting = require("./routing/contactusRouting");
const doctorRouting = require("./routing/doctorRouting");

let app = express();
const PORT = process.env.PORT || 3000; // ✅ ADD THIS LINE

app.use(express.json());
app.use(cors());

app.use("/", studentRouting);
// app.use("/", signupRouting);
app.use("/", treatmentRouting);
app.use("/", offerRouting);
app.use("/", appointmentRouting);
app.use("/", contactusRouting);
app.use("/", doctorRouting);

// Optional: catch-all 404 for unknown routes
app.use((req, res) => {
  res.status(404).send("404 Not Found: " + req.originalUrl);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

