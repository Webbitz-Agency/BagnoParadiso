import { useEffect } from 'react';
import './Servizi.css';
import { Link } from 'react-router-dom';
import videoServizi from '../images/video-servizi.mp4';
import servizio1 from '../images/attrezzata.png';
import servizio2 from '../images/terrazza.png';
import servizio3 from '../images/card3-home.webp';

const servizi = [
  {
    title: 'Spiaggia Attrezzata',
    description: 'Goditi il mare con tutti i comfort: ombrelloni con sdraio e lettini, cabine private, spogliatoi spaziosi e docce calde.',
    image: servizio1,
    features: [
      'Ombrelloni con sdraio e lettini',
      'Cabine private',
      'Spogliatoi spaziosi',
      'Docce calde',
      'Servizio spiaggia'
    ]
  },
  {
    title: 'Terrazza sul Mare',
    description: 'Rilassati sulla nostra terrazza panoramica con vista mare, comode poltroncine e divanetti.',
    image: servizio2,
    features: [
      'Vista panoramica sul mare',
      'Poltroncine confortevoli',
      'Divanetti terrazza',
      'Area relax',
      'Bar service'
    ]
  },
  {
    title: 'Ristorante e Bar',
    description: 'Gusta i piatti della tradizione e le specialità locali nel nostro ristorante con vista mare.',
    image: servizio3,
    features: [
      'Cucina tradizionale',
      'Specialità locali',
      'Vista mare',
      'Bar service',
      'Menu per bambini'
    ]
  }
];

const Servizi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="servizi-page">
      {/* Hero Section */}
      <section className="servizi-hero">
        <div className="servizi-hero-video-bg">
          <video src={videoServizi} autoPlay loop muted playsInline className="servizi-hero-video" />
          <div className="servizi-hero-overlay"></div>
        </div>
        <div className="servizi-hero-content">
          <h1 className="servizi-hero-title">I Nostri Servizi</h1>
          <p className="servizi-hero-desc">Scopri tutti i servizi che offriamo per rendere la tua giornata al mare indimenticabile</p>
        </div>
      </section>

      {/* Servizi List */}
      <section className="servizi-list-section">
        <div className="servizi-list-container">
          {servizi.map((servizio, idx) => (
            <div className="servizio-card" key={idx}>
              <div className="servizio-img-container">
                <img src={servizio.image} alt={servizio.title} className="servizio-img" />
              </div>
              <div className="servizio-content">
                <h3 className="servizio-title">{servizio.title}</h3>
                <p className="servizio-desc">{servizio.description}</p>
                <ul className="servizio-features">
                  {servizio.features.map((feature, i) => (
                    <li key={i} className="servizio-feature">
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sezione Servizi Aggiuntivi */}
      <section className="servizi-aggiuntivi-section">
        <h2 className="servizi-aggiuntivi-title">Servizi Aggiuntivi</h2>
        <div className="servizi-aggiuntivi-grid">
          <div className="servizio-aggiuntivo-box">Toilette Bimbi</div>
          <div className="servizio-aggiuntivo-box">Baby Park</div>
          <div className="servizio-aggiuntivo-box">Parco Gioco Bimbi</div>
          <div className="servizio-aggiuntivo-box">Canoe</div>
          <div className="servizio-aggiuntivo-box">SUP</div>
          <div className="servizio-aggiuntivo-box">Pedalò</div>
          <div className="servizio-aggiuntivo-box">Parcheggio Interno</div>
          <div className="servizio-aggiuntivo-box">Spogliatoio</div>
          <div className="servizio-aggiuntivo-box">Deposito Canoe e SUP</div>
          <div className="servizio-aggiuntivo-box">Ricarica per macchine elettriche</div>


        </div>
        <div className="servizi-aggiuntivi-btn-wrapper">
          <a href="/dove-siamo" className="servizi-aggiuntivi-btn">Prenota Subito!</a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="servizi-cta-section">
        <div className="servizi-cta-content">
          <h2 className="servizi-cta-title">Prenota i Nostri Servizi</h2>
          <p className="servizi-cta-desc">Contattaci per informazioni e prenotazioni</p>
          <div className="servizi-cta-buttons">
            <a href="tel:05037448" className="servizi-cta-btn primary">Chiamaci Ora</a>
            <Link to="/contatti" className="servizi-cta-btn secondary">Invia Messaggio</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servizi; 