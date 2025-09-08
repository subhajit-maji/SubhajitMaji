// Subhajit Maji site configuration
// Modify these values to customize your site

const SITE_CONFIG = {
    // Personal information
    title: "Subhajit Maji",
    citation: "I don't seek power - I am power.",
    
    // Main colors (hexadecimal format)
    colors: {
        primary: "#e23535",      // Main red
        secondary: "#ff4d4d",    // Secondary red
        accent: "#ff6b6b",       // Accent red
        white: "#ffffff",        // White
        black: "#000000"         // Black
    },
    
    // Social links
    socialLinks: {
        github: "https://github.com/subhajit-maji",
        instagram: "https://www.instagram.com/subhajitmaji_",
        youtube: "https://youtube.com/@subhajit-maji",
        discord: "https://discord.gg/A3aUhrPnpr",
        telegram: "https://t.me/subhajit_maji"
    },
    
    // Audio configuration
    audio: {
        volume: 0.15,            // Default volume (0.0 to 1.0)
        autoplay: true,          // Autoplay
        loop: true               // Loop playback
    },
    
    // Video configuration
    video: {
        autoplay: true,          // Autoplay
        muted: true,             // Muted by default
        loop: true,              // Loop playback
        playsinline: true        // Inline playback on mobile
    },
    
    // Animation configuration
    animations: {
        enabled: true,           // Enable animations
        particleCount: 50,       // Number of particles
        particleSpeed: 300,      // Particle speed (ms)
        titleAnimationSpeed: 200, // Title animation speed (ms)
        typingSpeed: 100         // Typing speed (ms)
    },
    
    // Responsive configuration
    responsive: {
        mobileBreakpoint: 768,   // Mobile breakpoint (px)
        tabletBreakpoint: 1024   // Tablet breakpoint (px)
    },
    
    // Custom messages
    messages: {
        intro: "Click to enter",
        loading: "Loading...",
        errorVideo: "Your browser does not support HTML5 video.",
        errorAudio: "Your browser does not support the audio element."
    },
    
    // Visual effects configuration
    effects: {
        scanlines: true,         // Scanlines effect
        vignette: true,          // Vignette effect
        distortion: true,        // Distortion effect
        particles: true,         // Floating particles
        fireParticles: true,     // Fire particles
        parallax: true,          // Parallax effect
        shockwave: true          // Shockwave effect on click
    },
    
    // Text animation configuration
    textAnimations: {
        holographic: true,       // Holographic animation
        glitch: true,            // Glitch effect
        neon: true,              // Neon effect
        typing: true,            // Typing effect
        shine: true,             // Shiny effect
        pulse: true              // Pulse effect
    }
};

// Function to apply the configuration
function applyConfig() {
    // Apply title
    document.title = SITE_CONFIG.title;
    
    // Apply quote
    const citationElement = document.getElementById("citation-text");
    if (citationElement) {
        citationElement.textContent = SITE_CONFIG.citation;
    }
    
    // Apply main title
    const titleElement = document.getElementById("main-title");
    if (titleElement) {
        titleElement.textContent = SITE_CONFIG.title;
    }
    
    // Apply intro message
    const introElement = document.querySelector(".intro-text");
    if (introElement) {
        introElement.textContent = SITE_CONFIG.messages.intro;
    }
    
    // Audio configuration
    const audio = document.getElementById("audio");
    if (audio) {
        audio.volume = SITE_CONFIG.audio.volume;
        audio.loop = SITE_CONFIG.audio.loop;
    }
    
    // Video configuration
    const video = document.getElementById("background");
    if (video) {
        video.autoplay = SITE_CONFIG.video.autoplay;
        video.muted = SITE_CONFIG.video.muted;
        video.loop = SITE_CONFIG.video.loop;
        video.playsinline = SITE_CONFIG.video.playsinline;
    }
    
    // Update social links
    updateSocialLinks();
}

// Function to update social links
function updateSocialLinks() {
    const socialLinks = {
        'github': document.querySelector('a[href*="github.com"]'),
        'tiktok': document.querySelector('a[href*="tiktok.com"]'),
        'youtube': document.querySelector('a[href*="youtube.com"]'),
        'discord': document.querySelector('a[href*="discord.gg"]'),
        'telegram': document.querySelector('a[href*="t.me"]')
    };
    
    for (const [platform, element] of Object.entries(socialLinks)) {
        if (element && SITE_CONFIG.socialLinks[platform]) {
            element.href = SITE_CONFIG.socialLinks[platform];
        }
    }
}

// Function to enable/disable effects
function toggleEffect(effectName, enabled) {
    if (SITE_CONFIG.effects[effectName] !== undefined) {
        SITE_CONFIG.effects[effectName] = enabled;
        
        // Immediate application for some effects
        if (effectName === 'scanlines') {
            const scanlines = document.querySelector('.scanlines');
            if (scanlines) {
                scanlines.style.display = enabled ? 'block' : 'none';
            }
        }
        
        if (effectName === 'vignette') {
            const vignette = document.querySelector('.vignette');
            if (vignette) {
                vignette.style.display = enabled ? 'block' : 'none';
            }
        }
        
        if (effectName === 'distortion') {
            const distortion = document.querySelector('.screen-distortion');
            if (distortion) {
                distortion.style.display = enabled ? 'block' : 'none';
            }
        }
    }
}

// Function to change colors
function updateColors(newColors) {
    Object.assign(SITE_CONFIG.colors, newColors);
    
    // Update CSS variables
    const root = document.documentElement;
    root.style.setProperty('--primary-color', SITE_CONFIG.colors.primary);
    root.style.setProperty('--secondary-color', SITE_CONFIG.colors.secondary);
    root.style.setProperty('--accent-color', SITE_CONFIG.colors.accent);
}

// Function to get the configuration
function getConfig() {
    return SITE_CONFIG;
}

// Export for use in other files
window.SITE_CONFIG = SITE_CONFIG;
window.applyConfig = applyConfig;
window.toggleEffect = toggleEffect;
window.updateColors = updateColors;
window.getConfig = getConfig;

// Automatically apply configuration on load
document.addEventListener('DOMContentLoaded', applyConfig);