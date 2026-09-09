require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'sadhanachaudhary421@gmail.com',
    replyTo: email,
    subject: `New Portfolio Message from ${name}`,
    text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; max-w-lg; border: 1px solid #eaeaea; border-radius: 8px;">
        <h3 style="color: #4f46e5; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">New Portfolio Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <div style="margin-top: 20px; padding: 15px; background: #f9fafb; border-radius: 8px; font-style: italic;">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully from ${name} (${email})`);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message. Please check server configuration.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend Server is running on http://localhost:${PORT}`);
});
