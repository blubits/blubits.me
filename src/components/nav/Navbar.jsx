import { useState, useEffect } from "react";

// TODO: Use target: instead of programmatic setting.
const NavItem = ({ href, children, dark }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname.replace(/^\/|\/$/g, "");
    const targetPath = href.replace(/^\/|\/$/g, "");
    setIsActive(currentPath === targetPath);
  }, [href]);

  const activeBg = dark ? "bg-white/20" : "bg-black/20";
  let hoverBg = dark ? "hover:bg-white/5" : "hover:bg-black/5";

  if (isActive) {
    hoverBg = dark ? "hover:bg-white/30" : "hover:bg-black/30";
  }

  return (
    <li
      className={`rounded px-4 py-1 ${isActive ? activeBg : "bg-transparent"} ${hoverBg}`}
    >
      <a href={href}>{children}</a>
    </li>
  );
};

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`-z-50 mx-auto flex max-w-7xl flex-col space-y-4 rounded-4xl bg-black/5 px-8 py-2 shadow backdrop-blur md:flex-row md:items-center md:justify-between md:space-y-0 ${isOpen ? "mb-12" : "mb-4"} md:mb-16`}
    >
      <div className="flex items-center space-x-2">
        <a href="/">{props.children}</a>
        <button
          className="focus:outline-none md:hidden"
          aria-label="Toggle Navigation"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className={`h-4 w-4 transition-all ease-in-out ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <nav className="flex items-center">
        <ul
          className={`flex space-x-2 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "h-auto opacity-100" : "h-0 opacity-0"} md:h-auto md:opacity-100`}
        >
          <NavItem href="/tutoring" dark={props.dark}>
            Tutoring
          </NavItem>
          <NavItem href="/notes" dark={props.dark}>
            Notes
          </NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
