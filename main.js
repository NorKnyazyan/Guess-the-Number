let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submitGuess').addEventListener('click', function() {
  const userGuess = parseInt(document.getElementById('guessInput').value);
  attempts++;

  let message = '';
  if (!userGuess) {
    message = 'Please enter a number.';
  }
  
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message = 'Please enter a valid number between 1 and 100.';
  } else if (userGuess < randomNumber) {
    message = 'Too low! Try a higher number.';
  } else if (userGuess > randomNumber) {
    message = 'Too high! Try a lower number.';
  } else {
    message = `Congratulations! You guessed the number in ${attempts} attempts.`;
randomNumber = Math.floor(Math.random() * 100) + 1;
attempts = 0;
document.getElementById('attempts').textContent = `Attempts: 0`;
  }

  document.getElementById('message').textContent = message;
  document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
});