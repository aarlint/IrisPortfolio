import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;

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

const NavLink = styled(Link)<{ active: boolean }>`
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-color)'};
  text-decoration: none;
  font-weight: ${props => props.active ? '600' : '400'};
  position: relative;
  padding: 0.5rem 0;

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

const MobileNavLink = styled(Link)<{ active: boolean }>`
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-color)'};
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.8rem 0;
  font-weight: ${props => props.active ? '600' : '400'};
  border-bottom: 1px solid var(--glass-border);
  transition: all 0.3s ease;

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

const MobileLogo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-color);
  text-decoration: none;
`;

const Navbar = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
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

  return (
    <>
      <Nav className="glass-container">
        <NavContainer>
          <Logo to="/">Iris Arlint</Logo>
          <NavLinks>
            <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/about" active={location.pathname === '/about'}>About</NavLink>
            <NavLink to="/stats" active={location.pathname === '/stats'}>Stats</NavLink>
            <NavLink to="/gallery" active={location.pathname === '/gallery'}>Gallery</NavLink>
            <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
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
                <MobileLogo to="/">Iris Arlint</MobileLogo>
                <MobileMenuButton
                  onClick={toggleMobileMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </MobileMenuButton>
              </MobileMenuHeader>
              <MobileNavLink to="/" active={location.pathname === '/'}>Home</MobileNavLink>
              <MobileNavLink to="/about" active={location.pathname === '/about'}>About</MobileNavLink>
              <MobileNavLink to="/stats" active={location.pathname === '/stats'}>Stats</MobileNavLink>
              <MobileNavLink to="/gallery" active={location.pathname === '/gallery'}>Gallery</MobileNavLink>
              <MobileNavLink to="/contact" active={location.pathname === '/contact'}>Contact</MobileNavLink>
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