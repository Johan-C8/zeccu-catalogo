import * as React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Pelicula } from './types'
import { movieService } from './supabaseService'
import { Header } from './components/Header'
import { BarraNavegacion } from './components/BarraNavegacion'
import { TarjetaPelicula } from './components/TarjetaPelicula'
import { ModalDetalle } from './components/ModalDetalle'
import { FormularioAgregar } from './components/FormularioAgregar'
import { FondoAurora } from './components/FondoAurora' // ← AGREGAR ESTA LÍNEA
import './styles.css'

function App() {
  const [peliculas, setPeliculas] = useState<Pelicula[]>([])
  const [filtro, setFiltro] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')
  const [vistaDetalle, setVistaDetalle] = useState<Pelicula | null>(null)
  const [cargando, setCargando] = useState(true)

  // Cargar películas al iniciar
  useEffect(() => {
    cargarPeliculas()
  }, [])

  const cargarPeliculas = async () => {
    setCargando(true)
    const datos = await movieService.getMovies()
    setPeliculas(datos)
    setCargando(false)
  }

  const agregarPelicula = async (titulo: string, categoria: string) => {
    let estado: 'pendiente' | 'vista' | 'en_progreso' = 'pendiente'
    if (categoria === 'Vistas') {
      estado = 'vista'
    }

    const nuevaPelicula = {
      titulo,
      categorias: [categoria.toLowerCase(), 'pelicula'],
      categoria_principal: categoria,
      estrellas_totales: 5,
      estrellas_amarillas: 0,
      descripcion: 'Agrega una descripción aquí.',
      portada: `https://via.placeholder.com/300x450?text=${encodeURIComponent(titulo)}`,
      estado: estado,
      fecha_agregada: new Date().toISOString()
    }

    await movieService.addMovie(nuevaPelicula)
    cargarPeliculas()
  }

  const limpiarFiltros = () => {
    setFiltro('Todas')
    setBusqueda('')
  }

  // Filtrar películas
  const peliculasFiltradas = peliculas.filter(pelicula => {
    if (filtro !== 'Todas' && pelicula.categoria_principal !== filtro) return false
    if (busqueda && !pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase())) return false
    return true
  })

  const categorias = [
    { nombre: 'Vistas', color: 'yellow' },
    { nombre: 'Pendientes', color: 'cyan' },
    { nombre: 'Próximas', color: 'fuchsia' },
    { nombre: 'Para ver juntos', color: 'lime' },
  ]

  return (
    <div className="min-h-screen relative text-white flex flex-col bg-black overflow-hidden">
      {/* AGREGAR EL FONDO AQUÍ */}
      <FondoAurora />
      
      <Header onVolverInicio={limpiarFiltros} />
      <BarraNavegacion filtro={filtro} setFiltro={setFiltro} />

      <main className="flex-1 px-6 py-8 max-w-7xl mx-auto w-full relative z-10">
        {/* Barra de búsqueda */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-lg">
            <input 
              placeholder="BUSCAR TÍTULOS..." 
              value={busqueda} 
              onChange={e => setBusqueda(e.target.value)}
              className="w-full px-6 py-4 text-center bg-black-40 border-2 border-cyan-50 rounded-2xl focus-outline text-white placeholder-cyan font-medium shadow-input backdrop-blur"
            />
            {busqueda && (
              <button
                onClick={() => setBusqueda('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan hover-text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Contenido principal */}
        {cargando ? (
          <div className="text-center text-cyan text-xl">Cargando...</div>
        ) : (
          <>
            {filtro !== 'Todas' || busqueda ? (
              <div className="categoria-destacada p-8 mx-6 my-8 backdrop-blur">
                <h2 className="text-4xl font-black text-center mb-8 neon-glow">
                  {filtro !== 'Todas' ? filtro.toUpperCase() : 'RESULTADOS DE BÚSQUEDA'}
                </h2>
                <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 xl-grid-cols-4 gap-6 justify-items-center">
                  {peliculasFiltradas.map(pelicula => (
                    <TarjetaPelicula 
                      key={pelicula.id} 
                      pelicula={pelicula} 
                      onVerDetalle={setVistaDetalle} 
                    />
                  ))}
                </div>
              </div>
            ) : (
              <>
                {categorias.map(categoria => {
                  const peliculasCategoria = peliculas.filter(p => 
                    p.categoria_principal === categoria.nombre
                  )
                  
                  return peliculasCategoria.length > 0 ? (
                    <section key={categoria.nombre} className="mb-12">
                      <h2 className="text-3xl font-bold mb-6 text-white neon-section">
                        {categoria.nombre}
                      </h2>
                      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                        {peliculasCategoria.map(pelicula => (
                          <TarjetaPelicula 
                            key={pelicula.id} 
                            pelicula={pelicula} 
                            onVerDetalle={setVistaDetalle} 
                          />
                        ))}
                      </div>
                    </section>
                  ) : null
                })}
              </>
            )}
          </>
        )}
      </main>

      {/* Footer con formulario */}
      <footer className="bg-black-40 border-t border-cyan py-12 px-6 backdrop-blur relative z-10">
        <div className="max-w-4xl mx-auto">
          <FormularioAgregar onAgregar={agregarPelicula} />
          <p className="mt-6 text-center text-sm text-cyan-60">
            LOS DATOS SE GUARDAN EN LA BASE DE DATOS
          </p>
        </div>
      </footer>

      {/* Modal de detalle */}
      <AnimatePresence>
        {vistaDetalle && (
          <ModalDetalle 
            pelicula={vistaDetalle}
            onCerrar={() => setVistaDetalle(null)}
            onActualizar={cargarPeliculas}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App