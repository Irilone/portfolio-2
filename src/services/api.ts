
import { supabase } from "@/integrations/supabase/client";

export const api = {
  supabase,
  handleError: (error: Error) => {
    console.error('API Error:', error);
    throw error;
  }
};
