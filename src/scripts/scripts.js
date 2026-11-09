// ==========================================================================
// FELIZ ANIVERSÁRIO, MARISTELA!
// Homenagem especial de aniversário para a melhor mãe do mundo.
// Feito com todo amor pelo seu filho Emílio Manoel.
// ==========================================================================

(function () {
  'use strict';

  // ---- DADOS DAS 24 FOTOS COM MENSAGENS ESPECIAIS ----
  const photos = [
    {
      src: 'src/assets/1000022594.jpg',
      title: 'Sorriso que Encanta',
      caption:
        'A sua energia boa, sua alegria de viver e seu sorriso espontâneo iluminam qualquer lugar por onde você passa.',
      category: 'viagens',
      tag: 'Viagens & Passeios 🏖️',
    },
    {
      src: 'src/assets/1000022653.jpg',
      title: 'Meu Aniversário de 13 Anos',
      caption:
        'Comemorando meus 13 anos ao lado do meu maior porto seguro. O melhor presente de todos sempre foi ter o seu abraço.',
      category: 'aniversario',
      tag: 'Aniversários 🎂',
    },
    {
      src: 'src/assets/1000022656.jpg',
      title: 'Alegria em Família',
      caption:
        'A união, as risadas e o amor que nos cercam são reflexo da mulher maravilhosa e agregadora que você é para todos nós.',
      category: 'familia',
      tag: 'Família & Sorrisos 💖',
    },
    {
      src: 'src/assets/1000022800.jpg',
      title: 'Celebrando Meus 14 Anos',
      caption:
        'Cortando o bolo juntos aos 14 anos. Obrigado por segurar minha mão em cada etapa do meu crescimento com tanta dedicação.',
      category: 'aniversario',
      tag: 'Aniversários 🎂',
    },
    {
      src: 'src/assets/1000022812.jpg',
      title: 'Beleza e Luz no Jardim',
      caption:
        'Dona de uma elegância sem igual e de uma doçura que floresce no coração de quem tem a sorte de te conhecer.',
      category: 'familia',
      tag: 'Família & Sorrisos 💖',
    },
    {
      src: 'src/assets/1000023257.jpg',
      title: 'União que Não Tem Preço',
      caption:
        'Nossa família reunida em volta de você. Você é o elo de amor, a força e o coração mais bonito da nossa casa.',
      category: 'familia',
      tag: 'Família & Sorrisos 💖',
    },
    {
      src: 'src/assets/1000023303.jpg',
      title: 'Tarde de Sol e Paz',
      caption:
        'A brisa boa, a vista para o mar e a tranquilidade de estar ao seu lado. Momentos felizes que guardo com muito carinho.',
      category: 'viagens',
      tag: 'Viagens & Passeios 🏖️',
    },
    {
      src: 'src/assets/1000023331.jpg',
      title: 'No Topo da Montanha',
      caption:
        'Alcançando horizontes altos juntos. Com você ao meu lado, sinto que posso superar qualquer desafio com fé e coragem.',
      category: 'viagens',
      tag: 'Viagens & Passeios 🏖️',
    },
    {
      src: 'src/assets/1000023335.jpg',
      title: 'Caminhando Juntos',
      caption:
        'Subindo cada degrau da vida ao seu lado. Seus passos firmes e cheios de fé são o meu maior guia e exemplo de vida.',
      category: 'viagens',
      tag: 'Viagens & Passeios 🏖️',
    },
    {
      src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_163.jpg',
      title: 'Mãe e Filho: Laço Eterno',
      caption:
        'O abraço mais sincero do mundo. Obrigado por ser minha melhor amiga, conselheira e a melhor mãe que existe.',
      category: 'familia',
      tag: 'Família & Sorrisos 💖',
    },
    {
      src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_176.jpg',
      title: 'Serenidade na Serra',
      caption:
        'A paz que a natureza transmite é a mesma calma que encontro no seu abraço nos momentos em que mais preciso.',
      category: 'viagens',
      tag: 'Viagens & Passeios 🏖️',
    },
    {
      src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_230.jpg',
      title: 'Sorrisos Compartilhados',
      caption:
        'A alegria estampada no rosto de quem sabe que a vida é mais bela quando compartilhada com quem amamos de verdade.',
      category: 'viagens',
      tag: 'Viagens & Passeios 🏖️',
    },
    {
      src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_234.jpg',
      title: 'Cumplicidade Sem Fim',
      caption:
        'Não importa o tempo que passe, o meu amor e a minha admiração por você só crescem a cada novo amanhecer.',
      category: 'viagens',
      tag: 'Viagens & Passeios 🏖️',
    },
    {
      src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_255.jpg',
      title: 'Dia Ensolarado e Feliz',
      caption:
        'Que todos os seus dias sejam leves, cheios de cor, descanso merecido e motivos sem fim para dar essa gargalhada gostosa.',
      category: 'viagens',
      tag: 'Viagens & Passeios 🏖️',
    },
    {
      src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_257.jpg',
      title: 'Brilho e Simpatia',
      caption:
        'Seus olhos carregam a doçura e a autenticidade de uma mãe que sempre faz de tudo para ver os filhos felizes.',
      category: 'familia',
      tag: 'Família & Sorrisos 💖',
    },
    {
      src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_383.jpg',
      title: 'Amor Puro e Verdadeiro',
      caption:
        'Dois sorrisos que se completam. Não existe no mundo sentimento mais forte e leal do que o amor que sinto por você.',
      category: 'familia',
      tag: 'Família & Sorrisos 💖',
    },
    {
      src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_398.png',
      title: 'Elegância e Carisma',
      caption:
        'Uma mulher admirável por fora e ainda mais espetacular por dentro. Parabéns pela pessoa linda que você sempre foi!',
      category: 'familia',
      tag: 'Família & Sorrisos 💖',
    },
    {
      src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_413.jpg',
      title: 'Doçura que Acolhe',
      caption:
        'Obrigado por cada prato feito com amor, cada conselho atencioso e por me ensinar a ter empatia e respeito por todos.',
      category: 'familia',
      tag: 'Família & Sorrisos 💖',
    },
    {
      src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_422.jpg',
      title: 'Gerações de Amor',
      caption:
        'A história de afeto e respeito que construímos juntos. Nossas raízes e a nossa união familiar são o nosso maior orgulho.',
      category: 'familia',
      tag: 'Família & Sorrisos 💖',
    },
    {
      src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_444.jpg',
      title: 'Espontaneidade e Carinho',
      caption:
        'Sua autenticidade e o seu jeito alegre transformam as coisas mais simples em memórias inesquecíveis que guardo no peito.',
      category: 'familia',
      tag: 'Família & Sorrisos 💖',
    },
    {
      src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_450.jpg',
      title: 'Mulheres Extraordinárias',
      caption:
        'Duas guerreiras admiráveis celebrando a cumplicidade feminina, a união e a beleza de compartilhar a vida com amor.',
      category: 'familia',
      tag: 'Família & Sorrisos 💖',
    },
    {
      src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_484.jpg',
      title: 'Olhar de Proteção',
      caption:
        'Mesmo quando eu já não era tão pequeno, seu olhar de cuidado e bênção sempre me acompanhou em cada caminho que trilhei.',
      category: 'familia',
      tag: 'Família & Sorrisos 💖',
    },
    {
      src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_493.jpg',
      title: 'Viva a Vida, Mãe!',
      caption:
        'Que este novo ano chegue trazendo viagens inesquecíveis, saúde de ferro, tranquilidade financeira e muita felicidade.',
      category: 'viagens',
      tag: 'Viagens & Passeios 🏖️',
    },
    {
      src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_518.jpg',
      title: 'Gratidão Infinita',
      caption:
        'Por tudo o que você é, por tudo o que você fez e por todo o amor que nos cerca: muito obrigado por existir, minha mãe!',
      category: 'aniversario',
      tag: 'Aniversários 🎂',
    },
  ];

  // ---- ELEMENTOS DO DOM ----
  const landing = document.getElementById('landing');
  const btnSurprise = document.getElementById('btnSurprise');
  const transitionOverlay = document.getElementById('transitionOverlay');
  const transitionMessage = document.getElementById('transitionMessage');
  const animationCanvas = document.getElementById('animationCanvas');
  const bgCanvas = document.getElementById('bgCanvas');
  const celebration = document.getElementById('celebration');
  const floatingElementsContainer = document.getElementById('floatingElements');

  // Galeria & Filtros
  const galleryGrid = document.getElementById('galleryGrid');
  const galleryFilter = document.getElementById('galleryFilter');

  // Interatividade do bolo
  const btnBlowCandles = document.getElementById('btnBlowCandles');
  const blowBtnText = document.getElementById('blowBtnText');
  const blowBtnIcon = document.getElementById('blowBtnIcon');
  const cakeWishMessage = document.getElementById('cakeWishMessage');
  const flames = [
    document.getElementById('flame1'),
    document.getElementById('flame2'),
    document.getElementById('flame3'),
  ];
  let candlesBlown = false;

  // Botão FAB de Confetes
  const btnConfettiFab = document.getElementById('btnConfettiFab');

  // Controle de Música
  const btnMusic = document.getElementById('btnMusic');
  const musicStatus = document.getElementById('musicStatus');
  const musicBars = document.getElementById('musicBars');

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxLike = document.getElementById('lightboxLike');
  const likeCount = document.getElementById('likeCount');

  let currentPhotoIndex = 0;
  let currentFilteredPhotos = [...photos];

  // ==========================================================================
  // SINTETIZADOR DE MÚSICA DE ANIVERSÁRIO (Web Audio API)
  // Toca um arranjo delicado de "Parabéns a Você" + melodia de amor ao fundo
  // ==========================================================================
  const BirthdaySynth = (function () {
    let audioCtx = null;
    let isPlaying = false;
    let loopTimeout = null;
    let masterGain = null;

    // Frequências das notas (Hz)
    const notes = {
      C4: 261.63,
      D4: 293.66,
      E4: 329.63,
      F4: 349.23,
      G4: 392.0,
      A4: 440.0,
      B4: 493.88,
      C5: 523.25,
      D5: 587.33,
      E5: 659.25,
      F5: 698.46,
      G5: 783.99,
      A5: 880.0,
    };

    // Partitura: Parabéns a Você (Happy Birthday)
    const birthdayMelody = [
      { note: notes.G4, dur: 0.35, pause: 0.1 },
      { note: notes.G4, dur: 0.35, pause: 0.1 },
      { note: notes.A4, dur: 0.7, pause: 0.1 },
      { note: notes.G4, dur: 0.7, pause: 0.1 },
      { note: notes.C5, dur: 0.7, pause: 0.1 },
      { note: notes.B4, dur: 1.2, pause: 0.2 },

      { note: notes.G4, dur: 0.35, pause: 0.1 },
      { note: notes.G4, dur: 0.35, pause: 0.1 },
      { note: notes.A4, dur: 0.7, pause: 0.1 },
      { note: notes.G4, dur: 0.7, pause: 0.1 },
      { note: notes.D5, dur: 0.7, pause: 0.1 },
      { note: notes.C5, dur: 1.2, pause: 0.2 },

      { note: notes.G4, dur: 0.35, pause: 0.1 },
      { note: notes.G4, dur: 0.35, pause: 0.1 },
      { note: notes.G5, dur: 0.7, pause: 0.1 },
      { note: notes.E5, dur: 0.7, pause: 0.1 },
      { note: notes.C5, dur: 0.7, pause: 0.1 },
      { note: notes.B4, dur: 0.7, pause: 0.1 },
      { note: notes.A4, dur: 1.2, pause: 0.2 },

      { note: notes.F5, dur: 0.35, pause: 0.1 },
      { note: notes.F5, dur: 0.35, pause: 0.1 },
      { note: notes.E5, dur: 0.7, pause: 0.1 },
      { note: notes.C5, dur: 0.7, pause: 0.1 },
      { note: notes.D5, dur: 0.7, pause: 0.1 },
      { note: notes.C5, dur: 1.6, pause: 0.5 },
    ];

    // Melodia de carinho em loop suave (arpejos de balada)
    const lullabyMelody = [
      { note: notes.C4, dur: 0.5, pause: 0.1 },
      { note: notes.E4, dur: 0.5, pause: 0.1 },
      { note: notes.G4, dur: 0.5, pause: 0.1 },
      { note: notes.C5, dur: 1.0, pause: 0.15 },

      { note: notes.G4, dur: 0.5, pause: 0.1 },
      { note: notes.B4, dur: 0.5, pause: 0.1 },
      { note: notes.D5, dur: 0.5, pause: 0.1 },
      { note: notes.G5, dur: 1.0, pause: 0.15 },

      { note: notes.A4, dur: 0.5, pause: 0.1 },
      { note: notes.C5, dur: 0.5, pause: 0.1 },
      { note: notes.E5, dur: 0.5, pause: 0.1 },
      { note: notes.A5, dur: 1.0, pause: 0.15 },

      { note: notes.F4, dur: 0.5, pause: 0.1 },
      { note: notes.A4, dur: 0.5, pause: 0.1 },
      { note: notes.C5, dur: 0.5, pause: 0.1 },
      { note: notes.E5, dur: 1.2, pause: 0.4 },
    ];

    function initAudio() {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContextClass();
        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(0.22, audioCtx.currentTime);
        masterGain.connect(audioCtx.destination);
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    }

    // Toca uma nota com timbre suave de piano/celesta (harmonicos cálidos)
    function playTone(freq, startTime, duration) {
      if (!audioCtx || !isPlaying) return;

      const osc = audioCtx.createOscillator();
      const oscHarmonic = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      // Oscilador principal (onda senoidal doce)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      // Oscilador harmônico sutil (traz calor e presença acústica)
      oscHarmonic.type = 'triangle';
      oscHarmonic.frequency.setValueAtTime(freq * 2, startTime);

      // Envelope ADSR suave
      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.7, startTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.3, startTime + duration * 0.4);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(gain);
      oscHarmonic.connect(gain);
      gain.connect(masterGain);

      osc.start(startTime);
      oscHarmonic.start(startTime);
      osc.stop(startTime + duration + 0.05);
      oscHarmonic.stop(startTime + duration + 0.05);
    }

    function scheduleSequence(seq, onComplete) {
      if (!isPlaying || !audioCtx) return;

      let time = audioCtx.currentTime + 0.05;
      seq.forEach((item) => {
        playTone(item.note, time, item.dur);
        time += item.dur + item.pause;
      });

      const totalDuration = (time - audioCtx.currentTime) * 1000;
      loopTimeout = setTimeout(() => {
        if (isPlaying && onComplete) {
          onComplete();
        }
      }, totalDuration);
    }

    function playLoop() {
      if (!isPlaying) return;
      scheduleSequence(lullabyMelody, () => {
        playLoop();
      });
    }

    function start() {
      initAudio();
      isPlaying = true;
      updateUI(true);

      // Começa com a melodia de parabéns, depois entra em loop de amor infinito
      scheduleSequence(birthdayMelody, () => {
        playLoop();
      });
    }

    function stop() {
      isPlaying = false;
      if (loopTimeout) clearTimeout(loopTimeout);
      updateUI(false);
    }

    function toggle() {
      if (isPlaying) {
        stop();
      } else {
        start();
      }
    }

    function updateUI(active) {
      if (active) {
        btnMusic.classList.add('playing');
        musicStatus.textContent = 'Tocando Melodia 🎶';
      } else {
        btnMusic.classList.remove('playing');
        musicStatus.textContent = 'Música Pausada 🔇';
      }
    }

    return {
      start,
      stop,
      toggle,
      isActive: () => isPlaying,
    };
  })();

  // ==========================================================================
  // PARTICULAS DE FUNDO (Landing Canvas)
  // Brilhos dourados, estrelas cadentes suaves e nébula acolhedora
  // ==========================================================================
  function initBackgroundParticles() {
    const ctx = bgCanvas.getContext('2d');
    let particles = [];
    let width, height;

    function resize() {
      width = bgCanvas.width = window.innerWidth;
      height = bgCanvas.height = window.innerHeight;
    }

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 0.8;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4 - 0.2; // Leve subida
        this.opacity = Math.random() * 0.6 + 0.2;
        // Tons: Dourado (42°), Rosa Suave (335°), Champanhe (35°)
        const hues = [335, 345, 42, 38, 320];
        this.hue = hues[Math.floor(Math.random() * hues.length)];
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += this.pulseSpeed;
        this.currentOpacity = 0.2 + Math.sin(this.pulse) * 0.25 + 0.25;

        if (this.x < -20 || this.x > width + 20 || this.y < -20 || this.y > height + 20) {
          this.reset();
          this.y = height + 10;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 85%, 70%, ${this.currentOpacity})`;
        ctx.fill();

        // Brilho exterior sutil
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 90%, 65%, ${this.currentOpacity * 0.18})`;
        ctx.fill();
      }
    }

    function init() {
      resize();
      const count = Math.min(90, Math.floor((width * height) / 13000));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Linhas de constelação suave entre partículas próximas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(335, 70%, 65%, ${0.09 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    init();
    animate();
  }

  // ==========================================================================
  // ELEMENTOS FLUTUANTES (Balões, Corações e Estrelas na Tela Inicial)
  // ==========================================================================
  function createFloatingElements() {
    const emojis = ['🎈', '🎂', '💖', '✨', '💐', '🎉', '🥂', '🌸', '👑', '⭐'];
    const count = 18;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      el.classList.add('floating-item');
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = `${Math.random() * 96 + 2}%`;
      el.style.fontSize = `${Math.random() * 1.6 + 1.1}rem`;
      el.style.animationDelay = `${Math.random() * 8}s`;
      el.style.animationDuration = `${Math.random() * 6 + 7}s`;
      floatingElementsContainer.appendChild(el);
    }
  }

  // ==========================================================================
  // TRANSIÇÃO DE ANIVERSÁRIO (Fogos de Artifício, Chuva de Confetes e Luzes)
  // ==========================================================================
  function runTransitionAnimation() {
    return new Promise((resolve) => {
      const ctx = animationCanvas.getContext('2d');
      const width = (animationCanvas.width = window.innerWidth);
      const height = (animationCanvas.height = window.innerHeight);
      const centerX = width / 2;
      const centerY = height / 2;

      let particles = [];
      let fireworks = [];
      let phase = 0;
      let startTime = Date.now();
      let isRunning = true;

      const colors = [
        '#ff4d88',
        '#ff85c0',
        '#ffd666',
        '#ffe58f',
        '#f759ab',
        '#ffa39e',
        '#b37feb',
        '#ffffff',
        '#faad14',
        '#ffc069',
      ];

      // Desenha formato de coração no canvas
      function drawHeart(ctx, x, y, size, color, opacity) {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        const topCurveHeight = size * 0.3;
        ctx.moveTo(x, y + topCurveHeight);
        ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
        ctx.bezierCurveTo(
          x - size / 2,
          y + (size + topCurveHeight) / 2,
          x,
          y + (size + topCurveHeight) / 1.4,
          x,
          y + size
        );
        ctx.bezierCurveTo(
          x,
          y + (size + topCurveHeight) / 1.4,
          x + size / 2,
          y + (size + topCurveHeight) / 2,
          x + size / 2,
          y + topCurveHeight
        );
        ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      class AnimParticle {
        constructor(x, y, type) {
          this.x = x;
          this.y = y;
          this.type = type; // 'heart', 'star', 'confetti', 'sparkle'
          this.color = colors[Math.floor(Math.random() * colors.length)];
          this.size = Math.random() * 8 + 4;
          this.life = 1;
          this.decay = Math.random() * 0.01 + 0.005;
          this.gravity = 0.035;

          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 7 + 2;
          this.vx = Math.cos(angle) * speed;
          this.vy = Math.sin(angle) * speed;
          this.rotation = Math.random() * Math.PI * 2;
          this.rotationSpeed = (Math.random() - 0.5) * 0.12;
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;
          this.vy += this.gravity;
          this.vx *= 0.99;
          this.life -= this.decay;
          this.rotation += this.rotationSpeed;
        }

        draw() {
          if (this.life <= 0) return;
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotation);
          ctx.globalAlpha = Math.max(0, this.life);

          if (this.type === 'heart') {
            drawHeart(ctx, 0, -this.size / 2, this.size, this.color, this.life);
          } else if (this.type === 'confetti') {
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 4, this.size, this.size * 0.6);
          } else if (this.type === 'star') {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
              const a = (i * Math.PI * 2) / 5 - Math.PI / 2;
              const ox = Math.cos(a) * this.size;
              const oy = Math.sin(a) * this.size;
              const ia = a + Math.PI / 5;
              const ix = Math.cos(ia) * (this.size * 0.45);
              const iy = Math.sin(ia) * (this.size * 0.45);
              if (i === 0) ctx.moveTo(ox, oy);
              else ctx.lineTo(ox, oy);
              ctx.lineTo(ix, iy);
            }
            ctx.closePath();
            ctx.fill();
          } else {
            ctx.fillStyle = this.color;
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(0, 0, this.size * 0.6, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
        }
      }

      class Firework {
        constructor() {
          this.x = Math.random() * (width * 0.8) + width * 0.1;
          this.y = height;
          this.targetY = Math.random() * (height * 0.4) + height * 0.15;
          this.speed = Math.random() * 5 + 6;
          this.color = colors[Math.floor(Math.random() * colors.length)];
          this.exploded = false;
          this.trail = [];
        }

        update() {
          if (!this.exploded) {
            this.trail.push({ x: this.x, y: this.y, opacity: 1 });
            if (this.trail.length > 7) this.trail.shift();
            this.trail.forEach((t) => (t.opacity -= 0.14));

            this.y -= this.speed;

            if (this.y <= this.targetY) {
              this.exploded = true;
              this.explode();
            }
          }
        }

        explode() {
          const types = ['heart', 'star', 'confetti', 'sparkle'];
          const count = 45 + Math.floor(Math.random() * 30);
          for (let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            particles.push(new AnimParticle(this.x, this.y, type));
          }
        }

        draw() {
          if (!this.exploded) {
            this.trail.forEach((t) => {
              ctx.beginPath();
              ctx.arc(t.x, t.y, 2.5, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 220, 160, ${t.opacity})`;
              ctx.fill();
            });

            ctx.beginPath();
            ctx.arc(this.x, this.y, 3.5, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 18;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      function spawnConfettiRain() {
        for (let i = 0; i < 6; i++) {
          const p = new AnimParticle(Math.random() * width, -15, Math.random() > 0.4 ? 'confetti' : 'heart');
          p.vx = (Math.random() - 0.5) * 3;
          p.vy = Math.random() * 3 + 2;
          p.gravity = 0.02;
          p.decay = 0.003;
          p.size = Math.random() * 12 + 6;
          particles.push(p);
        }
      }

      let lastFirework = 0;
      let lastRain = 0;

      // Grande explosão inicial no centro
      for (let i = 0; i < 90; i++) {
        const type = ['heart', 'star', 'confetti', 'sparkle'][Math.floor(Math.random() * 4)];
        const p = new AnimParticle(centerX, centerY, type);
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 9 + 3;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed - 2.5;
        p.size = Math.random() * 14 + 5;
        p.decay = 0.006;
        particles.push(p);
      }

      function animate() {
        if (!isRunning) return;
        const elapsed = Date.now() - startTime;

        ctx.fillStyle = 'rgba(26, 10, 22, 0.18)';
        ctx.fillRect(0, 0, width, height);

        // Lançar fogos nos primeiros 3.5s
        if (elapsed < 3500) {
          if (elapsed - lastFirework > 260) {
            fireworks.push(new Firework());
            lastFirework = elapsed;
          }
        }

        // Chuva festiva de confetes
        if (elapsed > 1200 && elapsed < 4600) {
          if (elapsed - lastRain > 80) {
            spawnConfettiRain();
            lastRain = elapsed;
          }
        }

        // Revelar a mensagem de parabéns aos 1.6s
        if (elapsed > 1600 && !transitionMessage.classList.contains('show')) {
          transitionMessage.classList.add('show');
        }

        // Atualizar e desenhar fogos
        fireworks = fireworks.filter((f) => !f.exploded);
        fireworks.forEach((f) => {
          f.update();
          f.draw();
        });

        // Atualizar e desenhar partículas
        particles = particles.filter((p) => p.life > 0);
        particles.forEach((p) => {
          p.update();
          p.draw();
        });

        // Fim da transição aos 5.2s
        if (elapsed > 5200) {
          isRunning = false;
          resolve();
          return;
        }

        requestAnimationFrame(animate);
      }

      animate();
    });
  }

  // ==========================================================================
  // GERADOR DE CONFETES DINÂMICOS (Qualquer momento da página)
  // ==========================================================================
  function triggerCelebrationConfetti(sourceX, sourceY, count = 60) {
    const confettiColors = ['#ff4d88', '#ffd666', '#ff85c0', '#ffe58f', '#faad14', '#ffffff', '#b37feb'];
    const emojis = ['💖', '✨', '🎉', '🌸', '⭐', '🎈'];

    for (let i = 0; i < count; i++) {
      const confetto = document.createElement('div');
      confetto.classList.add('global-confetti');

      const isEmoji = Math.random() > 0.65;
      if (isEmoji) {
        confetto.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        confetto.style.fontSize = `${Math.random() * 1.2 + 0.9}rem`;
      } else {
        confetto.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        const sizeW = Math.random() * 10 + 6;
        const sizeH = Math.random() * 16 + 8;
        confetto.style.width = `${sizeW}px`;
        confetto.style.height = `${sizeH}px`;
        confetto.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
      }

      const startX = sourceX !== undefined ? sourceX : window.innerWidth / 2;
      const startY = sourceY !== undefined ? sourceY : window.innerHeight / 2;

      confetto.style.left = `${startX}px`;
      confetto.style.top = `${startY}px`;

      // Vetores de impulso aleatório
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 280 + 120;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity - 100; // Impulso para cima

      confetto.style.setProperty('--tx', `${tx}px`);
      confetto.style.setProperty('--ty', `${ty}px`);
      confetto.style.setProperty('--rot', `${(Math.random() - 0.5) * 720}deg`);

      document.body.appendChild(confetto);

      setTimeout(() => {
        confetto.remove();
      }, 2200);
    }
  }

  // ==========================================================================
  // INTERATIVIDADE DO BOLO: ASSOPRAR AS VELAS
  // ==========================================================================
  function setupCakeInteraction() {
    btnBlowCandles.addEventListener('click', (e) => {
      const rect = btnBlowCandles.getBoundingClientRect();
      const clickX = rect.left + rect.width / 2;
      const clickY = rect.top;

      if (!candlesBlown) {
        // Assoprou as velas
        candlesBlown = true;
        flames.forEach((flame) => {
          if (flame) flame.classList.add('extinguished');
        });

        // Mostra mensagem carinhosa de bênção
        cakeWishMessage.classList.add('active');

        // Modifica texto do botão
        blowBtnText.textContent = 'Velas Assopradas! Acender Novamente ✨';
        blowBtnIcon.textContent = '🎂';

        // Lança confetes festivos a partir do bolo
        triggerCelebrationConfetti(clickX, clickY - 60, 80);
      } else {
        // Reacender as velinhas para brincar de novo!
        candlesBlown = false;
        flames.forEach((flame) => {
          if (flame) flame.classList.remove('extinguished');
        });

        cakeWishMessage.classList.remove('active');
        blowBtnText.textContent = 'Assoprar as Velas & Fazer um Pedido';
        blowBtnIcon.textContent = '💨';

        triggerCelebrationConfetti(clickX, clickY, 30);
      }
    });
  }

  // ==========================================================================
  // CONFIGURAÇÃO DA GALERIA & FILTROS
  // ==========================================================================
  function renderGallery(items) {
    galleryGrid.innerHTML = '';

    if (items.length === 0) {
      galleryGrid.innerHTML = `
        <div class="gallery__no-results">
          <p>Nenhuma foto encontrada nesta categoria.</p>
        </div>
      `;
      return;
    }

    items.forEach((photo, index) => {
      const item = document.createElement('article');
      item.classList.add('gallery__item');
      item.tabIndex = 0;
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', `${photo.title}: clique para ver em tamanho grande`);

      item.innerHTML = `
        <div class="gallery__img-wrapper">
          <img src="${photo.src}" alt="${photo.title} - ${photo.caption}" loading="lazy" />
          <span class="gallery__card-tag">${photo.tag}</span>
        </div>
        <div class="gallery__item-content">
          <h4 class="gallery__item-title">${photo.title}</h4>
          <p class="gallery__item-caption">${photo.caption}</p>
          <div class="gallery__item-cta">
            <span>Ver foto completa</span>
            <span class="cta-arrow">→</span>
          </div>
        </div>
      `;

      item.addEventListener('click', () => {
        const fullIndex = photos.indexOf(photo);
        openLightbox(fullIndex !== -1 ? fullIndex : index);
      });

      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const fullIndex = photos.indexOf(photo);
          openLightbox(fullIndex !== -1 ? fullIndex : index);
        }
      });

      galleryGrid.appendChild(item);

      // Efeito suave de entrada escalonada
      setTimeout(() => {
        item.classList.add('animate-in');
      }, 50 + index * 60);
    });
  }

  function setupFilters() {
    const filterButtons = galleryFilter.querySelectorAll('.filter-btn');

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');
        if (category === 'all') {
          currentFilteredPhotos = [...photos];
        } else {
          currentFilteredPhotos = photos.filter((p) => p.category === category);
        }

        renderGallery(currentFilteredPhotos);
      });
    });
  }

  // ==========================================================================
  // LIGHTBOX (Visualizador de Fotos em Tela Cheia)
  // ==========================================================================
  function updateLightboxContent(index) {
    if (index < 0) index = photos.length - 1;
    if (index >= photos.length) index = 0;
    currentPhotoIndex = index;

    const photo = photos[currentPhotoIndex];
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.title;
    lightboxTitle.textContent = photo.title;
    lightboxCaption.textContent = photo.caption;
    lightboxCounter.textContent = `Foto ${currentPhotoIndex + 1} de ${photos.length}`;
  }

  function openLightbox(index) {
    updateLightboxContent(index);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function nextPhoto() {
    updateLightboxContent(currentPhotoIndex + 1);
  }

  function prevPhoto() {
    updateLightboxContent(currentPhotoIndex - 1);
  }

  function setupLightboxEvents() {
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', nextPhoto);
    lightboxPrev.addEventListener('click', prevPhoto);

    // Fechar ao clicar fora do conteúdo
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // Teclado (Setas para navegar e Esc para fechar)
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    });

    // Botão "Amei!" com chuva de coraçõezinhos
    lightboxLike.addEventListener('click', (e) => {
      const rect = lightboxLike.getBoundingClientRect();
      triggerCelebrationConfetti(rect.left + rect.width / 2, rect.top, 25);
      likeCount.textContent = '❤️ Amado!';
      setTimeout(() => {
        likeCount.textContent = 'Amei!';
      }, 2000);
    });

    // Suporte a gestos de arrasto (Swipe) no celular
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener(
      'touchstart',
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );

    lightbox.addEventListener(
      'touchend',
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      },
      { passive: true }
    );

    function handleSwipe() {
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextPhoto(); // Arrastou para a esquerda -> próxima foto
        } else {
          prevPhoto(); // Arrastou para a direita -> foto anterior
        }
      }
    }
  }

  // ==========================================================================
  // FLUXO PRINCIPAL: DA TELA INICIAL PARA A HOMENAGEM
  // ==========================================================================
  async function startSurprise() {
    btnSurprise.disabled = true;
    btnSurprise.style.pointerEvents = 'none';

    // Inicia a melodia com o gesto de clique
    try {
      BirthdaySynth.start();
    } catch (err) {
      console.warn('Áudio inicializado:', err);
    }

    // Mostra tela cheia de animação
    transitionOverlay.classList.add('active');

    // Executa a sequência de fogos e confetes
    await runTransitionAnimation();

    // Pequena pausa de contemplação
    await new Promise((r) => setTimeout(r, 1000));

    // Transição suave para a celebração principal
    transitionOverlay.style.transition = 'opacity 0.9s ease';
    transitionOverlay.style.opacity = '0';

    landing.style.display = 'none';
    celebration.classList.add('visible');

    // Inicializa os elementos da galeria
    renderGallery(photos);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Lança confetes de boas-vindas
    setTimeout(() => {
      triggerCelebrationConfetti(window.innerWidth / 2, window.innerHeight * 0.3, 70);
    }, 400);

    setTimeout(() => {
      transitionOverlay.classList.remove('active');
      transitionOverlay.style.display = 'none';
    }, 950);
  }

  // ==========================================================================
  // INICIALIZAÇÃO
  // ==========================================================================
  function init() {
    initBackgroundParticles();
    createFloatingElements();
    setupCakeInteraction();
    setupFilters();
    setupLightboxEvents();

    // Botão de abrir surpresa
    btnSurprise.addEventListener('click', startSurprise);

    // Botão flutuante de música
    btnMusic.addEventListener('click', () => {
      BirthdaySynth.toggle();
    });

    // Botão flutuante FAB de confetes
    btnConfettiFab.addEventListener('click', (e) => {
      const rect = btnConfettiFab.getBoundingClientRect();
      triggerCelebrationConfetti(rect.left + rect.width / 2, rect.top, 50);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
