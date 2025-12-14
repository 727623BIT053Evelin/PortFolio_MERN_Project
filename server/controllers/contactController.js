const Contact = require('../models/Contact');

const nodemailer = require('nodemailer');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res) => {
    try {
        console.log('Contact form submission received:', req.body);

        // Validate required fields
        const { name, email, subject, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields: name, email, and message are required',
            });
        }

        // Create contact in database
        const contact = await Contact.create(req.body);
        console.log('Contact saved to database:', contact._id);

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to yourself
            subject: `New Portfolio Contact: ${req.body.subject}`,
            html: `
                <h3>New Contact Message</h3>
                <p><strong>Name:</strong> ${req.body.name}</p>
                <p><strong>Email:</strong> ${req.body.email}</p>
                <p><strong>Subject:</strong> ${req.body.subject}</p>
                <p><strong>Message:</strong></p>
                <p>${req.body.message}</p>
            `,
        };

        // Send email
        try {
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
        } catch (emailError) {
            console.error('Email sending failed, but contact saved:', emailError.message);
            // Don't fail the request if email fails, contact is already saved
        }

        res.status(201).json({
            success: true,
            message: 'Message sent successfully!',
            data: contact,
        });
    } catch (error) {
        console.error('Contact submission error:', error);

        // Handle validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                error: 'Validation failed: ' + messages.join(', '),
            });
        }

        res.status(400).json({
            success: false,
            error: error.message || 'Failed to submit contact form',
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
