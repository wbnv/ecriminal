const splashScreen = document.getElementById("splash-screen");
const video = document.getElementById("myVideo");

// Listen for a click anywhere on the splash screen
splashScreen.addEventListener("click", () => {
  splashScreen.style.display = "none"; // Hide splash screen
  video.style.display = "block";       // Show video
  video.muted = false;                 // Unmute video
  video.play();                        // Play video
});