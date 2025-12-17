import React from 'react';
import './Background3D.css';

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-20 bg-gradient-to-br from-[#0a0a0f] via-[#1a0b2e] to-[#050505]">
      {/* Subtle animated gradient overlay */}
      <div className="gradient-radial-overlay" />

      {/* Simple CSS stars - lightweight alternative */}
      <div className="stars-background" />

      {/* Gradient overlay for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/40 to-[#0a0a0f]/80 pointer-events-none" />
    </div>
  );
};

export default Background3D;
