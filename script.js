// Interactive logic
const promptEl = document.getElementById('prompt');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const card = document.getElementById('card');
const reveal = document.getElementById('reveal');
const heartsRoot = document.getElementById('hearts');
const replayBtn = document.getElementById('replayBtn');
const video = document.getElementById('valVideo');

const messages = [
  'Are you sure?',
  'Really really sure?',
  "You'll break my heart... 💔",
  'Last chance! 😢'
];

let step = 0;
let evasive = false;

function updatePrompt() {
  if (step === 0) {
    promptEl.textContent = 'Will you be my Valentine? 💖';
  } else {
    promptEl.textContent = messages[step - 1];
  }
}

function spawnHearts(count = 28) {
  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.className = 'heart';
    span.textContent = Math.random() < 0.5 ? '💖' : '💘';
    span.style.left = Math.random() * 100 + 'vw';
    span.style.setProperty('--x', (Math.random() * 120 - 60) + 'px');
    span.style.animationDuration = (6 + Math.random() * 4) + 's';
    heartsRoot.appendChild(span);
    setTimeout(() => span.remove(), 10500);
  }
}

function makeNoEvasive() {
  if (evasive) return;
  evasive = true;
  noBtn.classList.add('moveable');
  const move = () => {
    const x = (Math.random() * 200 - 100);
    const y = (Math.random() * 160 - 80);
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  };
  noBtn.addEventListener('mouseenter', move);
  noBtn.addEventListener('touchstart', move, { passive: true });
}

noBtn.addEventListener('click', () => {
  if (step < messages.length) {
    step += 1;
    updatePrompt();
    if (step === 2) {
      // tiny shake for drama
      card.classList.remove('shake');
      // force reflow
      void card.offsetWidth;
      card.classList.add('shake');
    }
    if (step >= messages.length) {
      makeNoEvasive();
      // also subtly grow Yes button
      yesBtn.style.transform = 'scale(1.08)';
    }
  }
});

yesBtn.addEventListener('click', () => {
  // Hide question card, show reveal
  card.classList.add('hidden');
  reveal.classList.remove('hidden');
  reveal.setAttribute('aria-hidden', 'false');
  spawnHearts(36);
  // Try to play video if available
  if (video) {
    const p = video.play();
    if (p && typeof p.catch === 'function') {
      p.catch(() => {/* ignore autoplay block */});
    }
  }
});

replayBtn.addEventListener('click', () => {
  spawnHearts(36);
});

// Initialize
updatePrompt();
