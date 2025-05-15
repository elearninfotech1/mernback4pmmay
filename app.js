let express = require("express");
require("./dbconfig/dbconfig");
let cors = require("cors");
const studentRouting = require("./routing/studentRouting");
//const signupRouting = require("./routing/signupRouting");
const treatmentRouting = require("./routing/treatmentRouting");
const offerRouting = require("./routing/offerRouting");
const appointmentRouting = require("./routing/appointmentRouting");
const contactusRouting = require("./routing/contactusRouting");
const doctorRouting = require("./routing/doctorRouting");
let app = express();

app.use(express.json());
app.use(cors());
app.use("/", studentRouting);
//app.use("/", signupRouting);
app.use("/", treatmentRouting);
app.use("/", offerRouting);
app.use("/", appointmentRouting);
app.use("/", contactusRouting);
app.use("/", doctorRouting);

app.listen(4000, () => console.log("Server is started on 4000 port"));
