/* ========================================================================================
   SCROLL ANIMATIONS - QUICK REFERENCE CARD
   ======================================================================================== */

// ==========================================
// 1. SCROLLREVEAL - Basic Usage
// ==========================================

import ScrollReveal from './components/ui/ScrollReveal';

// Simple fade up animation
<ScrollReveal animation="fade-up">
  <h1>I fade up when scrolled into view!</h1>
</ScrollReveal>

// With custom timing
<ScrollReveal animation="scale" delay={0.3} duration={1.2}>
  <div>I scale up with a delay!</div>
</ScrollReveal>

// ==========================================
// 2. ANIMATION TYPES
// ==========================================

// Fade Animations
<ScrollReveal animation="fade-up">...</ScrollReveal>      // Slides up with fade ⬆️
<ScrollReveal animation="fade-down">...</ScrollReveal>    // Slides down with fade ⬇️
<ScrollReveal animation="fade-left">...</ScrollReveal>    // Slides from right ⬅️
<ScrollReveal animation="fade-right">...</ScrollReveal>   // Slides from left ➡️

// Transform Animations
<ScrollReveal animation="scale">...</ScrollReveal>        // Scales from small 🔍
<ScrollReveal animation="rotate-in">...</ScrollReveal>    // Rotates in 🔄
<ScrollReveal animation="flip">...</ScrollReveal>         // 3D flip effect 🔄
<ScrollReveal animation="bounce-in">...</ScrollReveal>    // Bouncy entrance 🎾

// Effect Animations
<ScrollReveal animation="blur">...</ScrollReveal>         // Blur to sharp 🌫️
<ScrollReveal animation="glow">...</ScrollReveal>         // Glowing entrance ✨

// Special Animations  
<ScrollReveal animation="stagger">                        // Staggers children 📊
  <div>
    <Card /> {/* Animates first */}
    <Card /> {/* Then second */}
    <Card /> {/* Then third */}
  </div>
</ScrollReveal>

// ==========================================
// 3. PROPS REFERENCE
// ==========================================

<ScrollReveal
  animation="fade-up"      // Animation type (see list above)
  delay={0.2}             // Delay in seconds (default: 0)
  duration={0.8}          // Duration in seconds (default: 0.8)
  threshold={0.1}         // Intersection threshold 0-1 (default: 0.1)
>
  {children}
</ScrollReveal>

// ==========================================
// 4. SCROLL ANIMATIONS - Floating Elements
// ==========================================

// Already integrated in App.jsx - customizable in ScrollAnimations.jsx

const floatingElements = [
    {
        id: 1,
        emoji: '✈️',                                   // Your icon
        color: 'from-orange-500 to-pink-500',        // Tailwind gradient
        startX: '10%',                               // Initial X position
        startY: '20%',                               // Initial Y position
        speed: 0.3,                                  // Scroll speed multiplier
        rotation: true,                              // Enable rotation
        scale: 1.5                                   // Size multiplier
    },
    // ... add more elements
];

// ==========================================
// 5. COMMON PATTERNS
// ==========================================

// Pattern 1: Animated Section Header
<ScrollReveal animation="fade-up">
  <h2>Section Title</h2>
  <p>Section description</p>
</ScrollReveal>

// Pattern 2: Staggered Cards Grid
<ScrollReveal animation="stagger" delay={0.2}>
  <div className="grid grid-cols-3 gap-4">
    <Card />
    <Card />
    <Card />
  </div>
</ScrollReveal>

// Pattern 3: Hero with Scale
<ScrollReveal animation="scale" duration={1}>
  <div className="hero-content">
    <h1>Big Impact Title</h1>
  </div>
</ScrollReveal>

// Pattern 4: Side-by-Side Content
<div className="grid grid-cols-2">
  <ScrollReveal animation="fade-right">
    <div>Left content slides in from left</div>
  </ScrollReveal>
  
  <ScrollReveal animation="fade-left" delay={0.2}>
    <div>Right content slides in from right</div>
  </ScrollReveal>
</div>

// Pattern 5: Sequential Reveals
<ScrollReveal animation="fade-up" delay={0}>
  <h2>First</h2>
</ScrollReveal>

<ScrollReveal animation="fade-up" delay={0.2}>
  <p>Second</p>
</ScrollReveal>

<ScrollReveal animation="bounce-in" delay={0.4}>
  <Button>Third</Button>
</ScrollReveal>

// ==========================================
// 6. SCROLL PROGRESS - Already Integrated
// ==========================================

// Available globally:
// ✅ Progress bar at top
// ✅ Percentage indicator (bottom-right)
// ✅ Custom cursor (desktop only)
// ✅ Scroll-to-top button (after 20% scroll)

// No additional setup needed!

// ==========================================
// 7. CUSTOMIZING COLORS
// ==========================================

// ScrollProgress.css - Line 13
.scroll - progress - fill {
    background: linear - gradient(90deg, #00d4ff, #7b2ff7, #f54ea2); /* Change these */
}

// ScrollAnimations.jsx - Per element
{
    color: 'from-blue-500 to-purple-600', // Tailwind gradient classes
}

// ==========================================
// 8. PERFORMANCE TIPS
// ==========================================

// ✅ DO:
// - Use animations on important sections only
// - Keep delay increments consistent (0.1s, 0.2s, 0.3s)
// - Test on mobile devices
// - Use stagger for lists/grids

// ❌ DON'T:
// - Wrap every element in ScrollReveal
// - Use very long durations (> 1.5s)
// - Stack multiple animations on same element
// - Forget to test scroll performance

// ==========================================
// 9. ACCESSIBILITY
// ==========================================

// All animations automatically respect:
// - prefers-reduced-motion setting
// - Keyboard navigation
// - Proper ARIA labels

// Users with motion sensitivity will see:
// - Simple fade transitions instead of complex animations
// - No rotation or transform effects
// - Faster, gentler movements

// ==========================================
// 10. DEBUGGING
// ==========================================

// Animation not showing?
console.log('Check these:');
// 1. Is component imported correctly?
// 2. Browser console showing errors?
// 3. Try lower threshold: threshold={0.05}
// 4. Check parent container doesn't have overflow:hidden

// ==========================================
// 11. BROWSER COMPATIBILITY
// ==========================================

// ✅ Chrome/Edge (latest)
// ✅ Firefox (latest)
// ✅ Safari (latest)
// ✅ Mobile browsers (iOS/Android)
// ⚠️ IE11 - Not supported (uses Intersection Observer API)

// ==========================================
// 12. EXAMPLES BY SECTION TYPE
// ==========================================

// Hero Section
<ScrollReveal animation="scale" duration={1.2}>
  <Hero />
</ScrollReveal>

// Feature Cards
<ScrollReveal animation="stagger">
  <div className="features-grid">
    {features.map(f => <FeatureCard key={f.id} {...f} />)}
  </div>
</ScrollReveal>

// Testimonials
<ScrollReveal animation="fade-up">
  <TestimonialSlider />
</ScrollReveal>

// Call to Action
<ScrollReveal animation="bounce-in" delay={0.3}>
  <CTA />
</ScrollReveal>

// Footer
<ScrollReveal animation="fade-up">
  <Footer />
</ScrollReveal>

// ==========================================
// DOCUMENTATION
// ==========================================

// Quick Start: README_ANIMATIONS.md
// Full Docs: SCROLL_ANIMATIONS.md
// Summary: IMPLEMENTATION_SUMMARY.md

/* ========================================================================================
   END OF QUICK REFERENCE
   ======================================================================================== */
