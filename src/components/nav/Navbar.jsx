import { useEffect, useState } from "react";

const NavItem = ({ href, children, isActive }) => (
  <li className="cursor-pointer">
    <a
      href={href}
      className={`block px-4 py-3 text-slate-600 transition-colors duration-200 ease-out hover:text-black md:px-4 md:py-2 ${isActive ? "font-medium text-black underline underline-offset-4" : ""}`}
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
      className="relative mx-auto mb-4 flex max-w-7xl flex-col pb-4 md:mb-16 md:flex-row md:items-center md:justify-start md:space-x-3"
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
        className={`absolute left-1/2 top-full z-20 w-screen -translate-x-1/2 ${!isOpen ? "hidden" : ""} md:static md:z-auto md:flex md:w-auto md:translate-x-0 md:items-center`}
      >
        <div
          className={`overflow-hidden bg-white/60 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ease-out ${
            isOpen
              ? "h-auto translate-y-0 border-b border-slate-900/5 opacity-100 shadow-[0_12px_24px_-12px_rgba(15,23,42,0.2)]"
              : "h-0 -translate-y-2 opacity-0"
          } md:h-auto md:translate-y-0 md:overflow-visible md:border-none md:bg-transparent md:opacity-100 md:shadow-none md:backdrop-blur-none md:backdrop-saturate-100`}
        >
          <ul className="flex flex-col divide-y divide-slate-900/10 px-8 md:flex-row md:items-center md:space-x-1 md:divide-y-0 md:px-0">
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
      </nav>
    </header>
  );
};

export default Navbar;
