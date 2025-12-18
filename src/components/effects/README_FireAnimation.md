# Fire Animation Component

## Overview
A WebGL-powered fire animation component featuring an interactive shader that creates mesmerizing flame-like patterns. The animation responds to mouse movement, creating an engaging visual effect.

## Features
- **WebGL Shader Animation**: Uses custom GLSL shaders for high-performance rendering
- **Interactive Mouse Effects**: The animation distorts and responds to mouse movement
- **Responsive Design**: Automatically adapts to different screen sizes
- **Optimized Performance**: Uses device pixel ratio limiting for better performance
- **Smooth Integration**: Includes overlay effects for seamless blending with the page

## Technical Details

### Shaders
- **Vertex Shader**: Simple pass-through shader for full-screen quad
- **Fragment Shader**: Complex fire palette generation with:
  - Dynamic color palettes
  - Rotating patterns
  - Radial falloff
  - Mouse interaction
  - Time-based animation

### Props
The component doesn't accept any props currently. All configuration is done internally.

## Usage

```jsx
import FireAnimation from './components/effects/FireAnimation';

function App() {
  return (
    <div>
      <FireAnimation />
    </div>
  );
}
```

## Customization

### Adjusting Height
Modify the className in the return statement:

```jsx
// Current: h-[400px] md:h-[500px]
// Smaller: h-[300px] md:h-[400px]
// Larger: h-[500px] md:h-[600px]
<div className="fire-animation-wrapper relative w-full h-[YOUR_SIZE] overflow-hidden">
```

### Changing Colors
Modify the `palette_fire` function in the fragment shader to adjust the color palette:

```glsl
vec3 a = vec3(0.5, 0.1, 0.0);  // Base color
vec3 b = vec3(0.6, 0.3, 0.1);  // Color variation
vec3 c = vec3(1.0, 1.0, 0.0);  // Frequency
vec3 d = vec3(0.8, 0.7, 0.2);  // Phase shift
```

### Animation Speed
Adjust the time multiplier in the shader uniform:

```javascript
gl.uniform1f(timeLocation, time * 0.001); // Current speed
// Faster: time * 0.002
// Slower: time * 0.0005
```

## Browser Compatibility
- Requires WebGL support
- Fallback message for unsupported browsers
- Works on all modern browsers (Chrome, Firefox, Safari, Edge)

## Performance Notes
- Device pixel ratio is capped at 2x for performance
- Animation runs at 60fps on most devices
- Uses requestAnimationFrame for smooth animation
- Proper cleanup on component unmount
