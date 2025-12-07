'use client';

import { useState } from 'react';

export default function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-accent-yellow transform transition-transform duration-300 ${
          isHovered ? 'scale-105' : 'scale-100'
        }`}
      />
      <span
        className={`relative font-['Lilita_One'] text-3xl tracking-[0.2em] text-custom-grey transform transition-transform duration-300 ${
          isHovered ? 'scale-105' : 'scale-100'
        }`}
      >
        TerreNordique
      </span>
    </div>
  );
} 