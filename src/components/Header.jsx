import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 text-white shadow-md">
      {/* Logo and Name */}
      <div className="ml-4 flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-8 w-8" />
        <span
          className="text-xl font-bold"
          style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}
        >
          futuride
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6 mr-20">
        <a href="#home" className="hover:text-gray-500 cursor-pointer">
          home
        </a>
        <a href="#cars" className="hover:text-gray-500 cursor-pointer">
          cars
        </a>
        <a href="#about" className="hover:text-gray-500 cursor-pointer">
          about
        </a>
        <a href="#deals" className="hover:text-gray-500 cursor-pointer">
          deals
        </a>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button className="text-white cursor-pointer">☰</button>
      </div>
    </header>
  );
};

export default Header;
