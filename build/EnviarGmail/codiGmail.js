"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enviarEmailOrder = exports.enviarEmailCodigo = void 0;
var _gmailTrasporter = require("../config/gmailTrasporter");
var fs = require('fs');
var enviarEmailCodigo = function enviarEmailCodigo(codigo, email) {
  var htmlContent = fs.readFileSync("EnviarGmail/gmaiCode.html", "utf8");
  var emailHtml = htmlContent.replace(/{{codigo}}/g, codigo).replace(/{{email}}/g, email);
  console.log("Email a Administrador");
  _gmailTrasporter.transporter.sendMail({
    from: '"Dofest" <davidenriquelopezjuarez08@gmail.com>',
    // sender address
    to: "" + email,
    // list of receivers
    subject: "Notificasion de codigo",
    // Subject line
    html: emailHtml // html body "<h1 >Codigo</h1><h2 >Codigo dofest  DO-" + codigo + "</h2>"
  }, function (error, info) {
    if (error) {} else {}
  });
  console.log(codigo);
};
exports.enviarEmailCodigo = enviarEmailCodigo;
var enviarEmailOrder = function enviarEmailOrder(order, email) {
  var htmlContent = fs.readFileSync("src\\EnviarGmail\\orderhtml.html", "utf8");
  var emailHtml = htmlContent.replace(/{{codigo}}/g, codigo).replace(/{{email}}/g, email);
  console.log("Email a Administrador");
  _gmailTrasporter.transporter.sendMail({
    from: '"Frim" <davidenriquelopezjuarez08@gmail.com>',
    // sender address
    to: "" + email,
    // list of receivers
    subject: "Notificasion de nueva orden",
    // Subject line
    html: emailHtml // html body "<h1 >Codigo</h1><h2 >Codigo dofest  DO-" + codigo + "</h2>"
  }, function (error, info) {
    if (error) {} else {}
  });
  console.log(codigo);
};
exports.enviarEmailOrder = enviarEmailOrder;