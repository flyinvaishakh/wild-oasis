
import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://vzlrnztenjyvojtjjwbe.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bHJuenRlbmp5dm9qdGpqd2JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MTcyNDgsImV4cCI6MjA0NDM5MzI0OH0.qEWCJOcYOeQ9bf00UncAm-Y_VniG1tZNfnLUoy6B_fw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
