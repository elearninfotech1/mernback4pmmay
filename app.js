let express = require("express");
require("./dbconfig/dbconfig");
let cors = require("cors");
const studentRouting = require("./routing/studentRouting");
const treatmentRouting = require("./routing/treatmentRouting");

let app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use("/", studentRouting);
app.use("/", treatmentRouting);

app.get("/", (req, res) => {
  res.send("✅ API is live and working!");
});

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`));
