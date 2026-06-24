import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Contatti */}
        <div className="footer-col footer-contact">
          <div className="footer-title">Contatti</div>
          <ul className="footer-list">
            <li>
              <span>Tel: </span>
              <a href="tel:05037448">050 37448</a>
            </li>
            <li>
              <span>Email: </span>
              <a href="mailto:info@bagnoparadisotirrenia.it">info@bagnoparadisotirrenia.it</a>
            </li>
            <li>
              <span>Viale del Tirreno, 6<br/>56128 Tirrenia (PI)</span>
            </li>
          </ul>
        </div>
        {/* Link Rapidi */}
        <div className="footer-col">
          <div className="footer-title">Link Rapidi</div>
          <ul className="footer-list">
            <li><Link to="/servizi" className="footer-link">Servizi</Link></li>
            <li><Link to="/chi-siamo" className="footer-link">Chi Siamo</Link></li>
            <li><Link to="/dove-siamo" className="footer-link">Dove Siamo</Link></li>
            <li><Link to="/contatti" className="footer-link">Contatti</Link></li>
            <li><Link to="/contributi-rna" className="footer-link">Contributi RNA</Link></li>
          </ul>
        </div>
        {/* Orari */}
        <div className="footer-col">
          <div className="footer-title">Orari di Apertura</div>
          <ul className="footer-list">
            <li>Lunedì - Domenica</li>
            <li>08:00 - 20:00</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>&copy; {new Date().getFullYear()} Bagno Paradiso. Tutti i diritti riservati.</div>
        <div className="footer-piva">P.IVA - 00187810502</div>
      </div>
    </footer>
  );
};

export default Footer; 