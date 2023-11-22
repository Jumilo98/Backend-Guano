import nodemailer from "nodemailer";
import * as dotenv from 'dotenv'; 

dotenv.config();

const createTrans = () => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secureConnection: false,
  });

  return transporter;
};

export const sendEmail = async (asunto,texto,email) => {
  
  const transporter = createTrans();

  const mensaje  = await transporter.sendMail({
    from: '"GADM GUANO" <Lacteos@GADMGuano.com>', // sender address
    to: `${email}`, // list of receivers
    subject: `${asunto}`, // Subject line
    text: `${texto}`, // plain text body
    html: `<b> ${texto}</b>`, // html body
  });
  return mensaje;
};
