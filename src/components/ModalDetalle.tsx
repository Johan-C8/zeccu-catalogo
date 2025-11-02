import * as React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Pelicula } from '../types'
import { movieService } from '../supabaseService'

interface ModalDetalleProps {
  pelicula: Pelicula
  onCerrar: () => void
  onActualizar: () => void
}

export const ModalDetalle: React.FC<ModalDetalleProps> = ({ pelicula, onCerrar, onActualizar }) => {
  const [mostrarEditor, setMostrarEditor] = useState(false)

  const marcarComoVista = async () => {
    const nuevasCategorias = pelicula.categorias
      .filter(cat => !['pendiente', 'en_progreso'].includes(cat))
      .concat(['vista'])
    
    await movieService.updateMovie(pelicula.id, {
      estado: 'vista',
      categorias: nuevasCategorias,
      categoria_principal: 'Vistas',
      fecha_vista: new Date().toISOString()
    })
    onActualizar()
  }

  const marcarComoPendiente = async () => {
    const nuevasCategorias = pelicula.categorias
      .filter(cat => !['vista', 'en_progreso'].includes(cat))
      .concat(['pendiente'])
    
    await movieService.updateMovie(pelicula.id, {
      estado: 'pendiente',
      categorias: nuevasCategorias,
      categoria_principal: 'Pendientes'
    })
    onActualizar()
  }

  const actualizarEstrellas = async (estrellas: number) => {
    await movieService.updateMovie(pelicula.id, {
      estrellas_amarillas: estrellas
    })
    onActualizar()
  }

  const eliminarPelicula = async () => {
    if (confirm('¿Estás seguro de eliminar esta película?')) {
      await movieService.deleteMovie(pelicula.id)
      onActualizar()
      onCerrar()
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black-90 backdrop-blur"
    >
      <div className="gradient-black-cyan rounded-3xl p-8 max-w-3xl w-full border-2 border-cyan-40 shadow-neon-strong relative max-h-[90vh] overflow-y-auto">
        <motion.button 
          onClick={onCerrar} 
          whileHover={{ scale: 1.1 }}
          className="absolute top-4 right-4 text-cyan hover-text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full bg-black-50 border border-cyan"
        >
          ✕
        </motion.button>
        
        <img src={pelicula.portada} alt={pelicula.titulo} className="w-full h-80 object-cover rounded-2xl mb-6 border-2 border-cyan" />
        
        <h3 className="text-4xl font-black mb-4 text-white tracking-wider neon-glow">{pelicula.titulo}</h3>
        
        <p className="text-cyan-90 mb-6 text-lg">{pelicula.descripcion}</p>

        <div className="flex items-center gap-3 mb-6">
          {[...Array(pelicula.estrellas_totales)].map((_, i) => (
            <motion.button 
              key={i} 
              onClick={() => actualizarEstrellas(i + 1)}
              whileHover={{ scale: 1.3 }}
              className={`text-3xl ${i < pelicula.estrellas_amarillas ? 'text-yellow' : 'text-cyan-30'}`}
            >
              ★
            </motion.button>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap">
          <motion.button 
            onClick={pelicula.estado === 'vista' ? marcarComoPendiente : marcarComoVista}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-xl gradient-cyan-blue font-bold text-white"
          >
            {pelicula.estado === 'vista' ? 'MARCAR COMO PENDIENTE' : 'MARCAR COMO VISTA'}
          </motion.button>
          
          <motion.button 
            onClick={eliminarPelicula}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-xl bg-black-50 border-2 border-red text-white font-bold shadow-red hover:shadow-red-hover"
          >
            ELIMINAR
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}