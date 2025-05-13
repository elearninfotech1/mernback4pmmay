let mysql = require("mysql");

let connetion = mysql.createConnection({
  host: "localhost",
  port: 3308,
  user: "root",
  password: "123456",
  database: "db4pmmay",
});

connetion.connect((err, con) => {
  if (err) throw err;
  //console.log("connected");
});

module.exports = connetion;
