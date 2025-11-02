import * as React from 'react'
import { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { IconPlus } from '../icons'

interface FormularioAgregarProps {
  onAgregar: (titulo: string, categoria: string) => void
}

export const FormularioAgregar: React.FC<FormularioAgregarProps> = ({ onAgregar }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const titulo = data.get('titulo') as string
    const categoria = data.get('categoria') as string
    
    if (titulo.trim()) {
      onAgregar(titulo, categoria)
      form.reset()
    }
  }

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="flex flex-col md-flex-row items-center gap-4 bg-black-40 p-6 rounded-2xl border-2 border-cyan"
    >
      <input 
        name="titulo" 
        placeholder="TÍTULO DE LA PELÍCULA" 
        className="flex-1 px-5 py-3 rounded-xl bg-black-60 border-2 border-cyan text-white placeholder-cyan font-medium focus-outline focus-border" 
        required
      />
      <select 
        name="categoria" 
        className="px-5 py-3 rounded-xl bg-black-60 border-2 border-cyan text-white font-medium focus-outline focus-border"
      >
        <option value="Pendientes">Pendientes</option>
        <option value="Vistas">Vistas</option>
        <option value="Próximas">Próximas</option>
        <option value="Para ver juntos">Para ver juntos</option>
      </select>
      <motion.button 
        type="submit" 
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 gradient-cyan-blue px-8 py-3 rounded-xl font-bold text-white"
      >
        <IconPlus className="w-5 h-5" /> AGREGAR
      </motion.button>
    </motion.form>
  )
}