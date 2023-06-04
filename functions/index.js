const functions = require("firebase-functions");
const sendgrid = require("@sendgrid/mail");
const cors = require("cors");

sendgrid.setApiKey(functions.config().sendgrid.api_key);

const corsHandler = cors({ origin: true });

exports.sendEmailHttps = functions.https.onRequest((request, response) => {
  corsHandler(request, response, async () => {
    const { email, name, message } = request.body;
    const yourEmail = "andrewellend@gmail.com";

    const emailData = {
      to: yourEmail,
      from: email,
      subject: `New message from ${name}`,
      text: message,
    };

    try {
      await sendgrid.send(emailData);
      response.status(200).send({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      response.status(500).send({ success: false });
    }
  });
});