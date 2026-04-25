import { useState, useEffect } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { FloatingUI } from './FloatingUI';
import { Typewriter } from './Typewriter';

const RotatingWords = () => {
  const words = ["Smart", "Scalable", "Modern", "Robust"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-grid grid-cols-1 grid-rows-1 align-baseline">
      {/* Hidden reference to reserve fixed space for the longest word (Scalable) */}
      <span className="invisible italic whitespace-nowrap pointer-events-none row-start-1 col-start-1 px-1">
        Scalable
      </span>
      
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-primary-container italic row-start-1 col-start-1 text-center whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Hero = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Small delay to allow browser to settle after hydration
    const timer = setTimeout(() => setShouldAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.section 
      variants={container}
      initial="hidden"
      animate={shouldAnimate ? "show" : "hidden"}
      className="min-h-[calc(100vh-88px)] flex flex-col items-center justify-center text-center px-margin py-xl relative overflow-hidden" 
      id="hero"
    >
      {/* Glow Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full" />
      </div>
      
      <FloatingUI />

      <motion.span variants={item} className="text-label-caps text-outline uppercase tracking-[0.3em] mb-sm font-label-caps">
        Full Stack Developer
      </motion.span>
      
      <motion.h1 variants={item} className="font-h1 text-4xl sm:text-5xl md:text-h1 max-w-4xl mb-md leading-tight px-4">
        Israel Binongo — Building <RotatingWords /> <span className="hover-underline cursor-default">Web Solutions</span>.
      </motion.h1>

      <motion.div variants={item} className="w-24 h-px bg-outline-variant mb-md" />

      <motion.p variants={item} className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-lg min-h-[3em]">
        <Typewriter 
          text="I build fast, scalable web apps with clean design and real-world impact." 
          delay={0.8}
        />
      </motion.p>

      <motion.div variants={item} className="flex flex-wrap gap-md justify-center">
        <MagneticButton>
          <motion.a 
            href="#projects" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="bg-primary text-on-primary px-8 py-4 font-bold uppercase tracking-widest text-label-caps hover:brightness-110 transition-all duration-300 inline-block"
          >
            Explore Work
          </motion.a>
        </MagneticButton>
        <MagneticButton>
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="border border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest text-label-caps hover:bg-primary/5 transition-all duration-300 inline-block"
          >
            Get in Touch
          </motion.a>
        </MagneticButton>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-primary"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M12 6v12"/>
          </svg>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
