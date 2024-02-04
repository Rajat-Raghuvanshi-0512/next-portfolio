import emailjs from '@emailjs/browser';

const sendMail = async (name: string, email: string, message: string) => {
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: name,
        to_name: 'Rajat',
        from_email: email,
        to_email: process.env.NEXT_PUBLIC_EMAIL_ID,
        message: message,
      },
      { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
    );
    alert('Thanks for connecting.');
  } catch (e) {
    console.log(e);
    alert('Error in sending email, Please try again.');
  }
};

export default sendMail;
