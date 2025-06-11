import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] min-h-screen">
        {/* Sidebar */}
        <div
          className={`fixed md:static z-50 bg-gray-200 h-full transition-transform duration-300 ease-in-out
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        >
          <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="absolute top-12 right-1 md:hidden p-4 text-gray-700"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu size={28} />
        </button>

        {/* Main Section */}
        <main className="p-4 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
