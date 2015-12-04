var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


exports.sendMail=function(option, callback){
  var mailer = nodemailer.createTransport(smtpTransport({
    service: 'mailgun',
    auth: {
        user: 'no-reply@mg.rpdiv.com',
        pass: 'CReP7fu8EPra'
    }
  }));
  console.log('connected');
  mailer.sendMail(option, callback);
}