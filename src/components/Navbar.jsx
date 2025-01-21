import { useState } from "react";

const NavItem = ({ href, children, dark }) => {
  console.log(window.location.pathname);
  const isActive = window.location.pathname.replace(/^\/|\/$/g, '') === href.replace(/^\/|\/$/g, '');
  const activeBg = dark ? "bg-white" : "bg-black"

  return (
    <li
      className={`px-4 py-1 rounded ${
        dark ? "hover:bg-white" : "hover:bg-black"
      } hover:bg-opacity-5 ${isActive ? activeBg : "bg-transparent"} bg-opacity-20`}
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
      className={`flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 ${isOpen ? "mb-12" : "mb-4"} md:mb-8`}
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
          <NavItem href="#" dark={props.dark}>
            Projects
          </NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
