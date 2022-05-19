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

async function congratulate() {
  // party.confetti(container, {
  //   count: party.variation.range(80, 100),
  // });

  container.innerHTML = "";
  let node, h1, img;
  node = document.createElement("img");
  img = container.appendChild(node);
  img.classList.add("bouncing");
  img.src = "code-free/perspective_matte.webp";

  node = document.createElement("h1");
  h1 = container.appendChild(node);
  h1.classList.add("typewriter-text");
  h1.innerHTML = params.get("n");

  node = document.createElement("h1");
  h1 = container.appendChild(node);
  h1.classList.add("loading-effect");
  h1.innerHTML = "Thanks for visiting!";

  setInterval(() => {
    party.confetti(container, {
      count: party.variation.range(10, 20),
    });
  }, 500);
}
