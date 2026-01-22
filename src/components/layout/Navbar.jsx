import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation when returning to home page
  useEffect(() => {
    if (isHomePage && location.hash) {
      const sectionId = location.hash.substring(1); // Remove the #
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 64; // Navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [isHomePage, location.hash]);

  const handleNavClick = (sectionId) => {
    if (!isHomePage) {
      // If not on home page, navigate to home with hash
      navigate(`/#${sectionId}`);
      // The hash will be handled by the browser, but we'll also ensure scrolling happens
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 64; // Navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 200);
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {isHomePage ? (
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="text-2xl font-bold text-gradient cursor-pointer"
            >
              Lucas Stone's Portfolio
            </ScrollLink>
          ) : (
            <RouterLink
              to="/"
              className="text-2xl font-bold text-gradient cursor-pointer"
            >
              Lucas Stone's Portfolio
            </RouterLink>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              isHomePage ? (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  activeClass="text-primary-500"
                  className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-300"
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-300"
                >
                  {link.name}
                </button>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-secondary border-t border-dark-accent">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              isHomePage ? (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  activeClass="text-primary-500"
                  className="block text-gray-300 hover:text-white cursor-pointer transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="block text-gray-300 hover:text-white cursor-pointer transition-colors duration-300 w-full text-left"
                >
                  {link.name}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
