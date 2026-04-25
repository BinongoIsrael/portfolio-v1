import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'education','projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Hero', href: '#', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId || 'hero');
    if (element) {
      const navbarHeight = 88;
      const viewportHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;
      const elementRect = element.getBoundingClientRect().top;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;

      let finalPosition;

      // Special case: Skills and Projects always scroll to top for clarity
      if (targetId === 'skills' || targetId === 'projects') {
        finalPosition = elementPosition - navbarHeight;
      } else {
        // Calculate position to center the section for others
        const centeredPosition = elementPosition - (viewportHeight / 2) + (elementHeight / 2);
        const minPosition = elementPosition - navbarHeight;
        finalPosition = Math.max(centeredPosition, minPosition);
      }

      window.scrollTo({
        top: finalPosition,
        behavior: 'smooth'
      });
    }
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <nav className="bg-surface text-on-surface font-['Space_Grotesk'] tracking-tight rounded-none sticky top-0 w-full z-50 border-b border-outline-variant shadow-none">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary" data-icon="terminal">terminal</span>
          <span className="text-lg md:text-xl font-bold uppercase tracking-widest whitespace-nowrap">ISRAEL BINONGO</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-medium transition-colors duration-200 ${
                activeSection === link.id
                  ? 'text-primary border-b border-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button 
            onClick={toggleTheme}
            className="material-symbols-outlined text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer" 
            data-icon={theme === 'dark' ? 'light_mode' : 'dark_mode'}>
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </button>
          
          <a 
            href="/resume.pdf" 
            download="Israel_Binongo_Resume.pdf"
            className="hidden md:flex bg-primary text-on-primary px-6 py-2 text-label-caps uppercase tracking-widest font-bold hover:opacity-90 active:scale-[0.99] transition-all items-center justify-center"
          >
            Download Resume
          </a>

          {/* Hamburger Toggle - Explicitly md:hidden */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="material-symbols-outlined text-on-surface cursor-pointer p-2"
              data-icon="menu"
            >
              menu
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
            />
            
            {/* Side Sheet */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-surface z-[100] flex flex-col md:hidden shadow-2xl border-l border-outline-variant"
            >
              <div className="flex justify-end items-center px-6 py-6">
                <button 
                  onClick={() => setIsMenuOpen(false)} 
                  className="material-symbols-outlined text-3xl cursor-pointer p-2 text-on-surface"
                  data-icon="close"
                >
                  close
                </button>
              </div>
              
              <div className="flex flex-col p-8 gap-8 flex-grow">
                {navLinks.map((link) => (
                  <a 
                    key={link.id} 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)} 
                    className={`text-2xl font-bold uppercase tracking-widest transition-colors ${
                      activeSection === link.id ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="p-8 border-t border-outline-variant">
                <a 
                  href="/resume.pdf"
                  download="Israel_Binongo_Resume.pdf"
                  className="w-full bg-primary text-on-primary py-4 text-label-caps font-bold uppercase tracking-widest flex items-center justify-center gap-4 active:scale-[0.98] transition-all"
                >
                  <span className="material-symbols-outlined">download</span>
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
