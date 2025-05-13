let express = require("express");
let cors = require("cors");
const treatmentRouting = require("./routing/treatmentRoutingsqlex");
const signupRoutingEx = require("./routing/signupRoutingEx");

let app = express();

app.use(express.json());
app.use(cors());

app.use("/", treatmentRouting);
app.use("/", signupRoutingEx);

app.listen(4000, () => console.log("Server is started on 4000 port"));
