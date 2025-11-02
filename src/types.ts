export interface Pelicula {
  id: number;
  titulo: string;
  categorias: string[];
  categoria_principal: string;
  estrellas_totales: number;
  estrellas_amarillas: number;
  descripcion: string;
  portada: string;
  estado: 'pendiente' | 'vista' | 'en_progreso';
  fecha_agregada: string;
  fecha_vista?: string;
}

export interface Categoria {
  nombre: string;
  color: string;
}