"use server"
export default async function discuss(formData: FormData) {
    try {
        const email = formData.get('email'); // Retrieve the email from the form data

        if (!email || typeof email !== 'string') {
            throw new Error('Invalid email address');
        }

        // Create the form data object for the API request
        const formPayload = {
            email,
        };

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const apiEndpoint = `${baseUrl}/api/discuss`;
        console.log(apiEndpoint)

        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formPayload),
        });

        const result = await response.json();

        if (response.ok) {
            return { success: true, message: 'Email send successfully', data: result.data };
        } else {
            return { success: false, message: 'Failed to send Email', error: result.message };
        }
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error Sending Email:', errorMessage);
        return { success: false, message: 'Failed to send Email', error: errorMessage };
    }
}
