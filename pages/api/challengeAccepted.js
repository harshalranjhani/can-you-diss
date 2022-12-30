// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  require("dotenv").config();

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "yelpcamp.alerts@gmail.com",
      pass: process.env.APP_PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: "yelpcamp.alerts@gmail.com",
    to: req.body.email,
    subject: `ITS ONNN! ${req.body.challengeAcceptor} has accepted your challenge!`,
    text: `Hey ${req.body.email}! This is to inform you that ${req.body.challengeAcceptor} has accepted your challenge for a rap battle. The battle has begun. Now, only the votes will decide\n\n\n\nTheir caption to you: ${req.body.message}`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
