// importar nodemailer
const nodemailer = require("nodemailer");
require("dotenv").config();

// crear el transporter
const transporter = nodemailer.createTransport({ // admite dos parametros
  host: "smtp.gmail.com", // send mail transfer protocol
  port: 465, // por gmail
  secure: true,
  auth: { // crear autenticacion doble en gogole y en contraseñas de applicacion crear una para mi app
    user: process.env.G_USER,
    pass: process.env.G_PASSWORD,
  },
});

// exportar el transporter
module.exports = transporter;
