import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gthxrptlryfokhlmfrfz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0aHhycHRscnlmb2tobG1mcmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMjA3MDIsImV4cCI6MjAxNTc5NjcwMn0.DBTE8oTGU8AZRzmZaw6iIEtEX1V8Wi6EX3dzxtJBvFw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
