import * as React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export const FondoCabinAurora: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fondo-cabin-aurora">
      {/* Cabina moderna - interior cálido */}
      <div className="interior-cabina">
        {/* Paredes de madera de la cabina */}
        <div className="pared-madera izquierda" />
        <div className="pared-madera derecha" />
        <div className="techo-madera" />
        
        {/* Suelo de madera */}
        <div className="suelo-madera" />
        
        {/* Ambiente cálido y acogedor */}
        <div className="ambiente-calido" />
      </div>

      {/* Ventanal panorámico */}
      <div className="ventanal-panoramico">
        {/* Aurora boreal exterior */}
        <div className="aurora-exterior">
          {/* Capas de aurora */}
          <motion.div 
            className="capa-aurora principal"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(0, 255, 150, 0.8) 0%, rgba(0, 200, 255, 0.9) 50%, rgba(150, 0, 255, 0.7) 100%)',
                'linear-gradient(135deg, rgba(150, 0, 255, 0.7) 0%, rgba(0, 255, 150, 0.9) 50%, rgba(0, 200, 255, 0.8) 100%)',
                'linear-gradient(225deg, rgba(0, 200, 255, 0.8) 0%, rgba(150, 0, 255, 0.9) 50%, rgba(0, 255, 150, 0.7) 100%)'
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="capa-aurora secundaria"
            animate={{
              x: [-50, 50, -50],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Montañas nevadas */}
        <div className="montanas-nevadas">
          <div className="cadena-montanosa" />
          <div className="cadena-montanosa lejana" />
        </div>

        {/* Estrellas */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="estrella-boreal"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Reflexiones del aurora en el cristal */}
      <motion.div 
        className="reflejo-cristal"
        animate={{
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Luces doradas estilo Fox que siguen el mouse */}
      <div 
        className="luz-fox-dorada principal"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`
        }}
      />
      
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`fox-light-${i}`}
          className="luz-fox-dorada secundaria"
          style={{
            left: `${mousePosition.x + (i * 8 - 16)}%`,
            top: `${mousePosition.y + (i * 6 - 12)}%`
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5
          }}
        />
      ))}

      {/* Efecto de polvo atmosférico */}
      <div className="polvo-atmosferico">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            className="particula-polvo"
            style={{
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-100, window.innerHeight + 100],
              x: [0, Math.random() * 200 - 100],
              opacity: [0, 0.6, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  )
}