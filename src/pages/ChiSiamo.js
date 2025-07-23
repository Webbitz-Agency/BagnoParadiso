import { useEffect } from 'react';
import './ChiSiamo.css';
import chiSiamoImg from '../images/canoa.jpg';
import chiSiamoImg2 from '../images/chi-siamo.png';
import { Link } from 'react-router-dom';

const ChiSiamo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="chi-siamo-page">
      {/* Hero Section */}
      <section className="chi-siamo-hero">
        <div className="chi-siamo-hero-bg">
          <img src={chiSiamoImg} alt="Bagno Paradiso" className="chi-siamo-hero-img" />
          <div className="chi-siamo-hero-overlay"></div>
        </div>
        <div className="chi-siamo-hero-content">
          <h1 className="chi-siamo-hero-title">Chi Siamo</h1>
          <p className="chi-siamo-hero-desc">Dal 1985, il Bagno Paradiso è sinonimo di qualità e accoglienza sulla costa tirrenica.</p>
        </div>
      </section>

      {/* Main Section */}
      <section className="chi-siamo-main-section">
        <div className="chi-siamo-main-grid">
          <div className="chi-siamo-main-content">
            <h2 className="chi-siamo-main-title">La nostra storia</h2>
            <p className="chi-siamo-main-text">Il Bagno Paradiso è un luogo dove le persone si sentono in famiglia, dove trovano accoglienza e sicurezza per loro e per i loro bimbi.

              Una parola, un sorriso, che siamo sempre lieti di dare.

In questi anni abbiamo lavorato per rendere l'ambiente più nuovo e fornire servizi per far godere delle vere vacanze e dei sani momenti di relax.</p>
            <p className="chi-siamo-main-text">Nato negli anni 30', in cui prendeva forma la stessa Tirrenia grazie ai progetti di Costanzo Ciano e Guido Buffarini Guidi, il Bagno Paradiso è un testimone privilegiato della crescita e dell'evoluzione di questa rinomata località balneare. Nel corso degli anni, pur mantenendo intatte le sue radici storiche, il Bagno Paradiso si è costantemente rinnovato, adeguandosi ai gusti e alle esigenze di una clientela diversa.</p>
          </div>
          <div className="chi-siamo-main-img-col img-below-mobile">
            <img src={chiSiamoImg2} alt="Staff Bagno Paradiso" className="chi-siamo-main-img" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="chi-siamo-cta-section">
        <div className="chi-siamo-cta-content">
          <h2 className="chi-siamo-cta-title">Vieni a conoscerci di persona!</h2>
          <p className="chi-siamo-cta-desc">Contattaci per scoprire di più sulla nostra storia o per prenotare la tua giornata al mare.</p>
          <div className="chi-siamo-cta-buttons">
            <a href="tel:05037448" className="chi-siamo-cta-btn primary">Chiamaci Ora</a>
            <Link to="/contatti" className="chi-siamo-cta-btn secondary">Scrivici</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChiSiamo; 