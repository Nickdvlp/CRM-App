import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/dashboard" },
    {
      name: "Products",
      path: "/dashboard/products",
    },
  ];
  return (
    <div className="w-64 h-full bg-gray-900 text-white flex flex-col px-6 py-8">
      <nav className="flex flex-col space-y-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors
              ${
                location.pathname === link.path
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }
            `}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
