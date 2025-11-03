import * as React from 'react'
import { motion } from 'framer-motion'

export const FondoAurora: React.FC = () => (
  <div className="fondo-aurora">
    {/* Estrellas */}
    {[...Array(80)].map((_, i) => (
      <motion.div
        key={`star-${i}`}
        className="estrella"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
        }}
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ 
          duration: Math.random() * 4 + 2, 
          repeat: Infinity, 
          delay: Math.random() * 5 
        }}
      />
    ))}
  
    {/* Auroras principales */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={`aurora-${i}`}
        className="aurora"
        style={{
          left: `${(i * 25) % 100}%`, 
          top: `${(i * 20) % 100}%`, 
          transform: `rotate(${Math.random() * 30 - 15}deg)`,
          background: i % 2 === 0 
            ? 'linear-gradient(135deg, #003366, #004488, #002244)' 
            : 'linear-gradient(135deg, #330066, #220044, #110033)'
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
        className="aurora-purple"
        style={{ 
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
  
    {/* Gradiente animado */}
    <motion.div
      className="gradiente-animado"
      animate={{ opacity: [0.05, 0.15, 0.05] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  
    {/* Overlays de gradiente */}
    <div className="overlay-top" />
    <div className="overlay-sides" />
  </div>
)