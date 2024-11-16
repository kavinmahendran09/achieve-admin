// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jzgisslizhrhnovplcuz.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6Z2lzc2xpemhyaG5vdnBsY3V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MTkxODQsImV4cCI6MjA0NjM5NTE4NH0.u8W08GTXiiVf0SnQ6MykkWXfUl8bz68TKG6bmbP6ov4'; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseKey);
