document.addEventListener('DOMContentLoaded', () => {
    const jokeContainer = document.getElementById('joke-container');
    const randomJokeBtn = document.getElementById('random-joke-btn');
  
    randomJokeBtn.addEventListener('click', getRandomJoke);
  });
  async function getRandomJoke() {
    try {
      const response = await fetch('https://api.example.com/jokes/random');
      const data = await response.json();
      const jokeContainer = document.getElementById('joke-container');
  
      if (jokeContainer) {
        jokeContainer.innerHTML = data.joke;
      }
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  }