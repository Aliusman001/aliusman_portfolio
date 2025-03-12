export async function POST(req: Request) {
    try {
        const { email } = await req.json(); // Parse the incoming JSON data

        // Set up your Brevo API Key
        const apiKey = process.env.BREVO_API_KEY; // Store your API Key in .env.local

        if (!apiKey) {
            throw new Error('API key is missing. Please check your environment variables.');
        }

        // Brevo API endpoint for adding a contact
        const endpoint = 'https://api.brevo.com/v3/contacts';

        // Define the contact data to send to Brevo
        const contactData = {
            email,
            listIds: [3], // Add the contact to a list with ID 1 (or the relevant list ID)
        };

        const response = await fetch(endpoint, {
            method: 'POST', // Specify the method as POST
            headers: {
                'Content-Type': 'application/json', // Set the correct content type
                'accept': 'application/json', // Expected response format
                'api-key': apiKey, // Set your Brevo API key
            },
            body: JSON.stringify(contactData), // Body of the request, must be stringified
        });

        const data = await response.json();

        // Return the success response
        if (response.ok) {
            return new Response(
                JSON.stringify({ message: 'Contact added successfully', data }),
                { status: 200 }
            );
        } else {
            // If the response is not okay, send the error message with an appropriate status
            return new Response(
                JSON.stringify({ message: 'Failed to add contact', error: data.message }),
                { status: response.status || 400 } // Use the Brevo response status or fallback to 400
            );
        }
    } catch (error: unknown) {
        // Ensure TypeScript knows that the error is an instance of Error
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        console.error('Error adding contact:', errorMessage);
        return new Response(
            JSON.stringify({ message: 'Failed to add contact', error: errorMessage }),
            { status: 500 }
        );
    }
}
