import { useState } from 'react';
import garibookLogo from '../assets/garibook-logo.svg';
import garibookBanglaLogo from '../assets/Garibook-Logo-Bangla_PNG.png';
import menuBackground from '../assets/logo-vector.png';
import './Navbar.css';

const navItems = {
  en: [
    'About Us',
    'Earn With Garibook',
    'Garibook Business',
    'Garibook Club',
    'Campaign',
    'Blogs',
  ],
  bn: [
    'আমাদের সম্পর্কে',
    'গাড়িবুকের সাথে আয় করুন',
    'গাড়িবুক ব্যবসা',
    'গাড়িবুক ক্লাব',
    'ক্যাম্পেইন',
    'ব্লগ',
  ],
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const currentNavItems = navItems[language];

  return (
    <>
      <header className="garibook-navbar">
        {/* Desktop Language Button */}
        <button
          type="button"
          className="desktop-language-btn"
          onClick={toggleLanguage}
          aria-label="Change language"
        >
          <span className="language-az">AZ</span>

          <span>{language === 'en' ? 'English' : 'বাংলা'}</span>
        </button>

        <div className="navbar-container">
          {/* Logo */}
          <a href="/" className="garibook-logo">
            <img
              src={language === 'en' ? garibookLogo : garibookBanglaLogo}
              alt="Garibook"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {currentNavItems.map((item) => (
              <a href="#" key={item}>
                {item}
              </a>
            ))}

            <button type="button" className="login-btn">
              {language === 'en' ? 'login' : 'লগইন'}
            </button>
          </nav>

          {/* Medium + Small */}
          <div className="mobile-actions">
            {/* Login */}
            <button type="button" className="mobile-login-btn">
              {language === 'en' ? 'login' : 'লগইন'}
            </button>

            {/* Menu */}
            <button
              type="button"
              className="menu-trigger"
              onClick={toggleMenu}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu-overlay ${
          isMenuOpen ? 'mobile-menu-open' : ''
        }`}
      >
        {/* Background Image */}
        <img src={menuBackground} alt="" className="mobile-menu-background" />

        {/* Overlay Content */}
        <div className="mobile-menu-content">
          {/* Top Right */}
          <div className="mobile-menu-top">
            {/* Language */}
            <button
              type="button"
              className="menu-language"
              onClick={toggleLanguage}
              aria-label="Change language"
            >
              <span className="language-az">AZ</span>

              <span>{language === 'en' ? 'English' : 'বাংলা'}</span>
            </button>

            {/* Close */}
            <button
              type="button"
              className="menu-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <span />
              <span />
            </button>
          </div>

          {/* Navigation */}
          <nav className="mobile-menu-links">
            {currentNavItems.map((item) => (
              <a href="#" key={item} onClick={closeMenu}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;


