import * as React from 'react'
import { motion } from 'framer-motion'
import { IconHome, IconStar, IconClock, IconFilm, IconUsers } from '../icons'

interface BarraNavegacionProps {
  filtro: string
  setFiltro: (filtro: string) => void
}

export const BarraNavegacion: React.FC<BarraNavegacionProps> = ({ filtro, setFiltro }) => {
  const categorias = [
    { nombre: 'Todas', icono: <IconHome className="w-5 h-5" /> },
    { nombre: 'Vistas', icono: <IconStar className="w-5 h-5" /> },
    { nombre: 'Pendientes', icono: <IconClock className="w-5 h-5" /> },
    { nombre: 'Próximas', icono: <IconFilm className="w-5 h-5" /> },
    { nombre: 'Para ver juntos', icono: <IconUsers className="w-5 h-5" /> },
  ]

  return (
    <nav className="px-6 flex justify-center gap-4 flex-wrap mt-8">
      {categorias.map(c => (
        <motion.button 
          key={c.nombre} 
          onClick={() => setFiltro(c.nombre)}
          whileHover={{ scale: 1.05 }}
          className={`flex items-center gap-3 px-6 py-3 rounded-2xl border-2 transition-all ${
            filtro === c.nombre 
              ? 'neon-button-active text-white bg-black-50' 
              : 'neon-button-inactive text-white-80 bg-black-40'
          }`}
        >
          {c.icono}
          <span className="text-sm font-bold">{c.nombre}</span>
        </motion.button>
      ))}
    </nav>
  )
}