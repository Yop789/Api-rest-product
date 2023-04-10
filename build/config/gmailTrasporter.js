"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transporter = void 0;
var nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  // true for 465, false for other ports
  auth: {
    user: 'davidenriquelopezjuarez08@gmail.com',
    // generated ethereal user
    pass: 'kxhfdyerinbcdjzm' // generated ethereal password
  }
});
exports.transporter = transporter;
transporter.verify().then(function () {
  console.log('Verified');
});