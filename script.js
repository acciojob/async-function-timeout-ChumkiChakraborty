//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async () => {
    // Get user input values
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);

    // Validate delay input
    if (isNaN(delay) || delay < 0) {
        alert("Please enter a valid non-negative number for the delay.");
        return;
    }

    // Call the function to display the message after delay
    await displayMessage(text, delay);
});

async function displayMessage(text, delay) {
    // Introduce a delay using a Promise
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // Display the message in the output div
    document.getElementById('output').innerText = text;
}
