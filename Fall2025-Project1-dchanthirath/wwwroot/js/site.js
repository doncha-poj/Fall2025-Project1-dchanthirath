// script.js

// Wait for the entire page to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Array of classic House M.D. quotes
    const quotes = [
        "It's a basic truth of the human condition that everybody lies.",
        "The eyes can mislead, a smile can lie, but the shoes always tell the truth.",
        "I'm sorry, I'm not a fan of foreplay. Let's just get to the climax.",
        "Humanity is overrated.",
        "If you can fake sincerity, you can fake pretty much anything.",
        "Reality is almost always wrong.",
        "You want to know how I am? I'm in a hospital with a clown. How do you think I am?",
        "It's not lupus. It's never lupus."
        "Have you used the medicine drug?"
        "Are you intentionally being dense right now? HUH."
    ];

    // Get the button and the paragraph element from the HTML using their IDs
    const quoteButton = document.getElementById('quoteButton');
    const quoteDisplay = document.getElementById('quoteDisplay');

    // Add an event listener to the button that runs a function when it's clicked
    quoteButton.addEventListener('click', () => {
        // Generate a random number between 0 and the length of the quotes array
        const randomIndex = Math.floor(Math.random() * quotes.length);

        // Set the text of the paragraph to a random quote from the array
        quoteDisplay.textContent = `"${quotes[randomIndex]}"`;
    });
});
