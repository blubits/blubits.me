import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "../ThemeToggle.tsx";

const NavItem = ({ href, children, dark, onHover, isHovered, isActive, itemRef }) => {
  const getTextClasses = () => {
    if (isActive) {
      return "text-opacity-100 font-medium";
    }
    if (isHovered) {
      return "text-opacity-90";
    }
    return "text-opacity-75";
  };

  return (
    <li
      ref={itemRef}
      className="relative px-4 py-2 cursor-pointer"
      onMouseEnter={onHover}
    >
      <a 
        href={href}
        className={`
          relative z-10 block
          transition-opacity duration-200 ease-out
          ${getTextClasses()}
        `}
      >
        {children}
      </a>
    </li>
  );
};

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);
  const itemRefs = useRef([]);

  // Navigation items data
  const navItems = [
    { href: "/tutoring", label: "Tutoring" },
    { href: "/notes", label: "Notes" }
  ];

  useEffect(() => {
    // Set active item based on current path
    const currentPath = window.location.pathname.replace(/^\/|\/$/g, "");
    const activeIndex = navItems.findIndex(item => {
      const targetPath = item.href.replace(/^\/|\/$/g, "");
      return currentPath === targetPath;
    });
    setActiveItem(activeIndex >= 0 ? activeIndex : null);
  }, []);

  useEffect(() => {
    // Calculate indicator position based on actual element dimensions
    const targetIndex = hoveredItem !== null ? hoveredItem : activeItem;
    
    if (targetIndex !== null && navRef.current && itemRefs.current[targetIndex]) {
      const targetElement = itemRefs.current[targetIndex];
      const navRect = navRef.current.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
      
      setIndicatorStyle({
        left: targetRect.left - navRect.left,
        width: targetRect.width,
        opacity: 1,
      });
    } else {
      setIndicatorStyle({ opacity: 0 });
    }
  }, [hoveredItem, activeItem]);

  const handleItemHover = (index) => {
    setHoveredItem(index);
  };

  const handleNavLeave = () => {
    setHoveredItem(null);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Determine which item should show the indicator
  const targetItem = hoveredItem !== null ? hoveredItem : activeItem;

  return (
    <header
      className={`
        -z-50 mx-auto flex max-w-7xl flex-col space-y-4 
        rounded-4xl bg-white/20 dark:bg-black/20 border border-white/30 dark:border-gray-700/30
        px-8 py-2 shadow-2xl backdrop-blur-xl backdrop-saturate-150 
        md:flex-row md:items-center md:justify-between md:space-y-0 
        transition-all duration-300 ease-out
        ${isOpen ? "mb-12" : "mb-4"} 
        md:mb-16
        ${isHovered ? 'shadow-3xl border-white/40 dark:border-gray-600/40' : ''}
        hover:backdrop-blur-2xl
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-2">
        <a 
          href="/"
          className="transition-all duration-200 ease-out transform-gpu hover:scale-110 active:scale-95"
        >
          {props.children}
        </a>
        <button
          className={`
            focus:outline-none md:hidden
            rounded-full p-1
            transition-all duration-200 ease-out transform-gpu
            hover:scale-110 active:scale-90
            ${isOpen ? 'bg-white/10 dark:bg-gray-700/20' : 'hover:bg-white/10 dark:hover:bg-gray-700/20'}
          `}
          aria-label="Toggle Navigation"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className={`
              h-4 w-4 
              transition-all duration-300 ease-out
              ${isOpen ? "rotate-180" : "rotate-0"}
            `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      
      <nav className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <ThemeToggle />
        
        <div
          className={`
            relative overflow-hidden
            transition-all duration-300 ease-out
            ${isOpen 
              ? "h-auto opacity-100 translate-y-0" 
              : "h-0 opacity-0 -translate-y-2"
            } 
            md:h-auto md:opacity-100 md:translate-y-0
          `}
        >
          <div className="relative">
            {/* Sliding hover indicator */}
            <AnimatePresence>
              {targetItem !== null && (
                <motion.div
                  className={`
                    absolute top-0 rounded-lg h-full
                    pointer-events-none
                    ${props.dark ? 'bg-white/20 shadow-lg shadow-white/10' : 'bg-black/20 dark:bg-white/20 shadow-lg shadow-black/10 dark:shadow-white/10'}
                    backdrop-blur-md
                  `}
                  layoutId="nav-indicator"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: indicatorStyle.opacity || 1,
                    x: indicatorStyle.left || 0,
                    width: indicatorStyle.width || 'auto'
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 30
                  }}
                />
              )}
            </AnimatePresence>
            
            <ul
              ref={navRef}
              className="flex space-x-1 relative"
              onMouseLeave={handleNavLeave}
            >
              {navItems.map((item, index) => (
                <NavItem 
                  key={item.href}
                  href={item.href} 
                  dark={props.dark}
                  onHover={() => handleItemHover(index)}
                  isHovered={hoveredItem === index}
                  isActive={activeItem === index}
                  itemRef={(el) => itemRefs.current[index] = el}
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
