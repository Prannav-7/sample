import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const DigitalEarth = () => {
  const earthRef = useRef();
  const cloudsRef = useRef();
  
  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      cloudsRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  // Create a particle sphere to represent the globe
  const particles = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color("#06b6d4"); // Cyan
    const color2 = new THREE.Color("#ffffff"); // White

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 2.2; // Radius

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color variation
      const mixedColor = color1.clone().lerp(color2, Math.random() * 0.5);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return { positions, colors };
  }, []);

  return (
    <group>
      {/* Main Wireframe Globe */}
      <Sphere ref={earthRef} args={[2.1, 32, 32]}>
        <meshBasicMaterial 
            color="#06b6d4" 
            wireframe 
            transparent 
            opacity={0.15} 
        />
      </Sphere>

      {/* Particle Surface */}
      <points ref={cloudsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.positions.length / 3}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particles.colors.length / 3}
            array={particles.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.025}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      {/* Orbital Rings representing flight paths */}
      <group rotation={[0, 0, Math.PI / 8]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[3.0, 0.01, 16, 100]} />
            <meshBasicMaterial color="#06b6d4" transparent opacity={0.4} />
        </mesh>
      </group>
       <group rotation={[0, 0, -Math.PI / 6]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[3.5, 0.01, 16, 100]} />
            <meshBasicMaterial color="#9333ea" transparent opacity={0.3} />
        </mesh>
      </group>
    </group>
  );
};

const AiAvatar = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
        
        <DigitalEarth />
        
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default AiAvatar;
