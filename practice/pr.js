if (document.body.animate) {
  document
    .querySelectorAll(".button")
    .forEach((button) => button.addEventListener("click", pop));
}

function pop(e) {
  for (let i = 0; i < 30; i++) {
    createParticle(e.clientX, e.clientY, e.target.dataset.type);
  }
}

function createParticle(x, y, type) {
  const particle = document.createElement("particle");
  document.body.appendChild(particle);

  const size = Math.floor(Math.random() * 20 + 5);

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  const destinationX = x + (Math.random() - 0.5) * 2 * 75;
  const destinationY = y + (Math.random() - 0.5) * 2 * 75;

  const colors = ["#808080", "#000000", "#FFFFFF"]; // 회색, 검정색, 흰색
  const color = colors[Math.floor(Math.random() * colors.length)];

  switch (type) {
    case "square":
      particle.style.background = color;
      particle.style.border = "1px solid white";
      break;
    case "circle":
      particle.style.background = color;
      particle.style.borderRadius = "50%";
      break;
    default:
      particle.style.background = color;
  }

  const animation = particle.animate(
    [
      {
        transform: `translate(${x - size / 2}px, ${y - size / 2}px)`,
        opacity: 1,
      },
      {
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0,
      },
    ],
    {
      duration: 500 + Math.random() * 1000,
      easing: "cubic-bezier(0, .9, .57, 1)",
      delay: Math.random() * 200,
    }
  );

  animation.onfinish = () => {
    particle.removeParticle;
  };
}

function removeParticle(e) {
  e.srcElement.effect.target.remove();
}
