import * as React from 'react'
import { motion } from 'framer-motion'

interface HeaderProps {
  onVolverInicio: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onVolverInicio }) => (
  <header className="header-pared-ladrillo">
    {/* Textura de pared de ladrillo */}
    <div className="textura-ladrillo" />
    
    {/* Iluminación ambiental sutil */}
    <div className="luz-ambiental-pared" />
    
    {/* Reflejos del aurora en la pared */}
    <div className="reflejo-aurora-pared" />

    <div className="contenedor-cartel">
      <motion.div 
        className="cartel-rustico"
        initial={{ y: -30, opacity: 0, rotateX: 10 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Marco del cartel vintage */}
        <div className="marco-vintage">
          {/* Clavos decorativos */}
          <div className="clavo esquina sup-izq" />
          <div className="clavo esquina sup-der" />
          <div className="clavo esquina inf-izq" />
          <div className="clavo esquina inf-der" />
          
          {/* Cartel principal */}
          <motion.div 
            className="placa-madera"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Texto ZEECCU con efecto vintage */}
            <motion.h1 
              className="texto-zeccu-vintage"
              onClick={onVolverInicio}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              ZEECCU
              <span className="sombra-texto">ZEECCU</span>
            </motion.h1>
            
            {/* Efecto de desgaste en los bordes */}
            <div className="efecto-desgaste" />
          </motion.div>
        </div>

        {/* Sombra proyectada en la pared */}
        <motion.div 
          className="sombra-proyectada"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>
    </div>

    {/* Lámparas vintage colgantes */}
    <div className="lampara-vintage izquierda" />
    <div className="lampara-vintage derecha" />
  </header>
)