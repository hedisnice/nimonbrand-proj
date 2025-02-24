import { useState } from "react";
import Sidebar from "../components/Sidebar";

const Layout = ({
  children,
  setActivePage,
}: {
  children: React.ReactNode;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  return (
    <div className="flex flex-col h-screen bg-[#E9E0D3] font-sans">
      {/* Header */}
      <header className="bg-[#61391B] p-4 text-white flex justify-start items-center">
        <div className="container flex items-center gap-5">
          {/* ปุ่มสำหรับเปิด/ปิด Sidebar */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white text-2xl p-2 transition-transform duration-300 transform hover:scale-110"
          >
            ☰
          </button>
          <h1 className="text-3xl font-semibold">Nimon Brand</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-auto">
        {/* Sidebar */}
        <Sidebar setActivePage={setActivePage} sidebarOpen={sidebarOpen} />

        {/* Content Area */}
        <main className="flex-1 p-6 bg-white overflow-y-auto">{children}</main>
      </div>

      {/* Footer */}
      <footer className="bg-[#825437] text-white p-4 text-center">
        <p>&copy; 2025 Nimon Brand Management</p>
      </footer>
    </div>
  );
};

export default Layout;
