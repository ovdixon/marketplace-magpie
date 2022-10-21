require('dotenv').config();

const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.sendgrid_api_key)

async function send(newItems){
  const msg = {
    to: process.env.recipient,
    from: process.env.sender,
    cc: process.env.sender,
    subject: 'Marketplace Magpie',
    templateId: process.env.sendgrid_template_id,
    dynamicTemplateData: newItems
  }
  await sgMail
    .send(msg)
    .then(() => {
      console.log('New email sent');
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = {send}

