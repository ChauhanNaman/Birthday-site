const gradientThemes = [
  ["#ff9a9e", "#fad0c4", "#fad0c4"],
  ["#f6d365", "#fda085", "#ff7a7a"],
  ["#a1c4fd", "#c2e9fb", "#8be9fd"],
  ["#fbc2eb", "#a18cd1", "#7f5af0"],
  ["#fdcbf1", "#e6dee9", "#ff8fab"],
  ["#fccb90", "#d57eeb", "#ffd166"],
  ["#84fab0", "#8fd3f4", "#8be9fd"],
  ["#fddb92", "#d1fdff", "#ffffff"],
  ["#cfd9df", "#e2ebf0", "#b8c0ff"],
  ["#f093fb", "#f5576c", "#ff7a7a"]
];

function createWishArt(title, subtitle, colors) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colors[0]}"/>
          <stop offset="55%" stop-color="${colors[1]}"/>
          <stop offset="100%" stop-color="${colors[2]}"/>
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.95)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)"/>
      <circle cx="920" cy="170" r="170" fill="rgba(255,255,255,0.18)"/>
      <circle cx="265" cy="680" r="190" fill="rgba(255,255,255,0.12)"/>
      <circle cx="610" cy="470" r="220" fill="rgba(255,255,255,0.10)"/>
      <g opacity="0.8">
        <ellipse cx="260" cy="245" rx="72" ry="90" fill="rgba(255,255,255,0.35)"/>
        <ellipse cx="905" cy="310" rx="72" ry="90" fill="rgba(255,255,255,0.35)"/>
        <ellipse cx="810" cy="655" rx="64" ry="82" fill="rgba(255,255,255,0.28)"/>
        <line x1="260" y1="332" x2="260" y2="470" stroke="rgba(255,255,255,0.65)" stroke-width="4"/>
        <line x1="905" y1="396" x2="905" y2="540" stroke="rgba(255,255,255,0.65)" stroke-width="4"/>
        <line x1="810" y1="734" x2="810" y2="850" stroke="rgba(255,255,255,0.65)" stroke-width="4"/>
      </g>
      <g transform="translate(580 220)">
        <circle cx="120" cy="220" r="205" fill="none" stroke="rgba(255,255,255,0.28)" stroke-width="4"/>
        <circle cx="120" cy="220" r="135" fill="none" stroke="rgba(255,255,255,0.24)" stroke-width="3"/>
        <rect x="20" y="250" rx="34" ry="34" width="220" height="88" fill="rgba(255,122,160,0.9)"/>
        <rect x="56" y="148" rx="28" ry="28" width="150" height="68" fill="rgba(255,214,122,0.95)"/>
        <rect x="90" y="70" rx="24" ry="24" width="92" height="50" fill="rgba(255,235,243,0.95)"/>
        <rect x="122" y="0" width="20" height="64" rx="10" fill="rgba(255,244,212,1)"/>
        <ellipse cx="132" cy="-20" rx="20" ry="28" fill="rgba(255,194,39,0.98)"/>
      </g>
      <text x="80" y="120" fill="rgba(255,245,238,0.9)" font-size="30" font-family="Arial, sans-serif" letter-spacing="7">BIRTHDAY CELEBRATION</text>
      <text x="80" y="710" fill="rgba(255,255,255,0.95)" font-size="88" font-weight="700" font-family="Georgia, serif">${title}</text>
      <text x="80" y="785" fill="rgba(255,255,255,0.88)" font-size="34" font-family="Arial, sans-serif">${subtitle}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const wishes = [
  {
    label: "Birthday Wish 1",
    title: "Today Is Your Beautiful Day",
    text: "Happy Birthday to the most precious girl. May your day begin with smiles, glow with love, and end with the sweetest memories your heart can hold.",
    image: createWishArt("Your Beautiful Day", "A birthday morning filled with smiles, sparkle, and love.", gradientThemes[0])
  },
  {
    label: "Birthday Wish 2",
    title: "May Happiness Stay With You",
    text: "I wish this birthday brings you laughter that feels endless, moments that feel magical, and happiness that stays with you far beyond today.",
    image: createWishArt("Happiness Stays", "Soft joy, bright laughter, and birthday warmth all around.", gradientThemes[1])
  },
  {
    label: "Birthday Wish 3",
    title: "You Deserve The Best Year",
    text: "May every new month bring success, peace, sweetness, and moments so lovely that you look back on this year with a full and grateful heart.",
    image: createWishArt("Best Year Ahead", "New dreams, bright paths, and beautiful memories ahead.", gradientThemes[2])
  },
  {
    label: "Birthday Wish 4",
    title: "You Make Life More Beautiful",
    text: "Your presence brings warmth, comfort, and brightness to the people around you. Never forget how deeply special, loved, and unforgettable you are.",
    image: createWishArt("Life Feels Brighter", "Your presence makes every celebration more beautiful.", gradientThemes[3])
  },
  {
    label: "Birthday Wish 5",
    title: "A Wish For All Your Dreams",
    text: "May your dreams grow bigger, your heart grow lighter, and your future bloom with beautiful surprises, unforgettable celebrations, and proud moments.",
    image: createWishArt("All Your Dreams", "Golden dreams, shining hopes, and lovely surprises.", gradientThemes[4])
  },
  {
    label: "Birthday Wish 6",
    title: "This Surprise Ends With Love",
    text: "Happy Birthday, beautiful. May love always find you, peace always stay with you, and every wish made today turn into something wonderful in your life.",
    image: createWishArt("A Heart Full Of Love", "A final birthday wish to stay in your heart forever.", gradientThemes[5])
  }
];
let currentWish = 0;
let confettiPieces = [];
let gallerySection;
let cursorGlow;
let parallaxItems = [];
let memoryCards = [];
let wishModal;
let modalImage;
let modalStepLabel;
let modalTitle;
let modalText;
let nextWishBtn;
let jumpGalleryBtn;
let progressDots = [];

function startJourney() {
  // alert("Click Me button was clicked!");
  currentWish = 0;
  showWish(currentWish);
}

function updateProgress(activeIndex) {
  progressDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeIndex);
    dot.classList.toggle("done", index < activeIndex);
  });
}

function burstConfetti() {
  const colors = ["#ffd166", "#ff7a7a", "#8be9fd", "#ffffff", "#ffb703", "#ff8fab"];
  for (let i = 0; i < 80; i += 1) {
    confettiPieces.push({
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.6,
      size: 4 + Math.random() * 8,
      color: colors[i % colors.length],
      vx: (Math.random() - 0.5) * 10,
      vy: -4 - Math.random() * 8,
      gravity: 0.12 + Math.random() * 0.08,
      rotation: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.26,
      life: 80 + Math.random() * 50
    });
  }
}

function showWish(index) {
  const wish = wishes[index];
  modalImage.src = wish.image;
  modalStepLabel.textContent = wish.label;
  modalTitle.textContent = wish.title;
  modalText.textContent = wish.text;
  nextWishBtn.textContent = index === wishes.length - 1 ? "Open Final Memory Gallery" : "Next Surprise";

  wishModal.classList.remove("hidden");
  wishModal.classList.remove("is-visible");
  wishModal.setAttribute("aria-hidden", "false");
  updateProgress(index);
  void wishModal.offsetWidth;
  wishModal.classList.add("is-visible");
  burstConfetti();
}

function closeWishModal() {
  wishModal.classList.remove("is-visible");
  wishModal.classList.add("hidden");
  wishModal.setAttribute("aria-hidden", "true");
}

function revealGallery() {
  gallerySection.classList.remove("hidden");
  gallerySection.classList.add("is-visible");
  jumpGalleryBtn.classList.remove("hidden");
  setTimeout(() => {
    gallerySection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 220);
}

function bindCardTilt() {
  memoryCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 18;
      const rotateX = ((y / rect.height) - 0.5) * -18;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function mountOfflineGalleryArt() {
  document.querySelectorAll("[data-memory-image]").forEach((img, index) => {
    img.src = createWishArt(
      `Birthday Memory ${index + 1}`,
      "A glowing celebration card you can later replace with a real photo.",
      gradientThemes[index % gradientThemes.length]
    );
  });
}

function initApp() {
  const startJourneyBtn = document.getElementById("startJourney");
  jumpGalleryBtn = document.getElementById("jumpGallery");
  wishModal = document.getElementById("wishModal");
  modalImage = document.getElementById("modalImage");
  modalStepLabel = document.getElementById("modalStepLabel");
  modalTitle = document.getElementById("modalTitle");
  modalText = document.getElementById("modalText");
  nextWishBtn = document.getElementById("nextWish");
  const closeModalBtn = document.getElementById("closeModal");
  const dismissModalBtn = document.getElementById("dismissModal");
  progressDots = [...document.querySelectorAll(".progress-dot")];
  gallerySection = document.getElementById("gallery");
  cursorGlow = document.querySelector(".cursor-glow");
  parallaxItems = [...document.querySelectorAll("[data-depth]")];
  memoryCards = [...document.querySelectorAll(".memory-card")];

  if (!startJourneyBtn || !nextWishBtn || !wishModal) {
    return;
  }

  document.body.classList.add("is-ready");
  mountOfflineGalleryArt();
  bindCardTilt();

  startJourneyBtn.addEventListener("click", startJourney);

  nextWishBtn.addEventListener("click", () => {
    currentWish += 1;

    if (currentWish < wishes.length) {
      showWish(currentWish);
      return;
    }

    closeWishModal();
    updateProgress(wishes.length);
    revealGallery();
    burstConfetti();
  });

  closeModalBtn.addEventListener("click", closeWishModal);
  dismissModalBtn.addEventListener("click", closeWishModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !wishModal.classList.contains("hidden")) {
      closeWishModal();
    }
  });

  window.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    if (cursorGlow) {
      cursorGlow.style.transform = `translate(${x - 90}px, ${y - 90}px)`;
    }

    const xRatio = (x / window.innerWidth - 0.5) * 2;
    const yRatio = (y / window.innerHeight - 0.5) * 2;

    parallaxItems.forEach((item) => {
      const depth = Number(item.dataset.depth || 0.08);
      const moveX = xRatio * depth * 70;
      const moveY = yRatio * depth * 45;
      item.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
  });
}

function initScene() {
  const canvas = document.getElementById("scene");
  if (!canvas) {
    return;
  }

  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  const pointer = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  };
  const shapes = [];
  const stars = [];
  const palette = ["#ff7a7a", "#ffd166", "#8be9fd", "#f9a8d4", "#ffffff"];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();

  for (let i = 0; i < 28; i += 1) {
    shapes.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 18 + Math.random() * 40,
      z: 0.3 + Math.random() * 1.5,
      color: palette[i % palette.length],
      type: i % 3,
      rotation: Math.random() * Math.PI,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      drift: (Math.random() - 0.5) * 0.6,
      bob: Math.random() * Math.PI * 2
    });
  }

  for (let i = 0; i < 160; i += 1) {
    stars.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.8,
      speed: 0.15 + Math.random() * 0.35,
      alpha: 0.2 + Math.random() * 0.7
    });
  }

  window.addEventListener("mousemove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });

  function drawShape(shape, time) {
    const offsetX = (pointer.x - window.innerWidth / 2) * 0.018 * shape.z;
    const offsetY = (pointer.y - window.innerHeight / 2) * 0.018 * shape.z;
    const x = shape.x + offsetX + Math.cos(time * 0.0007 + shape.bob) * 24;
    const y = shape.y + offsetY + Math.sin(time * 0.001 + shape.bob) * 20;

    context.save();
    context.translate(x, y);
    context.rotate(shape.rotation);

    context.strokeStyle = `${shape.color}cc`;
    context.fillStyle = `${shape.color}22`;
    context.lineWidth = 2;
    context.shadowBlur = 18;
    context.shadowColor = shape.color;

    if (shape.type === 0) {
      context.beginPath();
      context.ellipse(0, 0, shape.size, shape.size * 0.48, 0, 0, Math.PI * 2);
      context.stroke();
    } else if (shape.type === 1) {
      context.beginPath();
      for (let i = 0; i < 5; i += 1) {
        const angle = (Math.PI * 2 * i) / 5;
        const px = Math.cos(angle) * shape.size * 0.8;
        const py = Math.sin(angle) * shape.size * 0.8;
        if (i === 0) {
          context.moveTo(px, py);
        } else {
          context.lineTo(px, py);
        }
      }
      context.closePath();
      context.stroke();
    } else {
      context.beginPath();
      context.moveTo(0, -shape.size);
      context.lineTo(shape.size * 0.7, shape.size);
      context.lineTo(-shape.size * 0.7, shape.size);
      context.closePath();
      context.stroke();
    }

    context.restore();
  }

  function render(time) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    const bgGlow = context.createRadialGradient(
      pointer.x,
      pointer.y,
      0,
      pointer.x,
      pointer.y,
      240
    );
    bgGlow.addColorStop(0, "rgba(255,255,255,0.08)");
    bgGlow.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = bgGlow;
    context.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach((star) => {
      star.y -= star.speed;
      if (star.y < -10) {
        star.y = canvas.height + 10;
        star.x = Math.random() * canvas.width;
      }
      context.beginPath();
      context.fillStyle = `rgba(255,255,255,${star.alpha})`;
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      context.fill();
    });

    shapes.forEach((shape) => {
      shape.rotation += shape.rotationSpeed;
      shape.x += shape.drift;
      if (shape.x > canvas.width + 80) shape.x = -80;
      if (shape.x < -80) shape.x = canvas.width + 80;
      drawShape(shape, time);
    });

    confettiPieces = confettiPieces.filter((piece) => piece.life > 0);
    confettiPieces.forEach((piece) => {
      piece.x += piece.vx;
      piece.y += piece.vy;
      piece.vy += piece.gravity;
      piece.rotation += piece.spin;
      piece.life -= 1;

      context.save();
      context.translate(piece.x, piece.y);
      context.rotate(piece.rotation);
      context.fillStyle = piece.color;
      context.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.72);
      context.restore();
    });

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

  window.addEventListener("resize", () => {
    resizeCanvas();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initApp();
    initScene();
  });
} else {
  initApp();
  initScene();
}
