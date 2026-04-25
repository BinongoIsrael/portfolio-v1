import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const FloatingUI = () => {
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { damping: 25, stiffness: 120 });

  const y1 = useTransform(smoothY, [0, 500], [0, -100]);
  const y2 = useTransform(smoothY, [0, 500], [0, -150]);

  return (
    <>
      {/* System Connection Glow (The "Bridge") */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden xl:block hidden">
        <div className="absolute top-[20%] left-[10%] w-[80%] h-[60%] bg-gradient-to-br from-primary/5 via-transparent to-primary/5 blur-[100px] -z-10 rotate-12" />
      </div>

      {/* Code Snippet Card (Left) */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[15%] left-[5%] hidden xl:block z-10"
      >
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [-1, 1, -1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-72 bg-surface-container/90 backdrop-blur-xl border border-outline-variant/50 shadow-2xl rounded-xl overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-surface-container-high/50 border-b border-outline-variant/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-mono text-outline/60 tracking-tight">sync_active.ts</span>
            </div>
          </div>

          <div className="p-5 font-mono text-[11px] leading-relaxed flex gap-4 text-left">
            <div className="text-outline/30 text-right select-none">
              <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-on-surface-variant">
                <span className="text-primary">const</span> <span className="text-on-surface">developer</span> = {"{"}
              </p>
              <p className="pl-4 text-on-surface-variant">
                <span className="text-secondary">name</span>: <span className="text-tertiary">"Israel Binongo"</span>,
              </p>
              <p className="pl-4 text-on-surface-variant">
                <span className="text-secondary">role</span>: <span className="text-tertiary">"Full Stack Developer"</span>,
              </p>
              <p className="pl-4 text-on-surface-variant">
                <span className="text-secondary">focus</span>: [<span className="text-tertiary">"perf"</span>, <span className="text-tertiary">"scale"</span>],
              </p>
              <p className="pl-4 text-on-surface-variant">
                <span className="text-secondary">building</span>: <span className="text-tertiary">"modern apps"</span>
              </p>
              <p className="text-on-surface-variant">{"}"};</p>
              <p className="text-outline/40 italic mt-1">// built with intent</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Dashboard Card (Right) */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[20%] right-[5%] hidden xl:block z-10"
      >
        <motion.div
          animate={{ 
            y: [0, 20, 0], // Opposite movement for balance
            rotate: [1, -1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-64 bg-surface-container/90 backdrop-blur-xl border border-outline-variant/50 shadow-2xl rounded-xl overflow-hidden"
        >
          <div className="px-4 py-3 bg-surface-container-high/50 border-b border-outline-variant/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-outline">System Core</span>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-3 h-[1px] bg-outline/40" />
              <div className="w-2.5 h-2.5 border border-outline/40" />
              <div className="relative w-3 h-3 flex items-center justify-center group/close">
                <div className="absolute w-full h-[1.5px] bg-error/40 rotate-45" />
                <div className="absolute w-full h-[1.5px] bg-error/40 -rotate-45" />
              </div>
            </div>
          </div>
          
          <div className="p-4 space-y-4">
            <div>
              <p className="text-[10px] text-on-surface-variant/80 uppercase tracking-widest font-bold">Throughput</p>
              <p className="text-xl font-h1 font-bold text-primary">98.4%</p>
            </div>

            <svg width="100%" height="40" viewBox="0 0 200 40" fill="none" className="overflow-visible">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
                d="M0 35C20 35 30 5 50 5C70 5 80 25 100 25C120 25 130 15 150 15C170 15 180 30 200 30"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path d="M0 35C20 35 30 5 50 5C70 5 80 25 100 25C120 25 130 15 150 15C170 15 180 30 200 30V40H0V35Z" fill="url(#gradient)" opacity="0.1" />
              <defs>
                <linearGradient id="gradient" x1="100" y1="0" x2="100" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--primary)" />
                  <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <div className="space-y-2">
              <div className="h-1 w-full bg-outline-variant/20 rounded-full overflow-hidden">
                <motion.div animate={{ width: '80%' }} transition={{ duration: 1, delay: 1.5 }} className="h-full bg-secondary" />
              </div>
              <div className="h-1 w-full bg-outline-variant/20 rounded-full overflow-hidden">
                <motion.div animate={{ width: '60%' }} transition={{ duration: 1, delay: 1.7 }} className="h-full bg-tertiary" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
