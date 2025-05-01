
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'Donors', path: '/donors' },
    { name: 'ID Card', path: '/id-card' },
    { name: 'Important Links', path: '/links' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-ngo-primary">Kindred Hearts</span>
            <span className="text-ngo-secondary font-semibold">Foundation</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className="px-3 py-2 text-ngo-secondary hover:text-ngo-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-4 space-x-2">
              <Button variant="outline" size="sm" className="border-ngo-primary text-ngo-primary hover:bg-ngo-primary hover:text-white">
                <Link to="/login">Login</Link>
              </Button>
              <Button size="sm" className="bg-ngo-primary text-white hover:bg-ngo-primary/90">
                <Link to="/donate">Donate</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-ngo-secondary hover:text-ngo-primary p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-inner">
          <div className="container-custom mx-auto space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-4 py-2 text-ngo-secondary hover:bg-ngo-primary/10 rounded-md"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2 px-4">
              <Button variant="outline" size="md" className="w-full  border-ngo-primary text-ngo-primary hover:bg-ngo-primary  hover:text-white">
                <Link to="/login" onClick={toggleMenu}>Login</Link>
              </Button>
              <Button size="md" className="w-full  bg-ngo-primary text-white hover:bg-ngo-primary/90 p-4">
                <Link to="/donate" onClick={toggleMenu} className='p-10'>Donate</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
