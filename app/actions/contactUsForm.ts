"use server";
import { Errors } from "@/utils";

export default async function contactUsForm(formData: FormData) {
    try {
        // Extract form values
        const email = formData.get("email") as string | null;
        const subject = formData.get("subject") as string | null;
        const phone_number = formData.get("phone_number") as string | null;
        const message = formData.get("message") as string | null;
        const interest = formData.getAll("interest") as string[];

        // Validation function
        const errors: Errors = {};

        // Email validation
        if (!email) {
            errors.email = "Email is required.";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            errors.email = "Invalid email format.";
        }

        // Subject validation
        if (!subject) {
            errors.subject = "Subject is required.";
        } else if (!/^[A-Za-z0-9]+(?: [A-Za-z0-9]+)*$/.test(subject.trim())) {
            errors.subject = "Subject must not contain consecutive spaces.";
        } else if (subject.trim().length <= 6) {
            errors.subject = "Subject must be more than 6 characters.";
        }

        // Phone number validation
        if (phone_number) {
            const sanitizedPhoneNumber = phone_number.replace(/\s+/g, ''); // Remove spaces
            if (!/^(?:\+92|0)\d{10}$/.test(sanitizedPhoneNumber)) {
                errors.phone_number =
                    "Phone number must start with +92 or 0 and be 11 digits long.";
            }
        }

        // Message validation
        if (!message) {
            errors.message = "Message is required.";
        } else if (/ {2,}/.test(message.trim())) {  // Check for consecutive spaces
            errors.message = "Message must not contain consecutive spaces.";
        } else if (message.trim().length < 10) {  // Check for minimum length
            errors.message = "Message must be at least 10 characters.";
        }


        // Interest validation
        if (interest.length === 0) {
            errors.interest = "Please select at least one interest.";
        }

        // Log errors or handle them
        if (Object.keys(errors).length > 0) {
            console.error("Validation errors:", errors);
            return { success: false, errors }; // Return errors for the frontend to handle
        }

        const formPayload = {
            email,
            subject,
            phone_number,
            message,
            interest,
        }

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const apiEndpoint = `${baseUrl}/api/send-message`;

        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formPayload),
        });

        const result = await response.json();

        if (response.ok) {
            return { success: true, message: "Message sending successfully!", data: result.data };
        } else {
            return { success: false, message: 'Failed to send Message', error: result.message };
        }
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error Sending Message:', errorMessage);
        return { success: false, message: 'Failed to send Message', error: errorMessage };
    }
}

