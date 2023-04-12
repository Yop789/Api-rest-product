import { transporter } from "../config/gmailTrasporter";
const fs = require('fs')


export const enviarEmailCodigo = (codigo, email) => {
  const htmlContent = fs.readFileSync("src/EnviarGmail/gmaiCode.html", "utf8");
  const emailHtml = htmlContent.replace(/{{codigo}}/g, codigo).replace(/{{email}}/g, email);
  console.log("Email a Administrador");
  transporter.sendMail(
    {
      from: '"Dofest" <davidenriquelopezjuarez08@gmail.com>', // sender address
      to: ""+email, // list of receivers
      subject: "Notificasion de codigo", // Subject line
      html: emailHtml, // html body "<h1 >Codigo</h1><h2 >Codigo dofest  DO-" + codigo + "</h2>"
    },
    function (error, info) {
      if (error) {
      } else {
        
      }
    }
  );
  console.log(codigo);
};
export const enviarEmailOrder = (order, email) => {
  const htmlContent = fs.readFileSync("src\\EnviarGmail\\orderhtml.html", "utf8");
  const emailHtml = htmlContent.replace(/{{codigo}}/g, codigo).replace(/{{email}}/g, email);
  console.log("Email a Administrador");
  transporter.sendMail(
    {
      from: '"Frim" <davidenriquelopezjuarez08@gmail.com>', // sender address
      to: ""+email, // list of receivers
      subject: "Notificasion de nueva orden", // Subject line
      html: emailHtml, // html body "<h1 >Codigo</h1><h2 >Codigo dofest  DO-" + codigo + "</h2>"
    },
    function (error, info) {
      if (error) {
      } else {
        
      }
    }
  );
  console.log(codigo);
};