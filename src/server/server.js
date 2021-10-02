const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.static(path.join(__dirname, '../../build')))


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
});

app.post("/sendMessage", async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        name: "haochengli.com",
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });
    
      console.log("at least got a mesg");
      // send mail with defined transport object
      transporter.sendMail({
        from: 'foo@example.com', // sender address
        to: "daniel.hc.li@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      }, function(err, info) {
          let emailMessage;
        if(err){
            emailMessage = "there was an error :-(, and it was this: " + err.message;
        }else{
            emailMessage = "Message sent: " + info.response;
        }
        console.log(emailMessage);
      });
    res.status(200).send();
});

app.listen(3000);

console.log("app listening on port 3000");