// =============================================
// FELIZ DIA DAS MÃES - Scripts
// =============================================

(function () {
  'use strict';

  // ---- DOM Elements ----
  const landing = document.getElementById('landing');
  const btnSurprise = document.getElementById('btnSurprise');
  const transitionOverlay = document.getElementById('transitionOverlay');
  const transitionMessage = document.getElementById('transitionMessage');
  const animationCanvas = document.getElementById('animationCanvas');
  const bgCanvas = document.getElementById('bgCanvas');
  const gallery = document.getElementById('gallery');
  const galleryGrid = document.getElementById('galleryGrid');
  const galleryEmpty = document.getElementById('galleryEmpty');
  const floatingHeartsContainer = document.getElementById('floatingHearts');

  // =============================================
  // BACKGROUND PARTICLES (Landing Page)
  // =============================================
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
        this.size = Math.random() * 3 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.hue = Math.random() > 0.5 ? 330 : 340; // Rose tones
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += 0.02;
        this.opacity = 0.1 + Math.sin(this.pulse) * 0.15 + 0.15;

        if (this.x < -10 || this.x > width + 10 || this.y < -10 || this.y > height + 10) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.opacity})`;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.opacity * 0.15})`;
        ctx.fill();
      }
    }

    function init() {
      resize();
      const count = Math.min(80, Math.floor((width * height) / 15000));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(330, 60%, 60%, ${0.08 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
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

    window.addEventListener('resize', () => {
      resize();
    });

    init();
    animate();
  }

  // =============================================
  // FLOATING HEARTS (Landing Background)
  // =============================================
  function createFloatingHearts() {
    const hearts = ['💕', '💖', '💗', '💝', '🌸', '🌷', '✨', '🦋'];
    const count = 15;

    for (let i = 0; i < count; i++) {
      const heart = document.createElement('span');
      heart.classList.add('floating-heart');
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.fontSize = `${Math.random() * 1.5 + 0.8}rem`;
      heart.style.animationDelay = `${Math.random() * 6}s`;
      heart.style.animationDuration = `${Math.random() * 4 + 5}s`;
      floatingHeartsContainer.appendChild(heart);
    }
  }

  // =============================================
  // TRANSITION ANIMATION (Hearts/Particles Explosion)
  // =============================================
  function runTransitionAnimation() {
    return new Promise((resolve) => {
      const ctx = animationCanvas.getContext('2d');
      const width = (animationCanvas.width = window.innerWidth);
      const height = (animationCanvas.height = window.innerHeight);
      const centerX = width / 2;
      const centerY = height / 2;

      let particles = [];
      let fireworks = [];
      let phase = 0; // 0 = explosion, 1 = hearts rain, 2 = spiral
      let startTime = Date.now();
      let animRunning = true;

      // Color palette
      const colors = [
        '#eb2f96', '#f759ab', '#ff85c0', '#ffadd2',
        '#ffd666', '#ffe58f', '#ff7a45', '#ffa39e',
        '#b37feb', '#d3adf7', '#fff0f5', '#ffffff',
      ];

      // ---- Heart shape helper ----
      function drawHeart(ctx, x, y, size, color, opacity) {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        const topCurveHeight = size * 0.3;
        ctx.moveTo(x, y + topCurveHeight);
        // Left curve
        ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
        ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + (size + topCurveHeight) / 1.4, x, y + size);
        // Right curve
        ctx.bezierCurveTo(x, y + (size + topCurveHeight) / 1.4, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
        ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      // ---- Particle class ----
      class AnimParticle {
        constructor(x, y, type) {
          this.x = x;
          this.y = y;
          this.type = type; // 'circle', 'heart', 'star', 'sparkle'
          this.color = colors[Math.floor(Math.random() * colors.length)];
          this.size = Math.random() * 8 + 3;
          this.life = 1;
          this.decay = Math.random() * 0.012 + 0.004;
          this.gravity = 0.02;

          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 6 + 2;
          this.vx = Math.cos(angle) * speed;
          this.vy = Math.sin(angle) * speed;
          this.rotation = Math.random() * Math.PI * 2;
          this.rotationSpeed = (Math.random() - 0.5) * 0.1;
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
          ctx.globalAlpha = this.life;

          if (this.type === 'heart') {
            drawHeart(ctx, 0, -this.size / 2, this.size, this.color, this.life);
          } else if (this.type === 'star') {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
              const angle = (i * Math.PI * 2) / 5 - Math.PI / 2;
              const outerX = Math.cos(angle) * this.size;
              const outerY = Math.sin(angle) * this.size;
              const innerAngle = angle + Math.PI / 5;
              const innerX = Math.cos(innerAngle) * (this.size * 0.4);
              const innerY = Math.sin(innerAngle) * (this.size * 0.4);
              if (i === 0) ctx.moveTo(outerX, outerY);
              else ctx.lineTo(outerX, outerY);
              ctx.lineTo(innerX, innerY);
            }
            ctx.closePath();
            ctx.fill();
          } else if (this.type === 'sparkle') {
            ctx.fillStyle = this.color;
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 15;
            ctx.beginPath();
            ctx.arc(0, 0, this.size * 0.5, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.fill();

            // Glow
            ctx.beginPath();
            ctx.arc(0, 0, this.size * 2, 0, Math.PI * 2);
            ctx.fillStyle = this.color.replace(')', ', 0.1)').replace('rgb', 'rgba');
            ctx.fill();
          }

          ctx.restore();
        }
      }

      // ---- Firework class ----
      class Firework {
        constructor() {
          this.x = Math.random() * width;
          this.y = height;
          this.targetY = Math.random() * (height * 0.5) + height * 0.1;
          this.speed = Math.random() * 4 + 5;
          this.color = colors[Math.floor(Math.random() * colors.length)];
          this.exploded = false;
          this.trail = [];
        }

        update() {
          if (!this.exploded) {
            this.trail.push({ x: this.x, y: this.y, opacity: 1 });
            if (this.trail.length > 8) this.trail.shift();
            this.trail.forEach((t) => (t.opacity -= 0.12));

            this.y -= this.speed;

            if (this.y <= this.targetY) {
              this.exploded = true;
              this.explode();
            }
          }
        }

        explode() {
          const types = ['heart', 'star', 'circle', 'sparkle'];
          const count = 40 + Math.floor(Math.random() * 30);
          for (let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            particles.push(new AnimParticle(this.x, this.y, type));
          }
        }

        draw() {
          if (!this.exploded) {
            // Trail
            this.trail.forEach((t) => {
              ctx.beginPath();
              ctx.arc(t.x, t.y, 2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 200, 220, ${t.opacity})`;
              ctx.fill();
            });

            // Firework head
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 20;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      // ---- Hearts rain ----
      function spawnHeartsRain() {
        for (let i = 0; i < 5; i++) {
          const p = new AnimParticle(
            Math.random() * width,
            -20,
            'heart'
          );
          p.vx = (Math.random() - 0.5) * 2;
          p.vy = Math.random() * 2 + 1;
          p.gravity = 0.01;
          p.decay = 0.003;
          p.size = Math.random() * 15 + 8;
          particles.push(p);
        }
      }

      // ---- Spiral burst ----
      function spawnSpiralBurst() {
        const count = 60;
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 6;
          const radius = i * 2;
          const p = new AnimParticle(centerX, centerY, i % 3 === 0 ? 'heart' : 'sparkle');
          p.vx = Math.cos(angle) * (radius * 0.05 + 1);
          p.vy = Math.sin(angle) * (radius * 0.05 + 1);
          p.gravity = 0;
          p.decay = 0.008;
          p.size = Math.random() * 10 + 4;
          particles.push(p);
        }
      }

      // ---- Main animation loop ----
      let lastFirework = 0;
      let lastRain = 0;

      function animate() {
        if (!animRunning) return;

        const elapsed = Date.now() - startTime;
        ctx.fillStyle = 'rgba(26, 10, 20, 0.15)';
        ctx.fillRect(0, 0, width, height);

        // Phase 0: Fireworks (0-3s)
        if (elapsed < 3000) {
          if (elapsed - lastFirework > 300) {
            fireworks.push(new Firework());
            lastFirework = elapsed;
          }
        }

        // Phase 1: Hearts rain (1.5s-4s)
        if (elapsed > 1500 && elapsed < 4000) {
          if (elapsed - lastRain > 100) {
            spawnHeartsRain();
            lastRain = elapsed;
          }
        }

        // Phase 2: Final spiral burst (3.5s)
        if (phase === 0 && elapsed > 3500) {
          phase = 1;
          spawnSpiralBurst();
        }

        // Show message at 2s
        if (elapsed > 2000 && !transitionMessage.classList.contains('show')) {
          transitionMessage.classList.add('show');
        }

        // Update and draw fireworks
        fireworks = fireworks.filter((f) => !f.exploded || false);
        fireworks.forEach((f) => {
          f.update();
          f.draw();
        });

        // Update and draw particles
        particles = particles.filter((p) => p.life > 0);
        particles.forEach((p) => {
          p.update();
          p.draw();
        });

        // End animation at 5.5s
        if (elapsed > 5500) {
          animRunning = false;
          resolve();
          return;
        }

        requestAnimationFrame(animate);
      }

      // Initial big burst from center
      for (let i = 0; i < 80; i++) {
        const type = ['heart', 'star', 'sparkle', 'circle'][Math.floor(Math.random() * 4)];
        const p = new AnimParticle(centerX, centerY, type);
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 3;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed - 2;
        p.size = Math.random() * 12 + 4;
        p.decay = 0.006;
        particles.push(p);
      }

      animate();
    });
  }

  // =============================================
  // GALLERY SETUP
  // =============================================

  // Configure your photos here!
  // Add objects with { src: 'path/to/image', caption: 'Description' }
  const photos = [
    { src: 'src/assets/1000022594.jpg', caption: '💕' },
    { src: 'src/assets/1000022653.jpg', caption: '💖' },
    { src: 'src/assets/1000022656.jpg', caption: '🌸' },
    { src: 'src/assets/1000022800.jpg', caption: '💗' },
    { src: 'src/assets/1000022812.jpg', caption: '✨' },
    { src: 'src/assets/1000023257.jpg', caption: '💝' },
    { src: 'src/assets/1000023303.jpg', caption: '🌷' },
    { src: 'src/assets/1000023331.jpg', caption: '💐' },
    { src: 'src/assets/1000023335.jpg', caption: '💕' },
    { src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_163.jpg', caption: '💖' },
    { src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_176.jpg', caption: '🌸' },
    { src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_230.jpg', caption: '💗' },
    { src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_234.jpg', caption: '✨' },
    { src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_255.jpg', caption: '💝' },
    { src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_257.jpg', caption: '🌷' },
    { src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_383.jpg', caption: '💐' },
    { src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_398.png', caption: '💕' },
    { src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_413.jpg', caption: '💖' },
    { src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_422.jpg', caption: '🌸' },
    { src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_444.jpg', caption: '💗' },
    { src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_450.jpg', caption: '✨' },
    { src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_484.jpg', caption: '💝' },
    { src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_493.jpg', caption: '🌷' },
    { src: 'src/assets/ea9cc598-78a9-4e72-8bf2-1f0bd163b0b2-1_all_518.jpg', caption: '💐' },
  ];

  function setupGallery() {
    if (photos.length === 0) {
      galleryGrid.style.display = 'none';
      galleryEmpty.style.display = 'block';
      return;
    }

    galleryEmpty.style.display = 'none';
    galleryGrid.style.display = 'grid';

    photos.forEach((photo, index) => {
      const item = document.createElement('div');
      item.classList.add('gallery__item');
      item.style.transitionDelay = `${index * 0.1}s`;
      item.innerHTML = `
        <img src="${photo.src}" alt="${photo.caption || 'Foto'}" loading="lazy" />
        <div class="gallery__item-overlay">
          <p class="gallery__item-caption">${photo.caption || ''}</p>
        </div>
      `;

      item.addEventListener('click', () => openLightbox(photo));
      galleryGrid.appendChild(item);

      // Animate items in with intersection observer
      setTimeout(() => {
        item.classList.add('animate-in');
      }, 200 + index * 150);
    });
  }

  // =============================================
  // LIGHTBOX
  // =============================================
  let lightboxEl = null;

  function createLightbox() {
    lightboxEl = document.createElement('div');
    lightboxEl.classList.add('lightbox');
    lightboxEl.id = 'lightbox';
    lightboxEl.innerHTML = `
      <button class="lightbox__close" id="lightboxClose" aria-label="Fechar">✕</button>
      <img class="lightbox__img" id="lightboxImg" src="" alt="" />
      <p class="lightbox__caption" id="lightboxCaption"></p>
    `;
    document.body.appendChild(lightboxEl);

    lightboxEl.querySelector('#lightboxClose').addEventListener('click', closeLightbox);
    lightboxEl.addEventListener('click', (e) => {
      if (e.target === lightboxEl) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  function openLightbox(photo) {
    if (!lightboxEl) createLightbox();
    const img = lightboxEl.querySelector('#lightboxImg');
    const caption = lightboxEl.querySelector('#lightboxCaption');
    img.src = photo.src;
    img.alt = photo.caption || '';
    caption.textContent = photo.caption || '';
    lightboxEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (lightboxEl) {
      lightboxEl.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // =============================================
  // MAIN FLOW
  // =============================================
  async function startSurprise() {
    // Disable button
    btnSurprise.disabled = true;
    btnSurprise.style.pointerEvents = 'none';

    // Show transition overlay
    transitionOverlay.classList.add('active');

    // Run the animation
    await runTransitionAnimation();

    // Wait a moment then transition to gallery
    await new Promise((r) => setTimeout(r, 1200));

    // Fade out transition
    transitionOverlay.style.transition = 'opacity 1s ease';
    transitionOverlay.style.opacity = '0';

    // Hide landing, show gallery
    landing.style.display = 'none';

    gallery.classList.add('visible');
    setupGallery();

    // Remove overlay after fade
    setTimeout(() => {
      transitionOverlay.classList.remove('active');
      transitionOverlay.style.display = 'none';
    }, 1000);
  }

  // =============================================
  // INIT
  // =============================================
  function init() {
    initBackgroundParticles();
    createFloatingHearts();

    btnSurprise.addEventListener('click', startSurprise);
  }

  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
