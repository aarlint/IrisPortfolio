import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a<{ active: boolean }>`
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-color)'};
  text-decoration: none;
  font-weight: ${props => props.active ? '600' : '400'};
  position: relative;
  padding: 0.5rem 0;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ThemeToggle = styled(motion.button)`
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--glass-bg);
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 80%;
    max-width: 300px;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 2rem;
    gap: 1.5rem;
    z-index: 9999;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    border-left: 1px solid var(--glass-border);

    [data-theme='dark'] & {
      background: rgba(26, 26, 26, 0.5);
    }
  }
`;

const MobileOverlay = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    z-index: 9998;
  }
`;

const MobileNavLink = styled.a<{ active: boolean }>`
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-color)'};
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.8rem 0;
  font-weight: ${props => props.active ? '600' : '400'};
  border-bottom: 1px solid var(--glass-border);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
    padding-left: 0.5rem;
    background: var(--glass-bg);
    border-radius: 8px;
    padding: 0.8rem 1rem;
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--glass-border);
`;

const MobileLogo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-color);
  text-decoration: none;
  cursor: pointer;
`;

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'stats', 'gallery', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 100 && bottom > 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <Nav className="glass-container">
        <NavContainer>
          <Logo onClick={() => scrollToSection('home')}>Iris Arlint</Logo>
          <NavLinks>
            <NavLink onClick={() => scrollToSection('home')} active={activeSection === 'home'}>Home</NavLink>
            <NavLink onClick={() => scrollToSection('about')} active={activeSection === 'about'}>About</NavLink>
            <NavLink onClick={() => scrollToSection('stats')} active={activeSection === 'stats'}>Stats</NavLink>
            <NavLink onClick={() => scrollToSection('gallery')} active={activeSection === 'gallery'}>Gallery</NavLink>
            <NavLink onClick={() => scrollToSection('contact')} active={activeSection === 'contact'}>Contact</NavLink>
            <ThemeToggle
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </ThemeToggle>
          </NavLinks>
          <MobileMenuButton
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </NavContainer>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <MobileOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <MobileMenuHeader>
                <MobileLogo onClick={() => scrollToSection('home')}>Iris Arlint</MobileLogo>
                <MobileMenuButton
                  onClick={toggleMobileMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </MobileMenuButton>
              </MobileMenuHeader>
              <MobileNavLink onClick={() => scrollToSection('home')} active={activeSection === 'home'}>Home</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('about')} active={activeSection === 'about'}>About</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('stats')} active={activeSection === 'stats'}>Stats</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('gallery')} active={activeSection === 'gallery'}>Gallery</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('contact')} active={activeSection === 'contact'}>Contact</MobileNavLink>
              <ThemeToggle
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </ThemeToggle>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 