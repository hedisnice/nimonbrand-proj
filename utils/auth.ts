import supabase from "../lib/supabase";

// ฟังก์ชันตรวจสอบ session ของผู้ใช้
export const checkUserSession = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (user) {
    return user;
  } else {
    return null;
  }
};

// ตรวจสอบข้อมูล username และ password จากฐานข้อมูล
export const checkUserCredentials = async (
  username: string,
  password: string
) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .eq("password", password)
    .single(); // `.single()` เพื่อให้ได้ข้อมูลเพียง 1 แถว

  if (error) {
    console.error("Error: ", error.message);
    return null; // หากมีข้อผิดพลาด
  }

  return data; // คืนค่าผู้ใช้ (ถ้ามี)
};
