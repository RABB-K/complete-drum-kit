document.addEventListener('keydown', function(event) {
  const key = event.key.toUpperCase(); // Normalize to uppercase
  const pad = document.querySelector(`.drum-pad[data-key="${key}"]`);
  if (!pad) return;

  const color = pad.dataset.color;

  // Visual feedback
  pad.style.backgroundColor = color;
  pad.classList.add('playing');

  // Update the display
  const display = document.getElementById('display');
  display.textContent = `You pressed ${key}`;

  // Remove effect after 200ms
  setTimeout(() => {
    pad.classList.remove('playing');
  }, 200);
});
