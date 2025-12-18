# 🎨 Quick Customization Reference

## Common Customizations at a Glance

### Change Brand Name
**File:** `src/components/ui/Intro.jsx` (line ~399)
```jsx
<h1 className="intro-title">YOUR BRAND</h1>
```

### Change Tagline
**File:** `src/components/ui/Intro.jsx` (line ~400)
```jsx
<p className="intro-tagline">YOUR TAGLINE</p>
```

### Adjust Intro Duration
**File:** `src/components/ui/Intro.jsx` (line ~352)
```javascript
}, 5000); // milliseconds (5000 = 5 seconds)
```

### Change Title Glow Color
**File:** `src/components/ui/Intro.css`
```css
@keyframes glowPulse {
  to {
    filter: drop-shadow(0 0 60px rgba(255, 255, 255, 0.6)) 
            drop-shadow(0 0 120px rgba(YOUR_COLOR, 0.4));
  }
}
```

### Modify Fire Animation Height
**File:** `src/components/effects/FireAnimation.jsx` (line ~216)
```jsx
<div className="... h-[400px] md:h-[YOUR_SIZE] ...">
```

### Change Fire Colors
**File:** `src/components/effects/FireAnimation.jsx` (in shader)
```glsl
vec3 palette_fire(float t, float factor) {
  vec3 a = vec3(0.5, 0.1, 0.0);  // Base color
  vec3 b = vec3(0.6, 0.3, 0.1);  // Variation
  vec3 c = vec3(1.0, 1.0, 0.0);  // Frequency
  vec3 d = vec3(0.8, 0.7, 0.2);  // Phase
  // Modify RGB values above
}
```

### Disable Intro Completely
**File:** `src/App.jsx`
```javascript
const [showIntro, setShowIntro] = useState(false); // Change true to false
```

### Remove Fire Animation
**File:** `src/App.jsx`
```jsx
<Hero />
{/* <FireAnimation /> */}  {/* Comment out this line */}
<Features />
```

---

## Color Presets

### Cyan Theme (Current)
```css
Primary: #00BFFF   /* Cyan */
Secondary: #8A2BE2  /* Purple */
```

### Green Theme
```css
Primary: #00FF7F   /* Spring Green */
Secondary: #32CD32  /* Lime Green */
```

### Red Theme
```css
Primary: #FF4500   /* Orange Red */
Secondary: #DC143C  /* Crimson */
```

### Gold Theme
```css
Primary: #FFD700   /* Gold */
Secondary: #FFA500  /* Orange */
```

---

## Speed Adjustments

### Intro Animation Rotation Speed
**File:** `src/components/ui/Intro.jsx` (in shader)
```glsl
p.xz *= rot(uTime * 0.12);  // Slower: 0.06, Faster: 0.24
p.xy *= rot(uTime * 0.08);  // Slower: 0.04, Faster: 0.16
```

### Fire Animation Speed
**File:** `src/components/effects/FireAnimation.jsx`
```javascript
gl.uniform1f(timeLocation, time * 0.001);  // Slower: 0.0005, Faster: 0.002
```

---

## Button Text Changes

### Intro Buttons
**File:** `src/components/ui/Intro.jsx` (lines ~406-417)
```jsx
<button className="glass-button">
  <span className="shimmer"></span>
  <span>YOUR TEXT 1</span>
</button>
<button className="glass-button">
  <span className="shimmer"></span>
  <span>YOUR TEXT 2</span>
</button>
```

---

## Performance Tuning

### Reduce Intro Quality (Better FPS)
**File:** `src/components/ui/Intro.jsx` (in shader)
```glsl
#define MAX_STEPS 60  // Default: 80, Lower = Faster
```

### Reduce Fire Quality (Better FPS)
**File:** `src/components/effects/FireAnimation.jsx`
```javascript
let devicePixelRatio = Math.min(window.devicePixelRatio || 1, 1);  // 1 instead of 2
```

---

## Testing Tips

### Skip Auto-Close for Testing
**File:** `src/components/ui/Intro.jsx`
```javascript
// Comment out these lines:
// const timer = setTimeout(() => {
//   setIsVisible(false);
//   setTimeout(onComplete, 1000);
// }, 5000);
```

### Always Show Intro (for testing)
**File:** `src/App.jsx`
```javascript
// Refresh page to see intro again
// Or keep intro state true
```

---

## File Quick Reference

| What to Change | File | Line(s) |
|----------------|------|---------|
| Brand name | `Intro.jsx` | ~399 |
| Tagline | `Intro.jsx` | ~400 |
| Button text | `Intro.jsx` | ~406-417 |
| Intro duration | `Intro.jsx` | ~352 |
| Title glow | `Intro.css` | ~28-39 |
| Button colors | `Intro.css` | ~94-104 |
| Fire height | `FireAnimation.jsx` | ~216 |
| Fire colors | `FireAnimation.jsx` | ~36-45 |

---

## Emergency Fixes

### If Intro Won't Close
```javascript
// In Intro.jsx, reduce timeout:
}, 1000); // Very short for testing
```

### If WebGL Crashes
```javascript
// Add fallback in Intro.jsx:
if (!gl) {
  console.error('WebGL not supported');
  onComplete(); // Skip intro
  return;
}
```

### If Performance is Slow
```glsl
// Reduce quality:
#define MAX_STEPS 40  // In both shaders
```

---

## Quick Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

Keep this file handy for quick edits! 🚀
