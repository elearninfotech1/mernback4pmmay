let express = require("express");
let connection = require("../dbconfig/dbconnect");
let signupRoutingEx = express.Router();

signupRoutingEx.post("/signup", async (req, res) => {
  const { id, name, email, password, phone, address } = req.body;
  connection.query(
    `insert into signup (id,name,email, password, phone, address) values('${id}','${name}','${email}','${password}','${phone}','${address}')`,
    (err, data) => {
      if (err) throw err;
      res.send(data);
    }
  );
});

signupRoutingEx.post("/login", async (req, res) => {
  const { email, password } = req.body;
  connection.query(
    `select * from signup where email='${email}' and password='${password}'`,
    (err, data) => {
      if (err) throw err;
      res.send(data);
    }
  );
});

module.exports = signupRoutingEx;
