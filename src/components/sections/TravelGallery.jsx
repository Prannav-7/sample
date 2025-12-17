import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Image, ScrollControls, useScroll, Text, Float, Preload } from '@react-three/drei';
import { motion } from 'framer-motion';
import ErrorBoundary from '../common/ErrorBoundary';
import ScrollReveal from '../ui/ScrollReveal';

const GalleryImages = () => {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const group = useRef();

  useFrame((state, delta) => {
    // Smooth scroll animation logic
    const scrollOffset = data.offset;
    if (group.current) {
      // Move up for the "tunnel" effect
      group.current.position.y = scrollOffset * 18;
    }
  });

  return (
    <group ref={group} position={[0, -3, 0]}>
      {/* Central Hero Image - Switzerland */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Image
          url="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop"
          scale={[width / 2.5, width / 3.5, 1]}
          position={[0, 0, 0]}
          transparent
          opacity={1}
        />
        <Text
          position={[0, -width / 7 - 0.5, 0.2]}
          fontSize={0.4}
          color="#06b6d4"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        >
          SWITZERLAND
        </Text>
      </Float>

      {/* Tokyo - Adjusted Z for depth */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Image
          url="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop"
          scale={[3, 2, 1]}
          position={[-width / 2.8, -5, 1]}
          transparent
          opacity={0.9}
        />
        <Text position={[-width / 2.8, -6.2, 1.1]} fontSize={0.2} color="white">TOKYO</Text>
      </Float>

      {/* Paris - Adjusted Z for depth */}
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
        <Image
          url="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop"
          scale={[2.5, 3.5, 1]}
          position={[width / 3, -4, -1]}
          transparent
          opacity={0.8}
        />
        <Text position={[width / 3, -2, -0.9]} fontSize={0.2} color="white">PARIS</Text>
      </Float>

      {/* New York - Adjusted Z for depth */}
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <Image
          url="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600&auto=format&fit=crop"
          scale={[2.5, 2.5, 1]}
          position={[-width / 4, -9, 2]}
          transparent
          opacity={0.9}
        />
        <Text position={[-width / 4, -10.5, 2.1]} fontSize={0.2} color="white">NEW YORK</Text>
      </Float>

      {/* Bali - Adjusted Z for depth */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
        <Image
          url="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop"
          scale={[3, 2, 1]}
          position={[width / 3.5, -8, 0.5]}
          transparent
          opacity={0.8}
        />
        <Text position={[width / 3.5, -9.2, 0.6]} fontSize={0.2} color="white">BALI</Text>
      </Float>
    </group>
  );
};

const TravelGallery = () => {
  return (
    // Adjusted height to be less tall but still scrollable
    <section className="relative h-[120vh] w-full py-0 overflow-hidden bg-black/20">
      <div className="absolute inset-0 z-0">
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
          <ErrorBoundary fallback={null}>
            <Suspense fallback={null}>
              <ScrollControls pages={2.5} damping={0.2}>
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <GalleryImages />
              </ScrollControls>
              <Preload all />
            </Suspense>
          </ErrorBoundary>
        </Canvas>
      </div>


      <div className="relative z-10 h-full flex flex-col justify-start pt-12 items-center pointer-events-none">
        <ScrollReveal animation="scale" duration={1}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-black/40 backdrop-blur-sm p-6 rounded-3xl border border-white/10"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
              Visual Experience
            </h2>
            <p className="text-sm text-cyan-400 uppercase tracking-widest">
              Scroll to Explore
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TravelGallery;
