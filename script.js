const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Function to convert text to speech using gTTS API
function textToSpeech(text) {
  const apiUrl = 'https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=' + encodeURIComponent(text);
  audioElement.src = apiUrl;
  audioElement.play();
}

function toggleButton() {
  button.disabled = !button.disabled;
}

async function getJokes() {
  let joke = '';
  const apiUrl = 'https://official-joke-api.appspot.com/random_joke';
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    joke = `${data.setup} ... ${data.punchline}`;
    textToSpeech(joke);
    toggleButton();
  } catch (error) {
    console.log('Error:', error);
  }
}

button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);
