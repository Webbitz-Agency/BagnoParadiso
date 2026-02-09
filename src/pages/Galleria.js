import { useEffect, useState, useRef } from 'react';
import './Galleria.css';
import { motion } from 'framer-motion';
import chiSiamoImg from '../images/canoa.jpg';
import ScrollReveal from '../components/ScrollReveal';

const categorie = [
  { key: 'tutte', label: 'Tutte le foto' },
  { key: 'bagno', label: 'Bagno' },
  { key: 'spiaggia', label: 'Spiaggia' },
  { key: 'chalet', label: 'Chalet' },
  { key: 'ristorante', label: 'Ristorante' },
];

const immagini = [
  { src: require('../images/Galleria/bagno1.png'), categoria: 'bagno' },
  { src: require('../images/Galleria/bagno2.png'), categoria: 'bagno' },
  { src: require('../images/Galleria/bagno3.png'), categoria: 'bagno' },
  { src: require('../images/Galleria/bagno4.png'), categoria: 'bagno' },
  { src: require('../images/Galleria/bagno5.png'), categoria: 'bagno' },
  { src: require('../images/Galleria/bagno6.png'), categoria: 'bagno' },
  { src: require('../images/Galleria/bagno7.png'), categoria: 'bagno' },
  { src: require('../images/Galleria/bagno8.png'), categoria: 'bagno' },
  { src: require('../images/Galleria/bagno9.png'), categoria: 'bagno' },
  { src: require('../images/Galleria/spiaggia1.png'), categoria: 'spiaggia' },
  { src: require('../images/Galleria/spiaggia2.png'), categoria: 'spiaggia' },
  { src: require('../images/Galleria/spiaggia3.png'), categoria: 'spiaggia' },
  { src: require('../images/Galleria/spiaggia4.png'), categoria: 'spiaggia' },
  { src: require('../images/Galleria/spiaggia5.png'), categoria: 'spiaggia' },
  { src: require('../images/Galleria/spiaggia6.png'), categoria: 'spiaggia' },
  { src: require('../images/Galleria/spiaggia7.png'), categoria: 'spiaggia' },
  { src: require('../images/Galleria/spiaggia8.png'), categoria: 'spiaggia' },
  { src: require('../images/Galleria/spiaggia9.png'), categoria: 'spiaggia' },
  { src: require('../images/Galleria/sppiaggia10.png'), categoria: 'spiaggia' },
  { src: require('../images/Galleria/spiaggia11.png'), categoria: 'spiaggia' },
  { src: require('../images/Galleria/chalet1.png'), categoria: 'chalet' },
  { src: require('../images/Galleria/chalet2.png'), categoria: 'chalet' },
  { src: require('../images/Galleria/chalet3.png'), categoria: 'chalet' },
  { src: require('../images/Galleria/chalet4.png'), categoria: 'chalet' },
  { src: require('../images/Galleria/chalet5.png'), categoria: 'chalet' },
  { src: require('../images/Galleria/chalet6.png'), categoria: 'chalet' },
  { src: require('../images/Galleria/chalet7.png'), categoria: 'chalet' },
  { src: require('../images/Galleria/chalet8.png'), categoria: 'chalet' },
  { src: require('../images/Galleria/chalet9.png'), categoria: 'chalet' },
  { src: require('../images/Galleria/chalet10.png'), categoria: 'chalet' },
  { src: require('../images/Galleria/ristorante1.png'), categoria: 'ristorante' },
  { src: require('../images/Galleria/ristorante2.jpeg'), categoria: 'ristorante' },
  { src: require('../images/Galleria/ristorante3.jpeg'), categoria: 'ristorante' },
  { src: require('../images/Galleria/ristorante4.jpeg'), categoria: 'ristorante' },
  { src: require('../images/Galleria/ristorante5.jpeg'), categoria: 'ristorante' },
  { src: require('../images/Galleria/ristorante6.jpeg'), categoria: 'ristorante' },
];

/**
 * LazyImage - Componente per caricamento lazy delle immagini con skeleton
 * Usa IntersectionObserver per caricare le immagini solo quando visibili
 */
const LazyImage = ({ src, alt, className, onClick, style }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Inizia a caricare 200px prima che sia visibile
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`lazy-img-wrapper ${isLoaded ? 'loaded' : ''}`} onClick={onClick} style={style}>
      {/* Skeleton placeholder */}
      {!isLoaded && <div className="lazy-img-skeleton" />}
      {/* Immagine reale - caricata solo quando in viewport */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={className}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
      )}
    </div>
  );
};

const Galleria = () => {
  const [categoriaSelezionata, setCategoriaSelezionata] = useState('tutte');
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const immaginiFiltrate = categoriaSelezionata === 'tutte'
    ? immagini
    : immagini.filter(img => img.categoria === categoriaSelezionata);

  const openModal = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);

  return (
    <div className="galleria-page">
      {/* Hero Section */}
      <section className="galleria-hero">
        <div className="galleria-hero-bg">
          <img src={chiSiamoImg} alt="Bagno Paradiso" className="galleria-hero-img" />
          <div className="galleria-hero-overlay"></div>
        </div>
        <motion.div
          className="galleria-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="galleria-hero-title">Galleria</h1>
          <p className="galleria-hero-desc">Scopri i momenti più belli del Bagno Paradiso!</p>
        </motion.div>
      </section>

      {/* Selettore categorie */}
      <ScrollReveal variant="fadeUp" className="galleria-categorie" style={{ marginTop: 48 }}>
        {categorie.map(cat => (
          <button
            key={cat.key}
            className={`galleria-categoria-btn${categoriaSelezionata === cat.key ? ' active' : ''}`}
            onClick={() => setCategoriaSelezionata(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </ScrollReveal>

      {/* Griglia immagini */}
      <div className="galleria-immagini">
        {immaginiFiltrate.length === 0 ? (
          <div className="galleria-placeholder">Nessuna foto disponibile per questa categoria.</div>
        ) : (
          immaginiFiltrate.map((img, idx) => (
            <ScrollReveal
              variant="fadeUp"
              delay={Math.min(idx * 0.05, 0.3)}
              duration={0.5}
              key={`${categoriaSelezionata}-${idx}`}
              className="galleria-img-card"
            >
              <LazyImage
                src={img.src}
                alt={img.categoria}
                className="galleria-img"
                onClick={() => openModal(img)}
                style={{ cursor: 'zoom-in' }}
              />
            </ScrollReveal>
          ))
        )}
      </div>

      {/* Modale fullscreen */}
      {modalImg && (
        <>
          <div className="galleria-modal-overlay-navbar"></div>
          <div className="galleria-modal" onClick={closeModal}>
            <button className="galleria-modal-close" onClick={closeModal} aria-label="Chiudi">&times;</button>
            <img src={modalImg.src} alt={modalImg.categoria} className="galleria-modal-img" onClick={e => e.stopPropagation()} />
          </div>
        </>
      )}
    </div>
  );
};

export default Galleria;
