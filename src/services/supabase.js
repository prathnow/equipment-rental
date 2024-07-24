import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dfxnntcmluwauxbfaxfe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmeG5udGNtbHV3YXV4YmZheGZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4Mjg0MTAsImV4cCI6MjAzNzQwNDQxMH0.I7KtMUDogpJfyzwcENcR1RbwlcpwPAgmcXMCTqIcI9k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
