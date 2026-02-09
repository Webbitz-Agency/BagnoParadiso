import { useEffect } from 'react';
import './ChiSiamo.css';
import storia from '../images/storica.webp';
import chiSiamoImg2 from '../images/chi-siamo.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const ChiSiamo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="chi-siamo-page">
      {/* Hero Section */}
      <section className="chi-siamo-hero">
        <div className="chi-siamo-hero-bg">
          <img src={storia} alt="Bagno Paradiso" className="chi-siamo-hero-img" />
          <div className="chi-siamo-hero-overlay"></div>
        </div>
        <motion.div
          className="chi-siamo-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="chi-siamo-hero-title">Chi Siamo</h1>
          <p className="chi-siamo-hero-desc">Dal 1985, il Bagno Paradiso è sinonimo di qualità e accoglienza sulla costa tirrenica.</p>
        </motion.div>
      </section>

      {/* Main Section */}
      <section className="chi-siamo-main-section">
        <div className="chi-siamo-main-grid">
          <ScrollReveal variant="fadeRight" className="chi-siamo-main-content">
            <h2 className="chi-siamo-main-title">La nostra storia</h2>
            <p className="chi-siamo-main-text">Il Bagno Paradiso è un luogo dove le persone si sentono in famiglia, dove trovano accoglienza e sicurezza per loro e per i loro bimbi.

              Una parola, un sorriso, che siamo sempre lieti di dare.

In questi anni abbiamo lavorato per rendere l'ambiente più nuovo e fornire servizi per far godere delle vere vacanze e dei sani momenti di relax.</p>
            <p className="chi-siamo-main-text">Nato negli anni 30', in cui prendeva forma la stessa Tirrenia grazie ai progetti di Costanzo Ciano e Guido Buffarini Guidi, il Bagno Paradiso è un testimone privilegiato della crescita e dell'evoluzione di questa rinomata località balneare. Nel corso degli anni, pur mantenendo intatte le sue radici storiche, il Bagno Paradiso si è costantemente rinnovato, adeguandosi ai gusti e alle esigenze di una clientela diversa.</p>
          </ScrollReveal>
          <ScrollReveal variant="fadeLeft" delay={0.2} className="chi-siamo-main-img-col img-below-mobile">
            <img src={chiSiamoImg2} alt="Staff Bagno Paradiso" className="chi-siamo-main-img" />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="chi-siamo-cta-section">
        <ScrollReveal variant="fadeUp" className="chi-siamo-cta-content">
          <h2 className="chi-siamo-cta-title">Vieni a conoscerci di persona!</h2>
          <p className="chi-siamo-cta-desc">Contattaci per scoprire di più sulla nostra storia o per prenotare la tua giornata al mare.</p>
          <div className="chi-siamo-cta-buttons">
            <a href="tel:05037448" className="chi-siamo-cta-btn primary">Chiamaci Ora</a>
            <Link to="/contatti" className="chi-siamo-cta-btn secondary">Scrivici</Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default ChiSiamo;
