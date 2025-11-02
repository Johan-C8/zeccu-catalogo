import * as React from 'react'
import { motion } from 'framer-motion'
import { Pelicula } from '../types';

interface TarjetaPeliculaProps {
  pelicula: Pelicula;
  onVerDetalle: (pelicula: Pelicula) => void;
}

export const TarjetaPelicula: React.FC<TarjetaPeliculaProps> = ({ pelicula, onVerDetalle }) => (
  <motion.article 
    className="relative group cursor-pointer w-48 h-72"
    whileHover={{ scale: 1.05 }} 
    onClick={() => onVerDetalle(pelicula)}
  >
    <div className="relative rounded-2xl overflow-hidden border-2 border-cyan shadow-neon group-hover:shadow-neon-hover transition-all duration-300 h-full">
      <img 
        src={pelicula.portada} 
        alt={pelicula.titulo} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div className="text-white font-bold text-center text-shadow-lg">
          {pelicula.titulo}
        </div>
      </div>
    </div>
  </motion.article>
);