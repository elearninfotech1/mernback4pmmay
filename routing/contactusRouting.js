let express = require("express");
let nodemailer = require("nodemailer");
let contactusRouting = express.Router();

contactusRouting.post("/contactus", async (req, res) => {
  const { name, phone, email, subject, message } = req.body;
  try {
    let transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "elearninfotech1@gmail.com",
        pass: "nadp uxna suap vdsv",
      },
    });

    let mailOptions = {
      from: "elearninfotech1@gmail.com",
      to: "enuttech@gmail.com",
      subject: "From Contact Us Form",
      text: `
      Name is : ${name}
      Phone is : ${phone}
      Email is : ${email}
      subject is : ${subject}
      Message is : ${message}
      `,
    };

    transport.sendMail(mailOptions, (err, info) => {
      if (err) throw err;
      res.send("mail send succ..");
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = contactusRouting;
