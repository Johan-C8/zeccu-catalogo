import { supabase } from './supabaseClient';
import { Pelicula } from './types';

export const movieService = {
  async getMovies(): Promise<Pelicula[]> {
    const { data, error } = await supabase
      .from('peliculas')
      .select('*')
      .order('fecha_agregada', { ascending: false });
    
    if (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
    return data || [];
  },

  async addMovie(movie: Omit<Pelicula, 'id'>): Promise<Pelicula | null> {
    const { data, error } = await supabase
      .from('peliculas')
      .insert([movie])
      .select()
      .single();
    
    if (error) {
      console.error('Error adding movie:', error);
      return null;
    }
    return data;
  },

  async updateMovie(id: number, updates: Partial<Pelicula>): Promise<boolean> {
    const { error } = await supabase
      .from('peliculas')
      .update(updates)
      .eq('id', id);
    
    if (error) {
      console.error('Error updating movie:', error);
      return false;
    }
    return true;
  },

  async deleteMovie(id: number): Promise<boolean> {
    const { error } = await supabase
      .from('peliculas')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Error deleting movie:', error);
      return false;
    }
    return true;
  }
};