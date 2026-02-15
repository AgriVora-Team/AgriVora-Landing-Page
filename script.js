// ===================================
// MOBILE MENU TOGGLE
// ===================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// ===================================
// SMOOTH SCROLL FOR NAVIGATION
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===================================
// FAQ ACCORDION
// ===================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
const animatedElements = document.querySelectorAll(
    '.step-card, .feature-card, .screenshot-card, .use-case-card, .benefit-item'
);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ===================================
// DYNAMIC PHONE MOCKUP CONTENT
// ===================================
function createPhoneMockupContent() {
    const heroMockup = document.getElementById('hero-mockup');

    if (heroMockup) {
        heroMockup.innerHTML = `
            <div style="height: 100%; display: flex; flex-direction: column; overflow: hidden;">
                <div style="flex: 1; background: url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=400&auto=format&fit=crop') center/cover; position: relative;">
                    <div style="position: absolute; top: 16px; left: 16px; right: 16px; display: flex; justify-content: space-between; align-items: center;">
                        <span style="background: rgba(0,0,0,0.5); color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px;">AgriVora AI</span>
                        <span style="background: rgba(45, 122, 62, 0.9); color: white; padding: 4px 8px; border-radius: 50%; font-size: 12px;">GPS</span>
                    </div>
                    <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);">
                        <div style="color: white; font-weight: 600;">Analyzing Soil...</div>
                    </div>
                </div>
                <div style="background: white; padding: 20px; border-top-left-radius: 24px; border-top-right-radius: 24px; margin-top: -20px; position: relative; z-index: 2;">
                    <div style="display: flex; gap: 12px; margin-bottom: 20px;">
                        <div style="flex: 1; background: #F0F9F4; padding: 12px; border-radius: 12px; text-align: center;">
                            <div style="font-size: 10px; color: #757575;">Texture</div>
                            <div style="font-weight: 600; color: #2D7A3E;">Loamy</div>
                        </div>
                        <div style="flex: 1; background: #FFF8E1; padding: 12px; border-radius: 12px; text-align: center;">
                            <div style="font-size: 10px; color: #757575;">pH Level</div>
                            <div style="font-weight: 600; color: #F59E0B;">6.5</div>
                        </div>
                    </div>
                    <div style="font-size: 14px; font-weight: 600; margin-bottom: 12px;">Recommended Crops</div>
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding: 8px; border: 1px solid #E0E0E0; border-radius: 12px;">
                        <div style="width: 40px; height: 40px; background: #E8F5E9; border-radius: 8px; display: flex; align-items: center; justify-content: center;">🌾</div>
                        <div style="flex: 1;">
                            <div style="font-size: 14px; font-weight: 500;">Paddy (Rice)</div>
                            <div style="height: 4px; background: #E0E0E0; border-radius: 2px; margin-top: 6px;">
                                <div style="width: 95%; height: 100%; background: #2D7A3E; border-radius: 2px;"></div>
                            </div>
                        </div>
                        <div style="font-size: 12px; font-weight: 600; color: #2D7A3E;">95%</div>
                    </div>
                    <button style="width: 100%; padding: 12px; background: #2D7A3E; color: white; border: none; border-radius: 12px; font-weight: 600; font-size: 14px;">View Full Report</button>
                </div>
            </div>
        `;
    }
}

// ===================================
// SCREENSHOT PLACEHOLDERS
// ===================================
function createScreenshotContent() {
    const screenshots = [
        {
            id: 'screenshot-1',
            img: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=400&auto=format&fit=crop',
            title: 'Scan Soil',
            subtitle: 'AI Analysis'
        },
        {
            id: 'screenshot-2',
            img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=400&auto=format&fit=crop',
            title: 'Measure pH',
            subtitle: 'IoT Sensor'
        },
        {
            id: 'screenshot-3',
            img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=400&auto=format&fit=crop',
            title: 'Get Top Crops',
            subtitle: 'Ranked List'
        },
        {
            id: 'screenshot-4',
            img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=400&auto=format&fit=crop',
            title: 'Map View',
            subtitle: 'Data Points'
        }
    ];

    screenshots.forEach(screen => {
        const element = document.getElementById(screen.id);
        if (element) {
            element.innerHTML = `
                <div style="height: 100%; width: 100%; background: url('${screen.img}') center/cover; position: relative;">
                    <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);">
                        <div style="position: absolute; bottom: 20px; left: 0; right: 0; text-align: center; color: white;">
                            <div style="font-size: 16px; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">${screen.title}</div>
                            <div style="font-size: 12px; opacity: 0.9;">${screen.subtitle}</div>
                        </div>
                    </div>
                    <div style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.3); width: 20px; height: 20px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.5);"></div>
                </div>
            `;
        }
    });
}

// ===================================
// BUTTON CLICK HANDLERS
// ===================================
const downloadButtons = document.querySelectorAll('.btn-primary');
downloadButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.textContent.includes('Download')) {
            e.preventDefault();
            alert('🎉 Thank you for your interest! The AgriVora app will be available soon on Google Play Store and Apple App Store.');
        }
    });
});

const demoButtons = document.querySelectorAll('.btn-secondary');
demoButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.textContent.includes('Demo') || btn.textContent.includes('How It Works')) {
            e.preventDefault();
            const howItWorksSection = document.getElementById('how-it-works');
            if (howItWorksSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = howItWorksSection.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===================================
// INITIALIZE ON LOAD
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    createPhoneMockupContent();
    createScreenshotContent();

    // Add stagger animation delay to cards
    const cards = document.querySelectorAll('.step-card, .feature-card');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});

// ===================================
// PERFORMANCE: LAZY LOAD IMAGES
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// ACCESSIBILITY: KEYBOARD NAVIGATION
// ===================================
document.addEventListener('keydown', (e) => {
    // Close FAQ on Escape
    if (e.key === 'Escape') {
        const activeFaq = document.querySelector('.faq-item.active');
        if (activeFaq) {
            activeFaq.classList.remove('active');
        }
    }
});

// ===================================
// STATS COUNTER ANIMATION
// ===================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.dataset.suffix || '');
        }
    }, 16);
}

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            const targetValue = parseInt(statNumber.textContent);
            animateCounter(statNumber, targetValue);
            statsObserver.unobserve(statNumber);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});
