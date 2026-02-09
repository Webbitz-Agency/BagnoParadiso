import { motion } from 'framer-motion';

/**
 * ScrollReveal - Componente riutilizzabile per animazioni al scroll
 * 
 * Varianti disponibili:
 * - fadeUp (default): Appare dal basso con fade
 * - fadeDown: Appare dall'alto con fade
 * - fadeLeft: Appare da sinistra con fade
 * - fadeRight: Appare da destra con fade
 * - fadeIn: Semplice fade in
 * - scaleUp: Scala da piccolo a grande con fade
 * - slideUp: Scivola dal basso senza fade
 * 
 * Props:
 * - variant: tipo di animazione (default: 'fadeUp')
 * - delay: ritardo animazione in secondi (default: 0)
 * - duration: durata animazione in secondi (default: 0.6)
 * - distance: distanza di spostamento in px (default: 40)
 * - once: anima solo la prima volta (default: true)
 * - threshold: percentuale visibile per triggerare (default: 0.15)
 * - className: classi CSS aggiuntive
 * - style: stili inline aggiuntivi
 * - as: elemento HTML da renderizzare (default: 'div')
 * - children: contenuto
 * - staggerChildren: ritardo tra figli per animazione stagger (default: 0)
 */

const variants = {
  fadeUp: (distance) => ({
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0 },
  }),
  fadeDown: (distance) => ({
    hidden: { opacity: 0, y: -distance },
    visible: { opacity: 1, y: 0 },
  }),
  fadeLeft: (distance) => ({
    hidden: { opacity: 0, x: -distance },
    visible: { opacity: 1, x: 0 },
  }),
  fadeRight: (distance) => ({
    hidden: { opacity: 0, x: distance },
    visible: { opacity: 1, x: 0 },
  }),
  fadeIn: () => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }),
  scaleUp: () => ({
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  }),
  slideUp: (distance) => ({
    hidden: { y: distance },
    visible: { y: 0 },
  }),
};

const ScrollReveal = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  distance = 40,
  once = true,
  threshold = 0.15,
  className = '',
  style = {},
  as = 'div',
  staggerChildren = 0,
  ...props
}) => {
  const selectedVariant = variants[variant] ? variants[variant](distance) : variants.fadeUp(distance);

  const containerVariants = {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Cubic bezier fluida e moderna
        ...(staggerChildren > 0 && {
          staggerChildren,
          delayChildren: delay,
        }),
      },
    },
  };

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

/**
 * ScrollRevealChild - Da usare dentro ScrollReveal con staggerChildren
 * per animare i singoli figli con effetto stagger
 */
export const ScrollRevealChild = ({
  children,
  variant = 'fadeUp',
  distance = 30,
  duration = 0.5,
  className = '',
  style = {},
  as = 'div',
  ...props
}) => {
  const selectedVariant = variants[variant] ? variants[variant](distance) : variants.fadeUp(distance);

  const childVariants = {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      variants={childVariants}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default ScrollReveal;
