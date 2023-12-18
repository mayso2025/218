// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Create a container div
    const container = document.createElement('div');
    container.innerHTML = `
        <form id="newsletterForm">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <button type="submit">Subscribe</button>
        </form>
    `;

    // Append the form to the body
    document.body.appendChild(container);

    // Add event listener for form submission
    document.getElementById('newsletterForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;

        const apiUrl = 'https://<dc>.api.mailchimp.com/3.0/lists/<list_id>/members';
        const apiKey = 'e68bba544b40280cf4418040b19a4433-us21';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'apikey ' + apiKey,
            },
            body: JSON.stringify({
                email_address: email,
                status: 'subscribed',
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success, e.g., show a thank you message to the user
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors, e.g., display an error message to the user
        });
    });
});
