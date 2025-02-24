import { createClient } from "@supabase/supabase-js";

// ใช้ข้อมูลจาก Supabase Project ของคุณ
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// สร้าง Client ของ Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
