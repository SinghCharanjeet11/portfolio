export async function sendEmail(data: {
  name: string;
  email: string;
  message: string;
}): Promise<void> {
  // TODO: Integrate with your email service (SendGrid, Mailgun, etc.)
  console.log('Email would be sent:', data);
  
  // Example with SendGrid:
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // await sgMail.send({
  //   to: process.env.TO_EMAIL,
  //   from: process.env.FROM_EMAIL,
  //   subject: `New message from ${data.name}`,
  //   text: data.message,
  //   html: `<p>${data.message}</p>`,
  // });
}
