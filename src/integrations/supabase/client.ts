
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dbvshbjyebszbiywqifq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRidnNoYmp5ZWJzemJpeXdxaWZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5ODQ1NDgsImV4cCI6MjA1NTU2MDU0OH0.BDlvi5FKSXjgPNXjMoxiRO-xWaZLC6H-9N2FgHYVYUw';

export const supabase = createClient(supabaseUrl, supabaseKey);
