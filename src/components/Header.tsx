import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Home, Users, Briefcase, Phone } from 'lucide-react';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  theme,
  toggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'about', label: 'About Us', icon: <Users size={18} /> },
    { id: 'services', label: 'Services', icon: <Briefcase size={18} /> },
    { id: 'contact', label: 'Contact Us', icon: <Phone size={18} /> },
  ];

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container" onClick={() => handleNavClick('home')}>
          <img src="/mango-logo.png" alt="Mango Digital Growth Logo" className="logo-img" />
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link ${activePage === link.id ? 'active' : ''}`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="action-controls">
          <button
            className="icon-btn theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Theme toggle"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>


          <button
            className="cta-button desktop-cta"
            onClick={() => handleNavClick('contact')}
          >
            Get Free Proposal
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="icon-btn mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`mobile-nav-link ${activePage === link.id ? 'active' : ''}`}
              onClick={() => handleNavClick(link.id)}
            >
              <span style={{ marginRight: '8px', display: 'inline-flex', alignItems: 'center' }}>{link.icon}</span>
              {link.label}
            </button>
          ))}

          <button
            className="cta-button mobile-cta"
            onClick={() => handleNavClick('contact')}
          >
            Get Free Proposal
          </button>
        </nav>
      </div>
    </header>
  );
};
