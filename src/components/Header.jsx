import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 text-white">
      {/* Logo and Name */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-8 w-8" />
        <span className="text-xl font-bold" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
          futuride
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-gray-500" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
          Home
        </a>
        <a href="#cars" className="hover:text-gray-500" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
          Cars
        </a>
        <a href="#about" className="hover:text-gray-500" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
          About
        </a>
        <a href="#deals" className="hover:text-gray-500" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
          Deals
        </a>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button className="text-white">☰</button>
      </div>
    </header>
  );
};

export default Header;
