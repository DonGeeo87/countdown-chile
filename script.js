const countdown = () => {
  const targetDate = new Date("2025-09-18T00:00:00").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    document.getElementById("countdown").innerHTML = "🎉 ¡Ya llegaron las Fiestas Patrias! 🇨🇱";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
};

setInterval(countdown, 1000);

// 💬 Frases chilenas rotativas
const frases = [
  "¡Viva Chile, mierda!",
  "🥟 ¿Una empanadita, compadre?",
  "🍷 ¡Ese terremoto va cargado!",
  "🎉 ¡Se viene su asadito dieciochero!",
  "🪁 ¡Volantín al viento y al cielo!",
  "🔥 ¡Fonda, música y #Terremoto!"
];

let fraseIndex = 0;
const fraseEl = document.getElementById("frase-chilena");

function mostrarFrase() {
  fraseEl.classList.remove("animate__fadeInUp");
  void fraseEl.offsetWidth; // reset animación
  fraseEl.textContent = frases[fraseIndex];
  fraseEl.classList.add("animate__fadeInUp");
  fraseIndex = (fraseIndex + 1) % frases.length;
}

mostrarFrase();
setInterval(mostrarFrase, 5000);

// 🎵 Control de reproducción de guaracha
const audio = document.getElementById('audioCueca');
const btn = document.getElementById('btnAudio');
let playing = false;

btn.addEventListener('click', () => {
  if (!playing) {
    audio.currentTime = 62; // ⏱️ 1 minuto con 2 segundos
    audio.play();
    btn.textContent = "🔇 Pausar guaracha 🇨🇱";
  } else {
    audio.pause();
    btn.textContent = "🔊 Reproducir guaracha 🇨🇱";
  }
  playing = !playing;
});

