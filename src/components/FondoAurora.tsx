import * as React from 'react'
import { motion } from 'framer-motion'

export const FondoAurora: React.FC = () => (
  <div className="absolute inset-0 -z-10 bg-black overflow-hidden">
    {/* Estrellas */}
    {[...Array(80)].map((_, i) => (
      <motion.div
        key={`star-${i}`}
        className="absolute bg-white rounded-full"
        style={{
          width: Math.random() * 2 + 1,
          height: Math.random() * 2 + 1,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ 
          duration: Math.random() * 4 + 2, 
          repeat: Infinity, 
          delay: Math.random() * 5 
        }}
      />
    ))}
  
    {/* Auroras */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={`aurora-${i}`}
        className="absolute h-[600px] w-[1000px] opacity-20 blur-[60px]"
        style={{
          background: `linear-gradient(135deg, ${i % 2 === 0 ? '#003366, #004488, #002244' : '#330066, #220044, #110033'})`,
          left: `${(i * 25) % 100}%`, 
          top: `${(i * 20) % 100}%`, 
          rotate: Math.random() * 30 - 15,
        }}
        animate={{
          x: [Math.random() * -100, Math.random() * 100, Math.random() * -100],
          y: [Math.random() * -50, Math.random() * 50, Math.random() * -50],
          opacity: [0, 0.25, 0], 
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: Math.random() * 20 + 25, 
          repeat: Infinity, 
          delay: Math.random() * 10, 
          ease: "easeInOut" 
        }}
      />
    ))}
  
    {/* Auroras moradas */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`purple-aurora-${i}`}
        className="absolute h-[500px] w-[800px] opacity-15 blur-[50px]"
        style={{ 
          background: `linear-gradient(135deg, #1a0033, #330066, #000033)`, 
          left: `${Math.random() * 100}%`, 
          top: `${Math.random() * 100}%` 
        }}
        animate={{
          x: [Math.random() * -150, Math.random() * 150], 
          y: [Math.random() * -75, Math.random() * 75],
          opacity: [0, 0.2, 0], 
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{ 
          duration: Math.random() * 12 + 15, 
          repeat: Infinity, 
          delay: Math.random() * 8, 
          ease: "easeInOut" 
        }}
      />
    ))}
  
    {/* Gradientes adicionales */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-cyan-900/5"
      animate={{ opacity: [0.05, 0.15, 0.05] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  
    {/* Overlays para mejor contraste */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
  </div>
)