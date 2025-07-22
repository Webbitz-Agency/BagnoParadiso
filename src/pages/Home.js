import './Home.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import faq from '../images/faq.png';
import chiSiamo from '../images/chi-siamo.png';

const servizi = [
  {
    title: 'Spiaggia Attrezzata',
    description: 'Goditi il mare con tutti i comfort: ombrelloni con sdraio e lettini, cabine private, spogliatoi spaziosi e docce calde.',
    image: require('../images/card1-home.webp'),
    icon: 'fa-umbrella-beach'
  },
  {
    title: 'Terrazza sul Mare',
    description: 'Rilassati sulla nostra terrazza panoramica con vista mare, comode poltroncine e divanetti.',
    image: require('../images/card2-home.webp'),
    icon: 'fa-water'
  },
  {
    title: 'Ristorante e Bar',
    description: 'Gusta i piatti della tradizione e le specialità locali nel nostro ristorante con vista mare.',
    image: require('../images/card3-home.webp'),
    icon: 'fa-utensils'
  }
];

const faqs = [
  {
    q: 'È necessario prenotare in anticipo per accedere al Bagno Paradiso?',
    a: 'Sebbene non sia obbligatorio, consigliamo di prenotare in anticipo soprattutto nei periodi di alta stagione per garantire la disponibilità di cabine e lettini.'
  },
  {
    q: 'Il ristorante offre opzioni per diete speciali?',
    a: 'Sì, il nostro ristorante offre opzioni vegetariane, vegane e per chi ha intolleranze alimentari. Ti preghiamo di informarci delle tue esigenze al momento della prenotazione.'
  },
  {
    q: "C'è un parcheggio disponibile per i clienti?",
    a: "Sì, il Bagno Paradiso dispone di un parcheggio privato per i nostri ospiti, situato a pochi passi dall'ingresso dello stabilimento."
  }
];

function Accordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="home-faq-list">
      {faqs.map((faq, idx) => (
        <div className={`home-faq-item${open === idx ? ' open' : ''}`} key={idx}>
          <button type="button" className="home-faq-q" onClick={() => setOpen(open === idx ? -1 : idx)}>
            {faq.q}
            <span className="home-faq-arrow">{open === idx ? '▲' : '▼'}</span>
          </button>
          <div className="home-faq-a" style={{ display: open === idx ? 'block' : 'none' }}>{faq.a}</div>
        </div>
      ))}
    </div>
  );
}

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: 'Poppins, Arial, sans-serif' }}>
      {/* Hero Section */}
      <section className="home-hero">
        <video
          className="home-hero-video"
          src={require('../images/video-hero.mp4')}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="home-hero-overlay"></div>
        <div className="home-hero-content">
          <h1 className="home-hero-title">Bagno Paradiso</h1>
          <p className="home-hero-desc">Sole, Divertimento e Relax!</p>
          <a href="tel:05037448" className="home-hero-btn">Prenota Ora</a>
          <button className="home-hero-arrow" onClick={() => {
            const chiSiamo = document.querySelector('.home-chi-siamo-section');
            if(chiSiamo) chiSiamo.scrollIntoView({ behavior: 'smooth' });
          }} aria-label="Scorri alla sezione servizi">
            <span className="arrow-down"></span>
          </button>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section className="home-chi-siamo-section">
        <div className="home-chi-siamo-grid">
          <div className="home-chi-siamo-content">
            <h2 className="home-chi-siamo-title">Chi Siamo</h2>
            <p className="home-chi-siamo-desc">
              Dal 1985, il Bagno Paradiso è sinonimo di qualità e accoglienza sulla costa tirrenica. 
              La nostra passione per il mare e l'attenzione al dettaglio ci hanno permesso di creare 
              un'oasi di relax dove ogni cliente si sente come a casa propria.
            </p>
            <Link to="/chi-siamo" className="home-hero-btn chi-siamo-btn">Scopri di più</Link>
          </div>
          <div className="home-chi-siamo-img-col">
            <img src={chiSiamo} alt="Bagno Paradiso" className="home-chi-siamo-img" />
          </div>
        </div>
      </section>

      {/* Servizi Section */}
      <section className="home-servizi-section">
        <h2 className="home-servizi-title">I Nostri Servizi</h2>
        <p className="home-servizi-desc">Scopri tutto ciò che possiamo offrirti</p>
        <div className="home-servizi-list">
          {servizi.map((servizio, idx) => (
            <div className="home-servizio-card" key={idx}>
              <img src={servizio.image} alt={servizio.title} className="home-servizio-img" />
              <i className={`home-servizio-icon fas ${servizio.icon}`}></i>
              <div className="home-servizio-title">{servizio.title}</div>
              <div className="home-servizio-desc">{servizio.description}</div>
            </div>
          ))}
        </div>
        <div style={{textAlign: 'center', marginTop: 32}}>
          <Link to="/servizi" className="home-hero-btn servizi-btn">Vedi tutti i servizi</Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="home-faq-section">
        <div className="home-faq-grid">
          {/* Colonna FAQ (accordion) */}
          <div className="home-faq-col">
            <h2 className="home-faq-title">Domande Frequenti</h2>
            <p className="home-faq-subtitle">Scopri tutto ciò che puoi chiedere al Bagno Paradiso</p>
            <Accordion />
          </div>
          {/* Colonna immagine */}
          <div className="home-faq-img-col">
            <div className="home-faq-img-card">
              <img src={faq} alt="FAQ Bagno Paradiso" className="home-faq-img" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta-section">
        <h2 className="home-cta-title">Vieni a Trovarci</h2>
        <p className="home-cta-desc">Ti aspettiamo per una giornata indimenticabile al mare</p>
        <a href="tel:05037448" className="home-cta-btn">Chiamaci Ora</a>
      </section>
    </div>
  );
};

export default Home; 