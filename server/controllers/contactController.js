const Contact = require('../models/Contact');

// Temporarily disabled email functionality due to Render free tier SMTP restrictions
// const nodemailer = require('nodemailer');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);

        // Email functionality temporarily disabled due to Render free tier SMTP port restrictions
        // Uncomment below when using paid hosting or third-party email service (e.g., Resend, SendGrid)

        // // Create transporter
        // const transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: process.env.EMAIL_USER,
        //         pass: process.env.EMAIL_PASS,
        //     },
        // });

        // // Email options
        // const mailOptions = {
        //     from: process.env.EMAIL_USER,
        //     to: process.env.EMAIL_USER, // Send to yourself
        //     subject: `New Portfolio Contact: ${req.body.subject}`,
        //     html: `
        //         <h3>New Contact Message</h3>
        //         <p><strong>Name:</strong> ${req.body.name}</p>
        //         <p><strong>Email:</strong> ${req.body.email}</p>
        //         <p><strong>Subject:</strong> ${req.body.subject}</p>
        //         <p><strong>Message:</strong></p>
        //         <p>${req.body.message}</p>
        //     `,
        // };

        // // Send email
        // await transporter.sendMail(mailOptions);

        res.status(201).json({
            success: true,
            message: 'Message sent successfully!',
            data: contact,
        });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private (for admin)
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
};

module.exports = {
    submitContact,
    getContacts,
};
