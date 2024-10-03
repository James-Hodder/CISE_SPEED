import { useState } from "react";
import './header.css';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

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

        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Option 1
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Option 2
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Option 3
              </li>
            </ul>
          </div>
        )}
      </div>

      <nav className="flex space-x-8">
        <a
          href="/"
          className={`hover:${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          Home
        </a>
        <a
          href="/categories"
          className={`hover:${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          Categories
        </a>
        <a
          href="/about"
          className={`hover:${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          About
        </a>
      </nav>

      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 rounded ${
          isDarkMode ? "bg-gray-700 text-white" : "bg-yellow-100 text-black"
        } transition`}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
