const questions = [
  { question: 'Ekosistem adalah hubungan timbal balik antara makhluk hidup dan ....', options: ['Teman', 'Lingkungan tempat tinggalnya', 'Alat', 'Benda mati saja'], answer: 1 },
  { question: 'Komponen ekosistem yang terdiri atas makhluk hidup disebut ....', options: ['Abiotik', 'Biotik', 'Habitat', 'Ekosistem'], answer: 1 },
  { question: 'Contoh komponen abiotik dalam ekosistem adalah ....', options: ['Tumbuhan', 'Harimau', 'Air', 'Bakteri'], answer: 2 },
  { question: 'Satu makhluk hidup disebut ....', options: ['Individu', 'Populasi', 'Komunitas', 'Habitat'], answer: 0 },
  { question: 'Kumpulan makhluk hidup sejenis di tempat tertentu disebut ....', options: ['Individu', 'Populasi', 'Komunitas', 'Ekosistem'], answer: 1 },
  { question: 'Kumpulan berbagai populasi yang hidup bersama disebut ....', options: ['Habitat', 'Komunitas', 'Individu', 'Predasi'], answer: 1 },
  { question: 'Tempat hidup suatu makhluk hidup disebut ....', options: ['Populasi', 'Habitat', 'Ekosistem', 'Mutualisme'], answer: 1 },
  { question: 'Ekosistem darat contohnya adalah ....', options: ['Sungai', 'Danau', 'Hutan', 'Kolam'], answer: 2 },
  { question: 'Ekosistem yang terbentuk secara alami disebut ....', options: ['Ekosistem buatan', 'Ekosistem alami', 'Ekosistem kota', 'Ekosistem rumah'], answer: 1 },
  { question: 'Sawah termasuk ekosistem ....', options: ['Alami', 'Buatan', 'Gunung', 'Laut'], answer: 1 },
  { question: 'Hubungan antara pemangsa dan mangsa disebut ....', options: ['Predasi', 'Kompetisi', 'Mutualisme', 'Parasitisme'], answer: 0 },
  { question: 'Contoh predasi adalah ....', options: ['Ular memangsa tikus', 'Anggrek menempel pohon', 'Lebah membantu penyerbukan', 'Kutu hidup di tubuh kucing'], answer: 0 },
  { question: 'Persaingan makhluk hidup untuk mendapatkan kebutuhan hidup disebut ....', options: ['Predasi', 'Kompetisi', 'Mutualisme', 'Parasitisme'], answer: 1 },
  { question: 'Hubungan dua makhluk hidup yang saling menguntungkan disebut ....', options: ['Mutualisme', 'Komensalisme', 'Parasitisme', 'Predasi'], answer: 0 },
  { question: 'Hubungan dimana satu makhluk hidup diuntungkan dan yang lain tidak dirugikan maupun diuntungkan disebut ....', options: ['Mutualisme', 'Parasitisme', 'Komensalisme', 'Kompetisi'], answer: 2 },
  { question: 'Hubungan dimana satu makhluk hidup diuntungkan dan yang lain dirugikan disebut ....', options: ['Mutualisme', 'Komensalisme', 'Parasitisme', 'Predasi'], answer: 2 },
  { question: 'Contoh simbiosis mutualisme adalah ....', options: ['Kutu pada kucing', 'Anggrek menempel pohon', 'Lebah dan bunga', 'Tikus dan ular'], answer: 2 },
  { question: 'Produsen dalam rantai makanan biasanya adalah ....', options: ['Tumbuhan', 'Ular', 'Kucing', 'Jangkrik'], answer: 0 },
  { question: 'Makhluk hidup yang memperoleh energi dengan memakan makhluk hidup lain disebut ....', options: ['Produsen', 'Konsumen', 'Pengurai', 'Habitat'], answer: 1 },
  { question: 'Organisme yang menguraikan sisa-sisa makhluk hidup disebut ....', options: ['Produsen', 'Konsumen', 'Pengurai', 'Parasit'], answer: 2 },
  { question: 'Contoh rantai makanan di sawah adalah ....', options: ['Padi → Belalang → Katak → Ular', 'Burung → Rumput → Serangga → Ular', 'Air → Ikan → Katak → Padi', 'Tanah → Tumbuhan → Ular → Kucing'], answer: 0 },
  { question: 'Pada rantai makanan di sawah, padi berperan sebagai ....', options: ['Konsumen tingkat I', 'Produsen', 'Pengurai', 'Mangsanya ular'], answer: 1 },
  { question: 'Belalang pada rantai makanan di sawah berperan sebagai ....', options: ['Produsen', 'Konsumen tingkat I', 'Pengurai', 'Habitat'], answer: 1 },
  { question: 'Katak dalam rantai makanan di sawah termasuk ....', options: ['Produsen', 'Konsumen tingkat II', 'Pengurai', 'Habitat'], answer: 1 },
  { question: 'Jaring-jaring makanan adalah ....', options: ['Gabungan beberapa rantai makanan', 'Satu jenis rantai makanan', 'Tempat tinggal hewan', 'Semua tumbuhan di hutan'], answer: 0 },
  { question: 'Jika salah satu jenis makhluk hidup berubah jumlahnya, maka ....', options: ['Ekosistem tetap stabil', 'Keseimbangan ekosistem dapat terganggu', 'Hanya tanaman yang rusak', 'Tidak ada dampaknya'], answer: 1 },
  { question: 'Banjir termasuk faktor gangguan keseimbangan ekosistem dari ....', options: ['Aktivitas manusia', 'Faktor alam', 'Industrialisasi', 'Eksploitasi'], answer: 1 },
  { question: 'Penebangan hutan liar merupakan gangguan keseimbangan ekosistem akibat ....', options: ['Faktor alam', 'Aktivitas manusia', 'Suhu udara', 'Predasi'], answer: 1 },
  { question: 'Salah satu akibat gangguan keseimbangan ekosistem adalah ....', options: ['Populasi makhluk hidup bertambah banyak', 'Habitat rusak', 'Semua tumbuhan hijau', 'Cuaca cerah selalu'], answer: 1 },
  { question: 'Manusia dapat menjaga ekosistem dengan cara ....', options: ['Membuang sampah ke sungai', 'Menebang pohon secara liar', 'Menanam pohon', 'Memburu hewan'], answer: 2 },
  { question: 'Membuang sampah pada tempatnya termasuk upaya ....', options: ['Merusak lingkungan', 'Menjaga ekosistem', 'Meningkatkan pestisida', 'Mengurangi sinar matahari'], answer: 1 },
  { question: 'Kegiatan berikut yang dapat merusak ekosistem adalah ....', options: ['Merawat hutan', 'Menghemat air', 'Memburu hewan liar', 'Menanam pohon'], answer: 2 },
  { question: 'Salah satu cara menjaga kelestarian sungai adalah ....', options: ['Membuang sampah ke sungai', 'Menjaga kebersihan sungai', 'Menggunakan pestisida berlebihan', 'Memburu ikan'], answer: 1 },
  { question: 'Contoh ekosistem perairan adalah ....', options: ['Gurun', 'Hutan', 'Danau', 'Padang rumput'], answer: 2 },
  { question: 'Komponen ekosistem yang tidak hidup disebut ....', options: ['Biotik', 'Abiotik', 'Komunitas', 'Populasi'], answer: 1 },
  { question: 'Ciri-ciri ekosistem yang seimbang adalah ....', options: ['Semua komponen hidup sendiri', 'Komponen biotik dan abiotik berinteraksi selaras', 'Tidak ada rantai makanan', 'Hanya ada satu makhluk hidup'], answer: 1 },
  { question: 'Contoh usaha menjaga ekosistem berikut yang benar adalah ....', options: ['Melepas hewan ke sungai tanpa pengawasan', 'Mengurangi penggunaan pestisida berlebihan', 'Menebang pohon untuk membuka lahan', 'Membakar hutan'], answer: 1 },
  { question: 'Makhluk hidup berikut yang termasuk pengurai adalah ....', options: ['Jamur', 'Padi', 'Belalang', 'Kucing'], answer: 0 },
  { question: 'Manusia memiliki peran penting untuk ....', options: ['Merusak habitat hewan', 'Melestarikan ekosistem', 'Menghilangkan tumbuhan', 'Membuang limbah sembarangan'], answer: 1 },
  { question: 'Keadaan ketika komponen biotik dan abiotik berinteraksi secara selaras disebut ....', options: ['Keseimbangan ekosistem', 'Komunitas', 'Predasi', 'Individu'], answer: 0 },
  { question: 'Hutan, padang rumput, dan gurun termasuk contoh ekosistem ....', options: ['Perairan', 'Darat', 'Buatan', 'Rumah'], answer: 1 },
  { question: 'Contoh ekosistem buatan adalah ....', options: ['Kolam ikan', 'Laut', 'Hutan hujan', 'Gurun'], answer: 0 },
  { question: 'Apa yang dimaksud dengan individu dalam ekosistem?', options: ['Kumpulan hewan yang sama', 'Satu makhluk hidup', 'Semua tumbuhan di hutan', 'Beberapa jenis makhluk hidup'], answer: 1 },
  { question: 'Apa yang dimaksud dengan komunitas dalam ekosistem?', options: ['Satu makhluk hidup', 'Kumpulan berbagai populasi yang hidup bersama', 'Tempat hidup hewan', 'Sinar matahari'], answer: 1 },
  { question: 'Ekosistem kolam dapat terdiri dari ikan, katak, dan tumbuhan air. Ini menunjukkan adanya ....', options: ['Komunitas', 'Individu', 'Predasi', 'Komponen abiotik'], answer: 0 },
  { question: 'Sumber energi utama dalam ekosistem adalah ....', options: ['Tanah', 'Air', 'Sinar matahari', 'Udara'], answer: 2 },
  { question: 'Tumbuhan membutuhkan air, tanah, udara, dan sinar matahari untuk ....', options: ['Berjalan', 'Tumbuh', 'Berenang', 'Berkembang biak tanpa air'], answer: 1 },
  { question: 'Makhluk hidup yang dapat membuat makanannya sendiri disebut ....', options: ['Pengurai', 'Konsumen', 'Produsen', 'Predator'], answer: 2 },
  { question: 'Di dalam ekosistem, sisa-sisa makhluk hidup akan diuraikan oleh ....', options: ['Produsen', 'Pengurai', 'Konsumen', 'Predator'], answer: 1 },
  { question: 'Contoh pengurai yang umum adalah ....', options: ['Jamur dan bakteri', 'Padi dan rumput', 'Kucing dan tupai', 'Ular dan tikus'], answer: 0 }
];

const MAX_ROUNDS = 12;
const state = {
  deck: [],
  currentQuestion: null,
  redScore: 0,
  blueScore: 0,
  currentRound: 0,
  timer: 20,
  timerId: null,
  answered: { red: false, blue: false },
  active: false,
  musicOn: true,
  audioContext: null,
  musicLoop: null,
};

const questionText = document.getElementById('questionText');
const redScoreEl = document.getElementById('redScore');
const blueScoreEl = document.getElementById('blueScore');
const statusText = document.getElementById('statusText');
const timerText = document.getElementById('timerText');
const roundIndicator = document.getElementById('roundIndicator');
const teamRedNameEl = document.getElementById('teamRedName');
const teamBlueNameEl = document.getElementById('teamBlueName');
const teamRedNameInput = document.getElementById('teamRedNameInput');
const teamBlueNameInput = document.getElementById('teamBlueNameInput');
const startGameBtn = document.getElementById('startGameBtn');
const musicToggleBtn = document.getElementById('musicToggleBtn');
const answerButtons = [...document.querySelectorAll('.answer-btn')];

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function updateNames() {
  const redName = teamRedNameInput.value.trim() || 'Tim Merah';
  const blueName = teamBlueNameInput.value.trim() || 'Tim Biru';
  teamRedNameEl.textContent = redName;
  teamBlueNameEl.textContent = blueName;
}

function updateScoreboard() {
  redScoreEl.textContent = state.redScore;
  blueScoreEl.textContent = state.blueScore;
  const difference = state.redScore - state.blueScore;
  const rope = document.querySelector('.rope');
  const leftHandle = document.querySelector('.left-handle');
  const rightHandle = document.querySelector('.right-handle');
  const shift = Math.min(Math.abs(difference) * 16, 84);
  const direction = difference > 0 ? -1 : difference < 0 ? 1 : 0;

  rope.style.left = `calc(50% + ${direction * shift}px)`;
  leftHandle.style.left = `calc(18% + ${direction * shift * 0.7}px)`;
  rightHandle.style.right = `calc(18% - ${direction * shift * 0.7}px)`;
}

function renderQuestion() {
  const question = state.currentQuestion;
  if (!question) return;

  questionText.textContent = question.question;
  answerButtons.forEach((button) => {
    const idx = Number(button.dataset.index);
    const label = String.fromCharCode(65 + idx);
    button.textContent = `${label}. ${question.options[idx]}`;
    button.disabled = false;
    button.classList.remove('correct', 'wrong');
  });

  updateNames();
}

function startTimer() {
  clearInterval(state.timerId);
  state.timer = 20;
  timerText.textContent = String(state.timer);

  state.timerId = setInterval(() => {
    state.timer -= 1;
    timerText.textContent = String(Math.max(state.timer, 0));

    if (state.timer <= 0) {
      clearInterval(state.timerId);
      handleTimeout();
    }
  }, 1000);
}

function revealAnswer(team) {
  const { answer } = state.currentQuestion;

  answerButtons.forEach((button) => {
    if (Number(button.dataset.index) === answer) {
      button.classList.add('correct');
    }
  });

  const teamButtons = answerButtons.filter((button) => button.dataset.team === team);
  teamButtons.forEach((button) => {
    button.disabled = true;
  });
}

function handleAnswer(team, optionIndex) {
  if (!state.active || state.answered[team]) return;

  const button = answerButtons.find(
    (item) => item.dataset.team === team && Number(item.dataset.index) === optionIndex
  );

  if (!button) return;

  state.answered[team] = true;
  button.disabled = true;

  const isCorrect = optionIndex === state.currentQuestion.answer;

  if (isCorrect) {
    if (team === 'red') state.redScore += 1;
    if (team === 'blue') state.blueScore += 1;

    statusText.textContent = `${team === 'red' ? teamRedNameInput.value.trim() || 'Tim Merah' : teamBlueNameInput.value.trim() || 'Tim Biru'} menjawab benar! Tarikan bertambah.`;
    playCorrectSound(team);

    answerButtons.forEach((answerButton) => {
      if (Number(answerButton.dataset.index) === optionIndex && answerButton.dataset.team === team) {
        answerButton.classList.add('correct');
      }
    });
  } else {
    statusText.textContent = `${team === 'red' ? teamRedNameInput.value.trim() || 'Tim Merah' : teamBlueNameInput.value.trim() || 'Tim Biru'} salah. Jawabannya ada di jalur lain.`;
    button.classList.add('wrong');
    playWrongSound();
  }

  answerButtons.forEach((item) => {
    if (item.dataset.team === team) {
      item.disabled = true;
    }
  });

  updateScoreboard();

  if (state.answered.red && state.answered.blue) {
    clearInterval(state.timerId);
    setTimeout(() => {
      if (state.currentRound >= MAX_ROUNDS) {
        finishGame();
      } else {
        startNextRound();
      }
    }, 1500);
  }
}

function handleTimeout() {
  if (!state.active) return;

  statusText.textContent = `Waktu habis! Jawaban benar: ${String.fromCharCode(65 + state.currentQuestion.answer)}. ${state.currentQuestion.options[state.currentQuestion.answer]}`;
  answerButtons.forEach((button) => {
    if (Number(button.dataset.index) === state.currentQuestion.answer) {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  state.answered.red = true;
  state.answered.blue = true;

  playWrongSound();

  setTimeout(() => {
    if (state.currentRound >= MAX_ROUNDS) {
      finishGame();
    } else {
      startNextRound();
    }
  }, 1700);
}

function startNextRound() {
  if (state.currentRound >= MAX_ROUNDS) {
    finishGame();
    return;
  }

  state.currentRound += 1;
  state.currentQuestion = state.deck[state.currentRound - 1];
  state.answered = { red: false, blue: false };
  roundIndicator.textContent = `${state.currentRound} / ${MAX_ROUNDS}`;
  renderQuestion();
  startTimer();
}

function finishGame() {
  clearInterval(state.timerId);
  state.active = false;

  const redName = teamRedNameInput.value.trim() || 'Tim Merah';
  const blueName = teamBlueNameInput.value.trim() || 'Tim Biru';
  let message = 'Pertandingan seri!';

  if (state.redScore > state.blueScore) {
    message = `${redName} menang!`;
  } else if (state.blueScore > state.redScore) {
    message = `${blueName} menang!`;
  }

  statusText.textContent = `${message} Skor akhir: ${redName} ${state.redScore} - ${state.blueScore} ${blueName}`;
  questionText.textContent = 'Battle selesai! Tekan mulai lagi untuk menantang tim lain.';
  answerButtons.forEach((button) => {
    button.disabled = true;
  });

  if (state.redScore === state.blueScore) {
    playWinnerTune('draw');
  } else if (state.redScore > state.blueScore) {
    playWinnerTune('red');
  } else {
    playWinnerTune('blue');
  }
}

function resetGame() {
  state.redScore = 0;
  state.blueScore = 0;
  state.currentRound = 0;
  state.active = true;
  state.deck = shuffle(questions).slice(0, MAX_ROUNDS);
  state.answered = { red: false, blue: false };
  roundIndicator.textContent = `0 / ${MAX_ROUNDS}`;
  statusText.textContent = 'Battle dimulai! Jawab cepat dan tepat.';
  updateNames();
  updateScoreboard();
  startNextRound();
}

function setupEventListeners() {
  startGameBtn.addEventListener('click', () => {
    updateNames();
    resetGame();
    startAudio();
    if (state.musicOn) {
      startMusicLoop();
    }
  });

  musicToggleBtn.addEventListener('click', () => {
    state.musicOn = !state.musicOn;
    musicToggleBtn.textContent = `Musik: ${state.musicOn ? 'Nyala' : 'Mati'}`;

    if (state.musicOn) {
      startAudio();
      startMusicLoop();
    } else {
      stopMusicLoop();
    }
  });

  teamRedNameInput.addEventListener('input', updateNames);
  teamBlueNameInput.addEventListener('input', updateNames);

  answerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const team = button.dataset.team;
      const optionIndex = Number(button.dataset.index);
      handleAnswer(team, optionIndex);
    });
  });
}

function ensureAudioContext() {
  if (!state.audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      state.audioContext = new AudioCtx();
    }
  }
}

function startAudio() {
  ensureAudioContext();
  if (state.audioContext && state.audioContext.state === 'suspended') {
    state.audioContext.resume();
  }
}

function playTone(frequency, duration, type = 'square', volume = 0.05) {
  if (!state.audioContext) return;

  const oscillator = state.audioContext.createOscillator();
  const gain = state.audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.value = frequency;

  gain.gain.setValueAtTime(volume, state.audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, state.audioContext.currentTime + duration);

  oscillator.connect(gain);
  gain.connect(state.audioContext.destination);
  oscillator.start();
  oscillator.stop(state.audioContext.currentTime + duration);
}

function playCorrectSound(team) {
  if (!state.musicOn) return;
  const notes = team === 'red' ? [440, 554.37, 659.25] : [392, 493.88, 587.33];
  notes.forEach((note, index) => {
    setTimeout(() => playTone(note, 0.18, 'triangle', 0.05), index * 100);
  });
}

function playWrongSound() {
  if (!state.musicOn) return;
  playTone(180, 0.12, 'sawtooth', 0.06);
  setTimeout(() => playTone(120, 0.18, 'sawtooth', 0.05), 120);
}

function playWinnerTune(winner) {
  if (!state.musicOn) return;
  const melody = winner === 'draw' ? [440, 523.25, 659.25, 523.25] : winner === 'red' ? [440, 494, 659, 659] : [392, 466, 587, 587];
  melody.forEach((note, index) => {
    setTimeout(() => playTone(note, 0.18, 'triangle', 0.06), index * 150);
  });
}

function startMusicLoop() {
  if (state.musicLoop) return;
  const pattern = [262, 330, 392, 330, 392, 523.25, 392, 330];

  state.musicLoop = setInterval(() => {
    if (!state.musicOn || !state.active) return;
    const note = pattern[Math.floor(Math.random() * pattern.length)];
    playTone(note, 0.12, 'square', 0.025);
  }, 420);
}

function stopMusicLoop() {
  if (state.musicLoop) {
    clearInterval(state.musicLoop);
    state.musicLoop = null;
  }
}

setupEventListeners();
updateNames();
updateScoreboard();
renderQuestion();
