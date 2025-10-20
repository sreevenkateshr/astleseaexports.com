import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Root route for testing
app.get("/", (req, res) => {
  res.send("Backend is running! Use POST /api/send-email to send emails.");
});

// ✅ Contact form POST route
app.post("/api/send-email", async (req, res) => {
  try {
    // Trim inputs
    const firstname = req.body.firstname?.trim();
    const lastname = req.body.lastname?.trim() || "";
    const email = req.body.email?.trim();
    const phonenumber = req.body.phonenumber?.trim() || "";
    const message = req.body.message?.trim();

    // Validation
    if (!firstname || !email || !message) {
      return res.status(400).json({ error: "Firstname, email, and message are required." });
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${firstname} ${lastname}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${firstname} ${lastname}`,
      text: `Name: ${firstname} ${lastname}
Email: ${email}
Phone: ${phonenumber}
Message: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
