document.addEventListener('DOMContentLoaded', () => {
    const jokeContainer = document.getElementById('joke-container');
    const getJokesButton = document.getElementById('get-jokes-btn');
  
    // Event listener for clicking the "Get Jokes" button
    document.querySelector('#random-joke-btn').addEventListener('click', () => {
      // Fetch jokes from the API
      document.querySelector('#joker').innerHTML = '';
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res=>res.json())
    .then(data =>{
        let joke = document.createElement('div')
        joke.className = 'joke'
        joke.innerHTML = `<p> ${data.setup}</p>
        <p>${data.punchline}</p>`
        document.querySelector('#joker').appendChild(joke)
    })
      // Clear the joke container

    //   // Display the jokes
    //   data.forEach(joke => {
    //     const jokeElement = document.createElement('p');
    //     jokeElement.textContent = joke.text;
    //     jokeContainer.appendChild(jokeElement);
    //   });
    });
  });