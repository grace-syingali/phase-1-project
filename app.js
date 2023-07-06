document.addEventListener('DOMContentLoaded', () => {
    const jokeContainer = document.getElementById('joke-container');
    const randomJokeBtn = document.getElementById('random-joke-btn');
  
    randomJokeBtn.addEventListener('click', getRandomJoke);
  });