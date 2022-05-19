const params = new URLSearchParams(window.location.search);
const container = document.querySelector(".container");
const typewriterText = document.querySelector(".typewriter-text");
const MESSAGE = "Sorry Wrong URL 😢";
if (!params.has("n") || params.get("n") === "") {
  container.innerHTML = "";
  const node = document.createElement("h1");
  const h1 = container.appendChild(node);
  h1.innerHTML = MESSAGE;
} else if (params.has("n")) {
  typewriterText.innerHTML = params.get("n");
}
