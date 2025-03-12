
import { htmlTemplate } from '@/utils';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { email, subject, phone_number, message, interest } = await req.json();


        // Set up nodemailer with Brevo SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST, // Brevo's SMTP host
            port: 587, // Brevo's SMTP port
            secure: false, // Use TLS
            auth: {
                user: process.env.BREVO_SMTP_USER, // SMTP username from environment
                pass: process.env.BREVO_SMTP_PASSWORD, // SMTP password from environment
            },
        });

        // Define email options
        const mailOptions = {
            from: email, // Sender's email address
            to: process.env.RECIPIENT_EMAIL, // Recipient's email address
            subject, // Email subject
            text: `My Email Address is ${email}. Nice to meet you Ali Usman.`, // Plain text version of the email
            html: htmlTemplate(email, subject, phone_number, message, interest)
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);

        // Return success response
        return new Response(
            JSON.stringify({ message: 'Email sent successfully', info }),
            { status: 200 }
        );
    } catch (error: unknown) {
        // Handle errors gracefully
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        console.error('Error sending email:', errorMessage);
        return new Response(
            JSON.stringify({ message: 'Failed to send email', error: errorMessage }),
            { status: 500 }
        );
    }
}
