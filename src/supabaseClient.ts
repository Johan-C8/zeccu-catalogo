import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://tbmdwlthhuddwomqydno.supabase.co' 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRibWR3bHRoaHVkZHdvbXF5ZG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MzcxMzgsImV4cCI6MjA3NzUxMzEzOH0.cyS8fSX_im61m-Rwhptm0EpeaXqfYSQVBdZhvni9JIg'  


export const supabase = createClient(supabaseUrl, supabaseAnonKey)

