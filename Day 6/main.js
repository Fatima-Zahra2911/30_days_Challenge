const modeButton = document.getElementById("mode");

modeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
// Visit Counter using localStorage
let visits = localStorage.getItem("visits") || 0;
visits++;
localStorage.setItem("visits", visits);

document.getElementById("visit-count").innerText = `You’ve visited this page ${visits} time(s).`;
