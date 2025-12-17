import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const NetworkGlobe = () => {
  const globeRef = useRef();
  const pointsRef = useRef();
  
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.003;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.003;
    }
  });

  // Generate random points for cities
  const particleCount = 250;
  const { positions } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for(let i=0; i<particleCount; i++) {
      const r = 2.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      pos[i*3] = x;
      pos[i*3+1] = y;
      pos[i*3+2] = z;
    }
    return { positions: pos };
  }, []);

  return (
    <group>
      {/* Main Wireframe Globe */}
      <group ref={globeRef}>
        <Sphere args={[2.5, 48, 48]}>
            <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.08} />
        </Sphere>
        <Sphere args={[2.45, 32, 32]}>
            <meshBasicMaterial color="#000" />
        </Sphere>
        
        {/* Glowing Core */}
        <Sphere args={[2.2, 32, 32]}>
             <MeshDistortMaterial
                color="#1e1e2e"
                emissive="#9333ea"
                emissiveIntensity={0.5}
                distort={0.3}
                speed={2}
                transparent
                opacity={0.6}
             />
        </Sphere>
      </group>

      {/* Floating Cities/Nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
            <bufferAttribute
                attach="attributes-position"
                count={particleCount}
                array={positions}
                itemSize={3}
            />
        </bufferGeometry>
        <PointMaterial
            transparent
            vertexColors={false}
            color="#06b6d4"
            size={0.05}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Orbital Rings */}
      <group rotation={[0, 0, Math.PI / 6]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[3.2, 0.01, 64, 100]} />
            <meshBasicMaterial color="#06b6d4" transparent opacity={0.4} />
        </mesh>
      </group>
    </group>
  );
};

const GlobalNetwork = () => {
  return (
    // Reduced padding and height
    <section className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Canvas camera={{ position: [0, 0, 7] }}>
          <ambientLight intensity={1} />
          <NetworkGlobe />
        </Canvas>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pointer-events-none min-h-[60vh]">
        <div />
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="bg-black/70 backdrop-blur-xl p-8 rounded-2xl border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.1)]"
        >
          <div className="flex items-center gap-2 mb-4">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-green-500 text-xs font-mono uppercase">System Online</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Global Neural <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Network</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Our AI continuously scans global travel databases, weather satellites, and local event feeds. It processes over 50TB of data daily to ensure your itinerary is optimized for safety, cost, and experience.
          </p>
          
          <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
             <div>
                <h4 className="text-3xl font-bold text-cyan-400 font-mono">195+</h4>
                <p className="text-sm text-gray-400 mt-1">Countries Mapped</p>
             </div>
             <div>
                <h4 className="text-3xl font-bold text-purple-500 font-mono">0.02s</h4>
                <p className="text-sm text-gray-400 mt-1">Response Latency</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
