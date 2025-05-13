let express = require("express");
let connection = require("../dbconfig/dbconnect");
let treatmentRouting = express.Router();

treatmentRouting.post("/treatment", (req, res) => {
  const { id, tname, tdesc } = req.body;
  connection.query(
    `insert into treatment (id,tname,tdesc) values('${id}','${tname}','${tdesc}')`,
    (err, data) => {
      if (err) throw err;
      res.send(data);
    }
  );
});

treatmentRouting.get("/treatment", (req, res) => {
  connection.query(`select * from treatment`, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

treatmentRouting.get("/treatment/:tid", (req, res) => {
  const tid = req.params.tid;
  connection.query(`select * from treatment where id=${tid}`, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

treatmentRouting.delete("/treatment/:tid", (req, res) => {
  const tid = req.params.tid;
  connection.query(`delete from treatment where id=${tid}`, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

treatmentRouting.put("/treatment/:tid", (req, res) => {
  const { id, tname, tdesc } = req.body;
  const tid = req.params.tid;
  connection.query(
    `update treatment set tname='${tname}', tdesc='${tdesc}' where id=${tid}`,
    (err, data) => {
      if (err) throw err;
      res.send(data);
    }
  );
});

module.exports = treatmentRouting;
