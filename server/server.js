import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ✅ API endpoint to handle contact form submission
app.post("/api/send-email", async (req, res) => {
  const { firstname, lastname, email, message, phonenumber } = req.body;

  if (!firstname || !lastname || !email || !message) {
    return res.status(400).send("Missing required fields");
  }

  try {
    // ✅ Setup Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'astleseaexports@gmail.com', // your gmail id
        pass: 'yivuqibqdiwevasu', // your gmail app password
      },
    });

    // ✅ Compose the email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // your receiving email
      subject: `New Contact Form Submission from ${firstname} ${lastname}`,
      text: `
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phonenumber}
        Message: ${message}
      `,
    };

    // ✅ Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
