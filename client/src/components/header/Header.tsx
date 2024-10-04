import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./header.css";

const Header: React.FunctionComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode and light mode toggle
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Body of what we see
  return (
    <header
      className={`header-container flex items-center justify-between p-4 ${
        isDarkMode ? "bg-gray-800 text-white" : "text-black"
      }`}
    >
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className={`px-4 py-2 ${
            isDarkMode
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-yellow-100 hover:bg-gray-200"
          } rounded flex items-center`}
        >
          <img src="/header/menu.svg" alt="Menu" className="w-6 h-6 mr-2" />
        </button>

        {/* Dropdown is open */}
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <Link to="/" className="block w-full text-left">
                  StartPage
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <Link to="/Settings" className="block w-full text-left">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Page names to route to */}
      <nav className="flex space-x-8">
        <Link
          to="/HomePage"
          className={`hover:${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`hover:${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          About
        </Link>{" "}
        <Link
          to="/InsertPage"
          className={`hover:${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          Add Article
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <Link
          to="/RegisterPage"
          className={`hover:${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          Register
        </Link>
        <Link
          to="/LoginPage"
          className={`hover:${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          Login
        </Link>
        <button
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-yellow-100 text-black"
          } transition`}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
