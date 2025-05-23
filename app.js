let express = require("express");
require("./dbconfig/dbconfig");
let cors = require("cors");

const treatmentRouting = require("./routing/treatmentRouting");
const offerRouting = require("./routing/offerRouting");
const contactusRouting = require("./routing/contactusRouting");
const doctorRouting = require("./routing/doctorRouting");

let app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is live 🚀");
});


app.use("/", treatmentRouting);
app.use("/", offerRouting);
app.use("/", contactusRouting);
app.use("/", doctorRouting);

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`));
