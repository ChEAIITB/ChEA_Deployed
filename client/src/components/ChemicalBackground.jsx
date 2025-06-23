// components/ChemicalBackground.jsx
import React from 'react';

export default function ChemicalBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-blue-100 to-white overflow-hidden">
      {/* Flask */}
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        className="absolute bottom-10 left-10 w-20 h-40 bg-white border-4 border-blue-400 rounded-b-full shadow-xl rotate-6"
      >
        <div className="absolute bottom-0 w-full h-1/2 bg-blue-400 rounded-b-full animate-bounce"></div>
      </div>

      {/* Beaker */}
      <div
        data-aos="fade-left"
        data-aos-delay="300"
        className="absolute bottom-16 right-16 w-20 h-28 bg-white border-4 border-green-400 rounded-t-lg shadow-lg -rotate-3"
      >
        <div className="absolute bottom-0 w-full h-1/2 bg-green-300 animate-pulse rounded-b-lg"></div>
      </div>

      {/* Test Tube */}
      <div
        data-aos="fade-right"
        data-aos-delay="600"
        className="absolute top-24 left-1/2 transform -translate-x-1/2 w-10 h-40 bg-white border-4 border-purple-400 rounded-full shadow-md"
      >
        <div className="absolute bottom-0 w-full h-2/3 bg-purple-300 animate-bounce rounded-full"></div>
      </div>

      {/* Bubbles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className={`absolute bottom-0 left-[${10 + i * 8}%] w-3 h-3 bg-blue-300 rounded-full animate-ping`}
          style={{ animationDelay: `${i * 0.5}s` }}
        />
      ))}
    </div>
  );
}
