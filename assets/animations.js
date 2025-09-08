// Advanced animations for Subhajit Maji

class AdvancedAnimations {
    constructor() {
        this.particles = [];
        this.fireParticles = [];
        this.isActive = false;
        this.init();
    }

    init() {
        this.createScanlines();
        this.createVignette();
        this.createScreenDistortion();
        this.setupEventListeners();
    }

    // Create scanlines
    createScanlines() {
        const scanlines = document.createElement('div');
        scanlines.className = 'scanlines';
        document.body.appendChild(scanlines);
    }

    // Create vignette
    createVignette() {
        const vignette = document.createElement('div');
        vignette.className = 'vignette';
        document.body.appendChild(vignette);
    }

    // Create screen distortion
    createScreenDistortion() {
        const distortion = document.createElement('div');
        distortion.className = 'screen-distortion';
        document.body.appendChild(distortion);
    }

    // Set up event listeners
    setupEventListeners() {
        // Parallax effect on mouse movement
        document.addEventListener('mousemove', (e) => {
            this.handleMouseMove(e);
        });

        // Click effect with shockwave
        document.addEventListener('click', (e) => {
            this.createShockwave(e);
        });

        // Keyboard press effect
        document.addEventListener('keydown', (e) => {
            this.handleKeyPress(e);
        });
    }

    // Handle mouse movement
    handleMouseMove(e) {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const moveX = (clientX - centerX) / centerX * 10;
        const moveY = (clientY - centerY) / centerY * 10;

        // Parallax effect on content
        const content = document.querySelector('.content');
        if (content) {
            content.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }

        // Create trail particles
        this.createTrailParticle(clientX, clientY);
    }

    // Create trail particles
    createTrailParticle(x, y) {
        if (!this.isActive) return;

        const particle = document.createElement('div');
        particle.className = 'advanced-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.animationDuration = (Math.random() * 2 + 1) + 's';
        
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 3000);
    }

    // Create shockwave
    createShockwave(e) {
        const shockwave = document.createElement('div');
        shockwave.style.position = 'fixed';
        shockwave.style.left = e.clientX + 'px';
        shockwave.style.top = e.clientY + 'px';
        shockwave.style.width = '0px';
        shockwave.style.height = '0px';
        shockwave.style.border = '2px solid rgba(255, 77, 77, 0.8)';
        shockwave.style.borderRadius = '50%';
        shockwave.style.pointerEvents = 'none';
        shockwave.style.zIndex = '9999';
        shockwave.style.transform = 'translate(-50%, -50%)';
        
        document.body.appendChild(shockwave);

        // Animate shockwave
        let size = 0;
        const animate = () => {
            size += 5;
            shockwave.style.width = size + 'px';
            shockwave.style.height = size + 'px';
            shockwave.style.opacity = 1 - (size / 200);

            if (size < 200) {
                requestAnimationFrame(animate);
            } else {
                shockwave.remove();
            }
        };
        animate();
    }

    // Handle keyboard presses
    handleKeyPress(e) {
        // Vibration effect on important keys
        if (['Enter', 'Space', 'Escape'].includes(e.code)) {
            document.body.classList.add('vibrate');
            setTimeout(() => {
                document.body.classList.remove('vibrate');
            }, 300);
        }
    }

    // Start fire particle system
    startFireParticles() {
        this.isActive = true;
        setInterval(() => {
            this.createFireParticle();
        }, 200);
    }

    // Create fire particles
    createFireParticle() {
        if (!this.isActive) return;

        const particle = document.createElement('div');
        particle.className = 'fire-particle';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 4000);
    }

    // Holographic text animation
    animateHolographicText(element) {
        element.classList.add('holographic');
        setTimeout(() => {
            element.classList.remove('holographic');
        }, 3000);
    }

    // Glitch animation
    animateGlitch(element) {
        element.classList.add('glitch');
        element.setAttribute('data-text', element.textContent);
        setTimeout(() => {
            element.classList.remove('glitch');
        }, 2000);
    }

    // Neon animation
    animateNeon(element) {
        element.classList.add('neon-text');
        setTimeout(() => {
            element.classList.remove('neon-text');
        }, 3000);
    }

    // 3D text animation
    animate3DText(element) {
        element.classList.add('text-3d');
        setTimeout(() => {
            element.classList.remove('text-3d');
        }, 2000);
    }

    // Morphing animation
    animateMorphing(element) {
        element.classList.add('morph-button');
        setTimeout(() => {
            element.classList.remove('morph-button');
        }, 1000);
    }

    // Hover distortion animation
    animateDistortion(element) {
        element.classList.add('distort-on-hover');
    }

    // Important pulse animation
    animatePulseImportant(element) {
        element.classList.add('pulse-important');
        setTimeout(() => {
            element.classList.remove('pulse-important');
        }, 2000);
    }

    // Shine text animation
    animateShineText(element) {
        element.classList.add('shine-text');
        setTimeout(() => {
            element.classList.remove('shine-text');
        }, 1500);
    }

    // Glassmorphism animation
    animateGlass(element) {
        element.classList.add('glass');
        setTimeout(() => {
            element.classList.remove('glass');
        }, 2000);
    }

    // Typing text animation
    animateTypingEffect(element) {
        element.classList.add('typing-effect');
        setTimeout(() => {
            element.classList.remove('typing-effect');
        }, 3000);
    }

    // Stop all animations
    stopAllAnimations() {
        this.isActive = false;
        this.particles.forEach(particle => particle.remove());
        this.fireParticles.forEach(particle => particle.remove());
        this.particles = [];
        this.fireParticles = [];
    }

    // Play full animation sequence
    playFullSequence() {
        const title = document.getElementById('main-title');
        const citation = document.getElementById('citation-text');
        const avatar = document.querySelector('.avatar');

        if (title) {
            setTimeout(() => this.animateHolographicText(title), 1000);
            setTimeout(() => this.animateGlitch(title), 4000);
            setTimeout(() => this.animateNeon(title), 7000);
        }

        if (citation) {
            setTimeout(() => this.animateShineText(citation), 2000);
            setTimeout(() => this.animate3DText(citation), 5000);
        }

        if (avatar) {
            setTimeout(() => this.animatePulseImportant(avatar), 3000);
        }

        // Start fire particles
        setTimeout(() => {
            this.startFireParticles();
        }, 2000);
    }
}

// Initialize advanced animations
let advancedAnimations;

// Initialization function
function initAdvancedAnimations() {
    advancedAnimations = new AdvancedAnimations();
}

// Function to start animations
function startAdvancedAnimations() {
    if (advancedAnimations) {
        advancedAnimations.playFullSequence();
    }
}

// Function to stop animations
function stopAdvancedAnimations() {
    if (advancedAnimations) {
        advancedAnimations.stopAllAnimations();
    }
}

// Export for use in main HTML
window.AdvancedAnimations = AdvancedAnimations;
window.initAdvancedAnimations = initAdvancedAnimations;
window.startAdvancedAnimations = startAdvancedAnimations;
window.stopAdvancedAnimations = stopAdvancedAnimations;