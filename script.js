const audio = document.getElementById('background-music');
const playButton = document.getElementById('play-audio-button');

// Attempt to play audio when the page loads
window.addEventListener('load', () => {
  audio.play().catch(() => {
    // Show button if audio play is blocked
    playButton.style.display = 'block';
  });
});

// Play audio when the button is clicked
function playAudio() {
  location.reload();
  audio.play().then(() => {
    playButton.style.display = 'none'; // Hide button once audio starts
  }).catch(error => {
    console.error("Audio play was blocked even after clicking the button:", error);
  });
}
