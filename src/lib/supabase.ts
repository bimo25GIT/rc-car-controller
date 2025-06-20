import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Capture {
  id: string;
  filename: string;
  file_path: string;
  file_size: number;
  mime_type: string;
  captured_at: string;
  description?: string;
  tags?: string[];
  created_at: string;
  updated_at: string;
}