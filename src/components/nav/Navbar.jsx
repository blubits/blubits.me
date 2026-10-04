const Navbar = ({ children }) => (
  <header
    className="relative -mx-8 mb-4 flex max-w-7xl bg-transparent px-8 pb-4 md:mx-auto md:mb-16 md:px-0"
    style={{ viewTransitionName: "navbar" }}
  >
    <a href="/" className="transition-all duration-200 ease-out">
      {children}
    </a>
  </header>
);

export default Navbar;
