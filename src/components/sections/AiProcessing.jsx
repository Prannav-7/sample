import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

const DataBlock = ({ position, color, speed, scale }) => {
    const ref = useRef();
    useFrame((state) => {
        if(ref.current) {
            // Orbit logic
            const time = state.clock.getElapsedTime() * speed;
            const radius = Math.sqrt(position[0]**2 + position[2]**2);
            ref.current.position.x = Math.cos(time + position[1]) * radius;
            ref.current.position.z = Math.sin(time + position[1]) * radius;
            ref.current.rotation.x += speed * 0.5;
            ref.current.rotation.y += speed * 0.5;
        }
    });

    return (
        <Box ref={ref} position={position} args={[scale, scale, scale]}>
            <meshStandardMaterial 
                color={color}
                emissive={color}
                emissiveIntensity={3}
                transparent
                opacity={0.8}
            />
        </Box>
    );
};

const DataStream = () => {
  const count = 400; 
  const blocks = useMemo(() => {
    return new Array(count).fill(0).map(() => ({
      position: [
        (Math.random() - 0.5) * 15, 
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      ],
      scale: Math.random() * 0.1 + 0.02,
      speed: Math.random() * 0.2 + 0.1,
      color: Math.random() > 0.5 ? "#06b6d4" : "#9333ea"
    }));
  }, []);

  return (
    <group>
      {blocks.map((block, i) => (
        <DataBlock key={i} {...block} />
      ))}
    </group>
  );
};

const Core = () => {
    return (
        <Sphere args={[2, 64, 64]} position={[0, 0, 0]}>
            <MeshDistortMaterial
                color="#000000"
                emissive="#06b6d4"
                emissiveIntensity={0.8}
                distort={0.5}
                speed={3}
                wireframe
            />
        </Sphere>
    )
}

const AiProcessing = () => {
  return (
    // Reduced height and gaps
    <section className="min-h-[60vh] flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-black py-12">
        <div className="absolute inset-0">
             <Canvas camera={{ position: [0, 0, 12] }}>
                <ambientLight intensity={0.2} />
                <pointLight position={[0, 0, 0]} intensity={2} color="#06b6d4" distance={20} />
                <DataStream />
                <Core />
                <fog attach="fog" args={['#0a0a0f', 5, 25]} />
             </Canvas>
        </div>
        
        {/* Centered Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pointer-events-none flex flex-col items-center justify-center h-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 mix-blend-screen"
            >
                <h2 className="text-5xl md:text-8xl font-black text-white mb-2 tracking-tighter drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                    PROCESSING
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">INTELLIGENCE</span>
                </h2>
            </motion.div>
            
            <p className="text-gray-300 max-w-xl mx-auto text-lg bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 mb-8">
                Every second, ZYVOX processes thousands of travel variables to construct the perfect journey for you.
            </p>

             <div className="pointer-events-auto">
                 <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-50 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all cursor-pointer"
                >
                    Start Your Journey
                </motion.button>
            </div>
        </div>
    </section>
  );
};

export default AiProcessing;
