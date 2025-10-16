const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/send-email", async (req, res) => {
  const { firstname, lastname, email, message, phonenumber } = req.body;

  if (!firstname || !email || !message || !phonenumber) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user:'astleseaexports@gmail.com', // use env in vercel
        pass: 'yivuqibqdiwevasu', // not hardcoded
      },
    });

    let mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Message from Website",
      text: `Name: ${firstname} ${lastname}\nPhone: ${phonenumber}\nEmail: ${email}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

if (process.env.NODE_ENV !== "production") {
  app.listen(5000, () => console.log("Server running on http://localhost:5000"));
}

// ✅ This is important for Vercel
module.exports = app;
