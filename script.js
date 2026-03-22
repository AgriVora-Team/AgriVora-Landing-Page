// ===================================
// Mobile menu toggle
// ===================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
});

// ===================================
// Smooth scroll (header offset) & Navbar active state
// ===================================
const navbar = document.querySelector('.navbar');
const navHeight = navbar ? navbar.offsetHeight : 0;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#' || href === '#demo') {
            // Let demo overlay or simple # handle it if empty
        }

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Navbar scroll logic
function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });
handleNavbarScroll();

// ===================================
// FAQ Accordion
// ===================================
const faqItems = document.querySelectorAll('.faq-accordion');

faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    const content = item.querySelector('.faq-content');

    btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other
        faqItems.forEach(other => {
            other.classList.remove('active');
            const otherContent = other.querySelector('.faq-content');
            if (otherContent) otherContent.style.height = '0px';
        });

        if (!isActive) {
            item.classList.add('active');
            content.style.height = content.scrollHeight + 'px';
        }
    });
});

// ===================================
// Scroll Reveal Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
});

// ===================================
// Video Overlay Click
// ===================================
const videoOverlay = document.querySelector('.video-overlay');
if (videoOverlay) {
    videoOverlay.addEventListener('click', () => {
        videoOverlay.style.display = 'none';

        // Find iframe inside wrapper
        const iframe = videoOverlay.parentElement.querySelector('iframe');
        if (iframe) {
            // Append autoplay=1 to the iframe source (for youtube/vimeo compatibility usually)
            const src = iframe.getAttribute('src');
            if (src && src !== "about:blank") {
                const joiner = src.includes('?') ? '&' : '?';
                iframe.setAttribute('src', `${src}${joiner}autoplay=1`);
            }
        }
    });
}

// ===================================
// Stats Counter Animation
// ===================================
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // Easing out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        let curr = Math.floor(easeProgress * (end - start) + start);

        // If string had a + or K
        const originalText = obj.getAttribute('data-original');
        if (originalText.includes('%')) curr = curr + '%';
        else if (originalText.includes('+')) curr = curr + '+';
        else if (originalText.includes('K+')) curr = curr + 'K+';

        obj.innerHTML = curr;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            obj.innerHTML = originalText;
        }
    };
    window.requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const originalValue = el.textContent.trim();
            el.setAttribute('data-original', originalValue);

            let targetValue = parseFloat(originalValue.replace(/[^0-9.]/g, ''));
            if (originalValue.includes('K')) {
                // If it's meant to be K, targetValue is just the number (1)
                // We handle 'K' appended in the animateValue function.
            }
            if (!isNaN(targetValue)) {
                animateValue(el, 0, targetValue, 2000);
            }
            statsObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// ===================================
// Dynamic Phone Mockup Content (Hero)
// ===================================
function createPhoneMockupContent() {
    const heroMockup = document.getElementById('hero-mockup');
    if (!heroMockup) return;

    heroMockup.innerHTML = `
      <div style="height: 100%; display: flex; flex-direction: column; overflow: hidden; background: #fff; position: relative;">
        <!-- Camera view background -->
        <div style="flex: 1; background: url('https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=400&auto=format&fit=crop') center/cover; position: relative;">
          
          <!-- Top Bar -->
          <div style="position: absolute; top: 20px; left: 20px; right: 20px; display: flex; justify-content: space-between; align-items: center;">
            <span style="background: rgba(0,0,0,0.6); backdrop-filter: blur(8px); color: white; padding: 6px 14px; border-radius: 999px; font-size: 11px; font-weight: 600; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-camera"></i> Live Scan</span>
            <span style="background: rgba(47, 93, 80, 0.9); color: white; padding: 6px 14px; border-radius: 999px; font-size: 11px; font-weight: 700; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-location-arrow"></i> Central Prov.</span>
          </div>

          <!-- Bottom gradient overlay -->
          <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 100px; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);"></div>
        </div>
        
        <!-- Bottom Panel -->
        <div style="background: white; padding: 24px 20px; border-top-left-radius: 30px; border-top-right-radius: 30px; margin-top: -30px; position: relative; z-index: 2; box-shadow: 0 -10px 40px rgba(0,0,0,0.15);">
          
          <!-- Quick Stats -->
          <div style="display: flex; gap: 12px; margin-bottom: 20px;">
            <div style="flex: 1; background: #E6EFE6; padding: 14px; border-radius: 16px; text-align: center; border: 1px solid rgba(47, 93, 80, 0.1);">
              <div style="font-size: 10px; color: #788578; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 4px;">SOIL TEXTURE</div>
              <div style="font-weight: 800; color: #2F5D50; font-size: 15px; font-family: 'Outfit', sans-serif;">Loamy</div>
            </div>
            <div style="flex: 1; background: #FFF4E6; padding: 14px; border-radius: 16px; text-align: center; border: 1px solid rgba(184, 133, 106, 0.2);">
              <div style="font-size: 10px; color: #788578; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 4px;">PH SENSOR</div>
              <div style="font-weight: 800; color: #B8856A; font-size: 15px; font-family: 'Outfit', sans-serif;">6.8 (Ideal)</div>
            </div>
          </div>
          
          <!-- Recommendation List -->
          <h4 style="font-size: 15px; font-weight: 800; margin-bottom: 12px; color: #152C21; font-family: 'Outfit', sans-serif;">Top Recommendations</h4>
          
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; padding: 12px; border: 1px solid rgba(47, 93, 80, 0.1); border-radius: 18px; background: #F8F9F8;">
            <div style="width: 44px; height: 44px; background: #E6EFE6; border-radius: 12px; display: grid; place-items: center; font-size: 20px;">🌾</div>
            <div style="flex: 1;">
              <div style="font-size: 14px; font-weight: 700; color: #152C21; margin-bottom: 6px;">Paddy (Rice)</div>
              <div style="height: 6px; background: rgba(47, 93, 80, 0.1); border-radius: 999px; overflow:hidden;">
                <div style="width: 95%; height: 100%; background: linear-gradient(90deg, #2F5D50, #6B8E23); border-radius: 999px;"></div>
              </div>
            </div>
            <div style="font-size: 13px; font-weight: 900; color: #2F5D50; font-family: 'Outfit', sans-serif;">95%</div>
          </div>
          
          <button style="width: 100%; padding: 16px; background: linear-gradient(135deg, #2F5D50, #25473D); color: #FFF; border: none; border-radius: 16px; font-weight: 700; font-family: 'Outfit', sans-serif; font-size: 14px; cursor: pointer; box-shadow: 0 8px 24px rgba(47, 93, 80, 0.25);">View Full Report</button>
        </div>
      </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    createPhoneMockupContent();
});