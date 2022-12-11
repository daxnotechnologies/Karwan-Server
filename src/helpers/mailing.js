const nodemailer = require("nodemailer");
require("dotenv").config();

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ukdaxno@gmail.com",
    pass: "csxxaxhfvovvubcd",
  },
  tls: {
    rejectUnauthorized: false,
  },
});



module.exports.resetPasswordMail = (email, token) => {
  var mailOptions = {
    from: "cacfyp@gmail.com",
    to: email,
    subject: "Reset Password",
    html: `<p>You requested for reset password, kindly use this <a href="http://localhost:3000/ResetPassword/${token}">link</a> to reset your password</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports.reportMail = (email, path) => {
  console.log("path",path)
  var mailOptions = {
    from: "ukdaxno@gmail.com",
    to: email,
    subject: "Report Email",
     attachments: [{
      path: path,
      contentType: 'application/pdf'
    }],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};


