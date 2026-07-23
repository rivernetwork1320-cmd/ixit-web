/* ============================================
   IXIT Enterprise Storage Website — main.js
   Interactive features & animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
     1. NAVIGATION — Sticky & Scroll Effect
     ========================================== */
  const navHeader = document.getElementById('main-nav');
  const backToTop = document.getElementById('backToTop');

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Nav scroll state
    if (scrollY > 30) {
      navHeader.classList.add('scrolled');
    } else {
      navHeader.classList.remove('scrolled');
    }

    // Back to top button
    if (scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Run once on load

  // Back to top click
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ==========================================
     2. HAMBURGER MENU (Mobile)
     ========================================== */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  // Close menu when nav link clicked
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });

  /* ==========================================
     2b. MEGA MENU — Hover Intent
     ==========================================
     The mega menu is centered on the nav-container while the trigger nav item
     (e.g. "제품") sits on the left. Moving the cursor diagonally from the
     nav item to the centered menu crosses empty space, which would end :hover
     and hide the menu mid-motion. We add a grace period on mouseleave and
     also open on cursor enter to the menu itself. */
  document.querySelectorAll('.nav-item.has-mega').forEach(item => {
    const menu = item.querySelector('.mega-menu');
    if (!menu) return;
    let closeTimer = null;
    const HIDE_DELAY = 300; // ms — grace period to reach the menu

    const open = () => {
      if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
      item.classList.add('mega-open');
    };
    const scheduleClose = () => {
      if (closeTimer) clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        item.classList.remove('mega-open');
        closeTimer = null;
      }, HIDE_DELAY);
    };

    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', scheduleClose);
    menu.addEventListener('mouseenter', open);
    menu.addEventListener('mouseleave', scheduleClose);
  });

  /* ==========================================
     3. SMOOTH SCROLL for anchor links
     ========================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ==========================================
     4. INTERSECTION OBSERVER — Animate on scroll
     ========================================== */
  const animElements = document.querySelectorAll('.animate-slide-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  animElements.forEach(el => observer.observe(el));

  /* ==========================================
     5. COUNTER ANIMATION
     ========================================== */
  const counters = document.querySelectorAll('.stat-num[data-count]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        animateCounter(el, 0, target, 1800);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  function animateCounter(el, start, end, duration) {
    const startTime = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(progress);
      const current = Math.floor(start + (end - start) * easedProgress);
      el.textContent = current.toLocaleString('ko-KR');
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  /* ==========================================
     6. PRODUCT TABS
     ========================================== */
  const productTabs = document.querySelectorAll('.product-tab');
  const productContents = document.querySelectorAll('.product-tab-content');

  productTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');

      // Update tab states
      productTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update content
      productContents.forEach(content => {
        content.classList.remove('active');
      });

      const targetContent = document.getElementById(`tab-${targetId}`);
      if (targetContent) {
        targetContent.classList.add('active');

        // Re-trigger animations for newly visible cards
        targetContent.querySelectorAll('.animate-slide-up').forEach((el, i) => {
          el.classList.remove('visible');
          setTimeout(() => {
            el.classList.add('visible');
          }, i * 80);
        });
      }
    });
  });

  /* ==========================================
     7. INDUSTRY TABS
     ========================================== */
  const industryTabBtns = document.querySelectorAll('.industry-tab-btn');
  const industryContents = document.querySelectorAll('.industry-content');

  industryTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetIndustry = btn.getAttribute('data-industry');

      industryTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      industryContents.forEach(content => {
        content.classList.remove('active');
      });

      const targetContent = document.getElementById(`industry-${targetIndustry}`);
      if (targetContent) {
        targetContent.classList.add('active');
        // Fade in animation
        targetContent.style.opacity = '0';
        targetContent.style.transform = 'translateY(15px)';
        requestAnimationFrame(() => {
          targetContent.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          targetContent.style.opacity = '1';
          targetContent.style.transform = 'translateY(0)';
        });
      }
    });
  });

  /* ==========================================
     8. PARTICLES in Hero Section
     ========================================== */
  const heroParticles = document.getElementById('heroParticles');
  if (heroParticles) {
    const count = 50;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        animation-delay: ${Math.random() * 8}s;
        animation-duration: ${Math.random() * 6 + 5}s;
        opacity: ${Math.random() * 0.5};
      `;
      heroParticles.appendChild(particle);
    }
  }

  /* ==========================================
     9. STORAGE RACK — Drive Activity Animation
     ========================================== */
  const drives = document.querySelectorAll('.drive.active');
  drives.forEach((drive, index) => {
    drive.style.setProperty('--i', index.toString());
    // Random blink delays
    if (drive.querySelector('::before') || true) {
      drive.style.animationDelay = `${Math.random() * 2}s`;
    }
  });

  // Simulate live activity on the rack
  setInterval(() => {
    const allDrives = document.querySelectorAll('.drive.active');
    const randomDrive = allDrives[Math.floor(Math.random() * allDrives.length)];
    if (randomDrive) {
      randomDrive.style.boxShadow = '0 0 16px rgba(94, 196, 0, 0.55)'; /* QSAN Green glow */
      setTimeout(() => {
        randomDrive.style.boxShadow = '';
      }, 500);
    }
  }, 800);

  /* ==========================================
     10. METRIC VALUE — Animate on scroll
     ========================================== */
  const metricVals = document.querySelectorAll('.i-m-val, .r-val');
  const metricObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.5s ease forwards';
        metricObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  metricVals.forEach(el => metricObserver.observe(el));

  /* ==========================================
     11. CONTACT FORM SUBMISSION
     ========================================== */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('.btn-contact-submit');
      const originalText = submitBtn.innerHTML;

      // Loading state
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 전송 중...';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';

      // Simulate API call
      setTimeout(() => {
        submitBtn.style.display = 'none';
        formSuccess.style.display = 'flex';
        contactForm.reset();

        // Reset button after 5s (optional)
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
          submitBtn.style.display = 'flex';
          formSuccess.style.display = 'none';
        }, 5000);
      }, 1500);
    });
  }

  /* ==========================================
     12. HOVER TILT EFFECT on Product Cards
     ========================================== */
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;
      card.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.4s ease';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.1s ease';
    });
  });

  /* ==========================================
     13. NAV ACTIVE STATE on scroll
     ========================================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const activeNavObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${id}`) {
            // Subtle highlight for active section
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => activeNavObserver.observe(section));

  /* ==========================================
     14. FLOATING SPEC CARDS PARALLAX
     ========================================== */
  const heroSection = document.getElementById('hero');
  const specCards = document.querySelectorAll('.spec-card');

  if (heroSection && specCards.length > 0) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        specCards.forEach((card, i) => {
          const speed = (i % 2 === 0) ? 0.05 : -0.05;
          card.style.transform = `translateY(${scrolled * speed}px)`;
        });
      }
    }, { passive: true });
  }

  /* ==========================================
     15. TYPED EFFECT for Hero Title (Optional accent)
     ========================================== */
  const heroAccent = document.querySelector('.hero-title-accent');
  if (heroAccent) {
    const words = ['Solutions', 'Innovation', 'Excellence', 'Performance'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimer;

    function typeEffect() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        heroAccent.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        heroAccent.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? 80 : 130;

      if (!isDeleting && charIndex === currentWord.length) {
        delay = 2500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
      }

      typingTimer = setTimeout(typeEffect, delay);
    }

    // Start typing after initial animation
    setTimeout(typeEffect, 2000);
  }

  /* ==========================================
     16. WHY CARD — Staggered entrance
     ========================================== */
  const whyCards = document.querySelectorAll('.why-card');
  whyCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  });

  const whyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const idx = Array.from(whyCards).indexOf(entry.target);
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, idx * 90);
        whyObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  whyCards.forEach(card => whyObserver.observe(card));

  /* ==========================================
     17. RACK DRIVE — live simulation
     ========================================== */
  const metricValue = document.querySelector('.metric-value');
  if (metricValue) {
    const iopsValues = ['1.2M', '1.18M', '1.22M', '1.3M', '1.25M', '1.19M', '1.28M'];
    let iopsIndex = 0;
    setInterval(() => {
      iopsIndex = (iopsIndex + 1) % iopsValues.length;
      metricValue.style.transition = 'opacity 0.2s ease';
      metricValue.style.opacity = '0';
      setTimeout(() => {
        metricValue.textContent = iopsValues[iopsIndex];
        metricValue.style.opacity = '1';
      }, 200);
    }, 2000);
  }

  /* ==========================================
     18. SCROLL PROGRESS INDICATOR
     ========================================== */
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    width: 0%;
    background: linear-gradient(90deg, #5EC400, #8FE000);
    z-index: 9999;
    transition: width 0.1s linear;
    pointer-events: none;
    box-shadow: 0 0 8px rgba(94, 196, 0, 0.6);
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });

  /* ==========================================
     19. IMAGE LAZY LOADING
     ========================================== */
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          imgObserver.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => imgObserver.observe(img));
  }

  /* ==========================================
     20. INITIAL PAGE LOAD ANIMATION
     ========================================== */
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';

  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
  });

  // Trigger visible on load for hero elements
  setTimeout(() => {
    document.querySelectorAll('.animate-fade-up, .animate-fade-left').forEach(el => {
      el.style.animationPlayState = 'running';
    });
  }, 100);

  console.log('✅ IXIT Enterprise Storage Website — Ready');
  console.log('🏢 QSAN Official Korea Distributor — IXIT Co., Ltd.');
});