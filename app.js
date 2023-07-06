document.addEventListener('DOMContentLoaded', () => {
    const jokeContainer = document.getElementById('joke-container');
    const getJokesButton = document.getElementById('get-jokes-btn');
  
    // Event listener for clicking the "Get Jokes" button
    getJokesButton.addEventListener('click', async () => {
      // Fetch jokes from the API
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
  
      // Clear the joke container
      jokeContainer.innerHTML = '';
  
      // Display the jokes
      data.forEach(joke => {
        const jokeElement = document.createElement('p');
        jokeElement.textContent = joke.text;
        jokeContainer.appendChild(jokeElement);
      });
    });
  });