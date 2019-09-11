export async function handler(event, context) {
  var nodemailer = require('nodemailer');
  var sgTransport = require('nodemailer-sendgrid-transport');

  var transporter = nodemailer.createTransport(
    sgTransport(
      {
          auth: {
                api_user: process.env.SENDGRID_USERNAME,
                api_key: process.env.SENDGRID_PASSWORD
          }
      }
    )
  );

  const body = JSON.parse(event.body)

  // process.env.CONTACT_FORM_MAIL_ID
  var mailOptions = {
    from: body.email,
    to: "contact@jtco.io",
    subject: 'Contact Form Submission: jtco.io',
    text: `\nFrom: ${body.name}: ${body.email}\n\n\n${body.projectDescription}`
  };

  try {
    console.log("ATTEMPTING SEND")
    let info = await transporter.sendMail(mailOptions);
    console.log("info")
    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: `Successfully sent email ${info.response}`
      })
    };
  } catch (err) {
    console.log('CAUGHT ERROR', err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}


// http://localhost:9000/.netlify/functions/
