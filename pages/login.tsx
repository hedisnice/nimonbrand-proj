import { useState } from "react";
import supabase from "../lib/supabase";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: username,
      password,
    });
    if (data) {
      window.location.href = "/"; // ไปหน้าหลักเมื่อเข้าสู่ระบบสำเร็จ
    }
    if (error) console.error(error);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">เข้าสู่ระบบ</h1>
      <input
        type="text"
        className="p-2 mb-2 border"
        placeholder="ชื่อผู้ใช้"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="p-2 mb-2 border"
        placeholder="รหัสผ่าน"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2">
        เข้าสู่ระบบ
      </button>
    </div>
  );
};

export default Login;
