import * as React from 'react'
import { motion } from 'framer-motion'

interface HeaderProps {
  onVolverInicio: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onVolverInicio }) => (
  <header className="pt-8 pb-4 px-6 text-center">
    <motion.h1
      className="text-4xl md:text-6xl font-black text-center tracking-wider title-glow cursor-pointer"
      onClick={onVolverInicio}
    >
      ZEECCU
    </motion.h1>
    <p className="mt-4 text-lg text-cyan-300">
      CATALOGO PERSONAL DE SERIES Y PELICULAS
    </p>
  </header>
);