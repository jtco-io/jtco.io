export async function handler(event, context) {
  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.CONTACT_FORM_MAIL_EMAIL,
      serviceClient: process.env.CONTACT_FORM_MAIL_ID,
      privateKey: process.env.CONTACT_FORM_MAIL_KEY
    }
  });

  var mailOptions = {
    from: process.env.CONTACT_FORM_MAIL_EMAIL,
    to: process.env.CONTACT_FORM_MAIL_EMAIL,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  console.log(`sending message to ${process.env.CONTACT_FORM_MAIL_EMAIL}`)
  console.log(`sending message to ${process.env.CONTACT_FORM_MAIL_ID}`)
  console.log(`sending message to ${process.env.CONTACT_FORM_MAIL_KEY}`)

  try {
    let info = await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: `Successfully sent email ${info.response}`
      })
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}
