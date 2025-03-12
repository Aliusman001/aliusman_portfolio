export function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

export function formatTimeToMinutes(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes;

  return `${totalMinutes} min`;
}

export function htmlTemplate(
  email: string,
  subject: string,
  phone_number: string,
  message: string,
  interest: string
) {
  return `<!DOCTYPE html>
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 20px;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #FD853A;
          color: white;
          text-align: center;
          padding: 20px;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .content {
          padding: 20px;
          line-height: 1.6;
          color: #333333;
        }
        .footer {
          background-color: #f4f4f4;
          color: #777777;
          text-align: center;
          padding: 10px;
          font-size: 12px;
        }
        .footer a {
          color: #FD853A;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>Let's Discuss Ali Usman</h1>
        </div>
        <div class="content">
          <p>Dear Ali Usman,</p>
          <p>
            My email address is <strong>${email}</strong>.
          </p>
          <p>
            <strong>Subject:</strong> ${subject}
          </p>
          <p>
            <strong>Phone Number:</strong> ${phone_number}
          </p>
          <p>
            <strong>Message:</strong> ${message}
          </p>
          <p>
            <strong>Interest:</strong> ${interest}
          </p>
          <p>
            Looking forward to discussing further. Please feel free to reach out
            at your earliest convenience.
          </p>
        </div>
        <div class="footer">
          <p>Thank you!</p>
          <p>
            <a href="mailto:${email}">${email}</a>
          </p>
        </div>
      </div>
    </body>
  </html>`;
}

export function formatDateBlogPost(isoDateString: string): string {
  const date = new Date(isoDateString);

  // Corrected format options
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  // Format the date and add the comma manually after the month
  const formattedDate = date.toLocaleDateString("en-GB", options);

  // Replace the space between day and month with a comma and space
  return `${formattedDate.split(" ")[0]} ${formattedDate.split(" ")[1]}, ${
    formattedDate.split(" ")[2]
  }`;
}
