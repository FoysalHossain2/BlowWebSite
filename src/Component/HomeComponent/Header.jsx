import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context";
import moon from "../../assets/icons/moon.svg";
import sun from "../../assets/icons/sun.svg";

const Header = () => {
  const NavItem = [
    {
      id: 1,
      title: "Features",
    },
    {
      id: 2,
      title: "Boxing & MMA",
    },
    {
      id: 3,
      title: "Top Posts",
    },
    {
      id: 4,
      title: "Shop",
    },
  ];
  const [isOpen, setIsOpen] = useState(null); // Dropdown state
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu state
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDropdown = (menu) => {
    setIsOpen(menu === isOpen ? null : menu);
  };

  return (
    <>
      <div className="relative">
        {/* Background Blur */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
            onClick={() => setIsOpen(null)}
          ></div>
        )}

        {/* Navbar */}

        <nav className="relative bg-white dark:bg-gray-800 shadow z-20 ">
          <div className="container mx-auto flex justify-between items-center">
            <button
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              <img src={darkMode ? sun : moon} width="24" height="24" alt="" />
            </button>
            <div className="text-xl font-bold text-gray-800 dark:text-white">
              MOW Sport
            </div>
            <div></div>
          </div>

          <div className="container mx-auto flex lg:justify-center justify-between md:justify-between sm:justify-between items-center py-8">
            <div></div>
            {/* Hamburger Menu for Mobile */}
            <button
              className="lg:hidden text-gray-800 dark:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex space-x-6">
              {NavItem.map((menu, id) => (
                <li
                  key={id}
                  className="relative group"
                  onMouseEnter={() => toggleDropdown(menu.title)}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <button className="text-gray-800 dark:text-white hover:text-blue-500 focus:outline-none">
                    {menu.title} ▼
                  </button>
                  {isOpen === menu.title && (
                    <div className="absolute top-full left-0 bg-white dark:bg-gray-700 mt-2 p-4 rounded shadow-lg">
                      <ul>
                        {["Option 1", "Option 2", "Option 3"].map(
                          (option, idx) => (
                            <li
                              key={idx}
                              className="py-2 px-4 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 rounded"
                            >
                              {option}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white dark:bg-gray-800 shadow-lg">
              <ul>
                {[
                  "Home & Demos",
                  "Features",
                  "Boxing & MMA",
                  "Top Posts",
                  "Shop",
                ].map((menu, index) => (
                  <li
                    key={index}
                    className="relative group border-b border-gray-200 dark:border-gray-700"
                  >
                    <button
                      className="w-full text-left py-3 px-4 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none"
                      onClick={() => toggleDropdown(menu)}
                    >
                      {menu} ▼
                    </button>
                    {isOpen === menu && (
                      <div className="bg-gray-100 dark:bg-gray-700 p-4">
                        <ul>
                          {["Option 1", "Option 2", "Option 3"].map(
                            (option, idx) => (
                              <li
                                key={idx}
                                className="py-2 px-4 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                              >
                                {option}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
