let jwt = require("jsonwebtoken");

let loginMiddleware = (req, res, next) => {
  let token = req.header("x-token");
  if (!token) {
    res.send("No Token");
  }
  let decode = jwt.verify(token, "JSON123String");
  req.user = decode.user;
  next();
};

module.exports = loginMiddleware;
