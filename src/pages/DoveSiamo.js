import { useEffect } from 'react';
import './DoveSiamo.css';
import doveSiamoImg from '../images/canoa.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const DoveSiamo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dove-siamo-page">
      {/* Hero Section */}
      <section className="dove-siamo-hero">
        <div className="dove-siamo-hero-bg">
          <img src={doveSiamoImg} alt="Dove siamo Bagno Paradiso" className="dove-siamo-hero-img" />
          <div className="dove-siamo-hero-overlay"></div>
        </div>
        <motion.div
          className="dove-siamo-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="dove-siamo-hero-title">Dove Siamo</h1>
          <p className="dove-siamo-hero-desc">Vieni a trovarci a Tirrenia, a due passi dal mare!</p>
        </motion.div>
      </section>

      {/* Main Section */}
      <section className="dove-siamo-main-section">
        <div className="dove-siamo-main-grid">
          <ScrollReveal variant="fadeRight" className="dove-siamo-main-map-col">
            <iframe
              title="Mappa Bagno Paradiso"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.234073964839!2d10.28212331550013!3d43.63512397912109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d591b2e2e7e3e1%3A0x2e2e2e2e2e2e2e2e!2sBagno%20Paradiso!5e0!3m2!1sit!2sit!4v1685555555555!5m2!1sit!2sit"
              width="100%"
              height="450px"
              style={{ border: 0, borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </ScrollReveal>
          <ScrollReveal variant="fadeLeft" delay={0.2} className="dove-siamo-main-info-col">
            <h2 className="dove-siamo-main-title">Come raggiungerci</h2>
            <p className="dove-siamo-main-text"><b>Indirizzo:</b> Viale del Tirreno, 6, 56128 Tirrenia PI</p>
            <p className="dove-siamo-main-text"><b>Telefono:</b> <a href="tel:05037448">050 37448</a></p>
            <p className="dove-siamo-main-text"><b>Email:</b> <a href="mailto:info@bagnoparadisotirrenia.it">info@bagnoparadisotirrenia.it</a></p>
            <p className="dove-siamo-main-text">Ampio parcheggio interno, facilmente raggiungibile sia in auto che con i mezzi pubblici.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dove-siamo-cta-section">
        <ScrollReveal variant="fadeUp" className="dove-siamo-cta-content">
          <h2 className="dove-siamo-cta-title">Ti aspettiamo al Bagno Paradiso!</h2>
          <p className="dove-siamo-cta-desc">Contattaci per qualsiasi informazione o per prenotare la tua giornata al mare.</p>
          <div className="dove-siamo-cta-buttons">
            <a href="tel:05037448" className="dove-siamo-cta-btn primary">Chiamaci Ora</a>
            <Link to="/contatti" className="dove-siamo-cta-btn secondary">Scrivici</Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default DoveSiamo;
