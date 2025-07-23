import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.webp';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Servizi', path: '/servizi' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Galleria', path: '/galleria' },
    { name: 'Dove Siamo', path: '/dove-siamo' },
    
  ];
  const [navState, setNavState] = useState('default'); // 'absolute', 'fixed', 'default'

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/servizi' || location.pathname === '/chi-siamo' || location.pathname === '/dove-siamo' || location.pathname === '/galleria') {
      const handleScroll = () => {
        if (window.scrollY < 60) {
          setNavState('absolute');
        } else {
          setNavState('fixed');
        }
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setNavState('default');
    }
  }, [location.pathname]);

  let navClass = 'navbar';
  if (location.pathname === '/' || location.pathname === '/servizi' || location.pathname === '/chi-siamo' || location.pathname === '/dove-siamo' || location.pathname === '/galleria') {
    navClass += navState === 'absolute' ? ' navbar--absolute' : ' navbar--fixed';
    if (navState === 'absolute') navClass += ' navbar--transparent';
  }
  if (menuOpen) navClass += ' menu-open';

  return (
    <nav className={navClass} style={{ fontFamily: 'Poppins, Arial, sans-serif' }}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Bagno Paradiso Tirrenia" />
        </Link>
        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link.name} className={location.pathname === link.path ? 'navbar-link active' : 'navbar-link'}>
              <Link to={link.path} style={{ textTransform: 'uppercase' }} className={navState === 'absolute' ? 'navbar-link-white' : ''}>
                {link.name}
              </Link>
            </li>
          ))}
          <li><a href="tel:05037448" className={`navbar-call${navState === 'absolute' ? ' navbar-call-white' : ''}`}>Chiamaci</a></li>
        </ul>
        <button className="navbar-burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      <div className={`navbar-mobile-menu${menuOpen ? ' open' : ''}`}> 
        {navLinks.map(link => (
          <Link key={link.name} to={link.path} className={location.pathname === link.path ? 'navbar-mobile-link active' : 'navbar-mobile-link'} onClick={() => setMenuOpen(false)} style={{ textTransform: 'uppercase' }}>
            {link.name}
          </Link>
        ))}
        <a href="tel:05037448" className="navbar-mobile-call" onClick={() => setMenuOpen(false)}>Chiamaci</a>
      </div>
    </nav>
  );
};

export default Navbar; 