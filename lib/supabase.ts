import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bdqwtokgymosfzdafykx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkcXd0b2tneW1vc2Z6ZGFmeWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzNjczMjYsImV4cCI6MjA1NTk0MzMyNn0.edvJ5VcACjimg79XXCwmKnmeCv-X44ZJCw1qw0Adbgg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
