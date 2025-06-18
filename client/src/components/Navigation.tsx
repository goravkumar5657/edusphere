import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useScrollspy } from "@/hooks/useScrollspy";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [location] = useLocation();
  const activeSection = useScrollspy(['home', 'features', 'subjects', 'grammar', 'about', 'contact']);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // TODO: Implement search functionality
    console.log('Searching for:', e.target.value);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isActiveLink = (href: string) => {
    if (location === "/" && href.startsWith("#")) {
      return activeSection === href.substring(1);
    }
    return location === href;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-edu-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-edu-blue rounded-xl flex items-center justify-center animate-rotate-slow">
              <i className="fas fa-globe text-white text-lg"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-edu-blue">EduSphere</h1>
              <p className="text-xs text-edu-gray-500 -mt-1">Your Learning Universe</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {location === "/" ? (
              <>
                <button 
                  onClick={() => scrollToSection('home')}
                  className={`transition-colors ${isActiveLink('#home') 
                    ? 'text-edu-blue font-medium border-b-2 border-edu-blue pb-1' 
                    : 'text-edu-gray-500 hover:text-edu-blue'
                  }`}
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('subjects')}
                  className={`transition-colors ${isActiveLink('#subjects') 
                    ? 'text-edu-blue font-medium border-b-2 border-edu-blue pb-1' 
                    : 'text-edu-gray-500 hover:text-edu-blue'
                  }`}
                >
                  Subjects
                </button>
                <button 
                  onClick={() => scrollToSection('grammar')}
                  className={`transition-colors ${isActiveLink('#grammar') 
                    ? 'text-edu-blue font-medium border-b-2 border-edu-blue pb-1' 
                    : 'text-edu-gray-500 hover:text-edu-blue'
                  }`}
                >
                  Grammar
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className={`transition-colors ${isActiveLink('#about') 
                    ? 'text-edu-blue font-medium border-b-2 border-edu-blue pb-1' 
                    : 'text-edu-gray-500 hover:text-edu-blue'
                  }`}
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`transition-colors ${isActiveLink('#contact') 
                    ? 'text-edu-blue font-medium border-b-2 border-edu-blue pb-1' 
                    : 'text-edu-gray-500 hover:text-edu-blue'
                  }`}
                >
                  Contact
                </button>
              </>
            ) : (
              <>
                <Link 
                  href="/"
                  className={`transition-colors ${isActiveLink('/') 
                    ? 'text-edu-blue font-medium border-b-2 border-edu-blue pb-1' 
                    : 'text-edu-gray-500 hover:text-edu-blue'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  href="/notes"
                  className={`transition-colors ${isActiveLink('/notes') 
                    ? 'text-edu-blue font-medium border-b-2 border-edu-blue pb-1' 
                    : 'text-edu-gray-500 hover:text-edu-blue'
                  }`}
                >
                  Notes
                </Link>
                <Link 
                  href="/grammar"
                  className={`transition-colors ${isActiveLink('/grammar') 
                    ? 'text-edu-blue font-medium border-b-2 border-edu-blue pb-1' 
                    : 'text-edu-gray-500 hover:text-edu-blue'
                  }`}
                >
                  Grammar
                </Link>
                <Link 
                  href="/animations"
                  className={`transition-colors ${isActiveLink('/animations') 
                    ? 'text-edu-blue font-medium border-b-2 border-edu-blue pb-1' 
                    : 'text-edu-gray-500 hover:text-edu-blue'
                  }`}
                >
                  Animations
                </Link>
                <Link 
                  href="/about"
                  className={`transition-colors ${isActiveLink('/about') 
                    ? 'text-edu-blue font-medium border-b-2 border-edu-blue pb-1' 
                    : 'text-edu-gray-500 hover:text-edu-blue'
                  }`}
                >
                  About
                </Link>
                <Link 
                  href="/contact"
                  className={`transition-colors ${isActiveLink('/contact') 
                    ? 'text-edu-blue font-medium border-b-2 border-edu-blue pb-1' 
                    : 'text-edu-gray-500 hover:text-edu-blue'
                  }`}
                >
                  Contact
                </Link>
              </>
            )}
          </div>
          
          {/* Search Bar */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search topics..." 
                value={searchTerm}
                onChange={handleSearch}
                className="w-64 pl-10 pr-4 py-2 bg-edu-gray-50 border border-edu-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-transparent transition-all"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-edu-gray-500"></i>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-edu-gray-100 transition-colors" 
            onClick={toggleMobileMenu}
          >
            <i className="fas fa-bars text-edu-gray-600"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-edu-gray-200">
          <div className="px-4 py-4 space-y-4">
            {location === "/" ? (
              <>
                <button 
                  onClick={() => {
                    scrollToSection('home');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-edu-blue font-medium"
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('subjects');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-edu-gray-500"
                >
                  Subjects
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('grammar');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-edu-gray-500"
                >
                  Grammar
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('about');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-edu-gray-500"
                >
                  About
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-edu-gray-500"
                >
                  Contact
                </button>
              </>
            ) : (
              <>
                <Link href="/" className="block text-edu-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                <Link href="/notes" className="block text-edu-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Notes</Link>
                <Link href="/grammar" className="block text-edu-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Grammar</Link>
                <Link href="/animations" className="block text-edu-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Animations</Link>
                <Link href="/about" className="block text-edu-gray-500" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                <Link href="/contact" className="block text-edu-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              </>
            )}
            <div className="pt-4 border-t border-edu-gray-200">
              <input 
                type="text" 
                placeholder="Search topics..." 
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 bg-edu-gray-50 border border-edu-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-edu-blue relative"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-edu-gray-500 pointer-events-none"></i>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
