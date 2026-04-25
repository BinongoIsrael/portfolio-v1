import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const actions = [
    { name: 'About', href: '#about', icon: 'person' },
    { name: 'Skills', href: '#skills', icon: 'terminal' },
    { name: 'Projects', href: '#projects', icon: 'code' },
    { name: 'Contact', href: '#contact', icon: 'mail' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-[500px] bg-surface-container border border-outline-variant shadow-2xl rounded-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-outline-variant/30">
              <input 
                autoFocus
                placeholder="Search actions..."
                className="w-full bg-transparent outline-none text-on-surface text-lg placeholder:text-outline/50"
              />
            </div>
            <div className="p-2">
              {actions.map(action => (
                <a 
                  key={action.name}
                  href={action.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 hover:bg-primary/10 rounded-xl transition-colors group"
                >
                  <span className="material-symbols-outlined text-outline group-hover:text-primary">{action.icon}</span>
                  <span className="text-on-surface font-medium">{action.name}</span>
                  <span className="ml-auto text-[10px] text-outline opacity-50 uppercase tracking-widest font-bold">Go to</span>
                </a>
              ))}
            </div>
            <div className="p-4 bg-surface-container-low text-[10px] text-outline flex gap-4 uppercase tracking-widest font-bold">
              <span>Enter to select</span>
              <span>Esc to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
