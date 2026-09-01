import { useEffect, useState } from "react";

const NavItem = ({ href, children, isActive }) => (
  <li className="cursor-pointer px-4 py-2">
    <a
      href={href}
      className={`block text-slate-600 transition-colors duration-200 ease-out hover:text-black ${isActive ? "font-medium text-black underline underline-offset-4" : ""}`}
    >
      {children}
    </a>
  </li>
);

const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  // Navigation items data
  const navItems = [
    { href: "/notes", label: "Notes" },
  ];

  useEffect(() => {
    // Set active item based on current path
    const currentPath = window.location.pathname.replace(/^\/|\/$/g, "");
    const activeIndex = navItems.findIndex((item) => {
      const targetPath = item.href.replace(/^\/|\/$/g, "");
      return currentPath === targetPath;
    });
    setActiveItem(activeIndex >= 0 ? activeIndex : null);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`mx-auto flex max-w-7xl flex-col border-b border-slate-200 pb-4 md:flex-row md:items-center md:justify-between ${isOpen ? "mb-12 space-y-4" : "mb-4"} md:mb-16 md:space-y-0`}
      style={{ viewTransitionName: "navbar" }}
    >
      <div className="flex w-full items-center justify-between md:w-auto">
        <div className="flex items-center space-x-2">
          <a href="/" className="transition-all duration-200 ease-out">
            {children}
          </a>
          <button
            className="p-1 text-slate-600 transition-colors duration-200 ease-out hover:text-black focus:outline-none md:hidden"
            aria-label="Toggle Navigation"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={`h-4 w-4 transition-all duration-300 ease-out ${isOpen ? "rotate-180" : "rotate-0"} `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

      </div>

      <nav
        className={`flex items-center space-x-4 ${!isOpen ? "hidden md:flex" : ""}`}
      >
        <div
          className={`relative overflow-hidden transition-all duration-300 ease-out ${
            isOpen
              ? "h-auto translate-y-0 opacity-100"
              : "h-0 -translate-y-2 opacity-0"
          } md:h-auto md:translate-y-0 md:opacity-100`}
        >
          <div>
            <ul className="flex space-x-1">
              {navItems.map((item, index) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  isActive={activeItem === index}
                >
                  {item.label}
                </NavItem>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
