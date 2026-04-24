const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-88px)] flex flex-col items-center justify-center text-center px-margin py-xl" id="hero">
      <span className="text-label-caps text-outline uppercase tracking-[0.3em] mb-sm font-label-caps">Full Stack Developer</span>
      <h1 className="font-h1 text-h1 max-w-4xl mb-md leading-tight">
        Israel Binongo — Building <span className="text-primary-container italic">Intelligent</span> Web Solutions.
      </h1>
      <div className="w-24 h-px bg-outline-variant mb-md"></div>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-lg">
        Crafting seamless digital experiences where technical precision meets high-end editorial aesthetics. Specialized in full-stack development and data-driven interfaces.
      </p>
      <div className="flex flex-wrap gap-md justify-center">
        <a 
          href="#projects" 
          className="bg-primary text-on-primary px-8 py-4 font-bold uppercase tracking-widest text-label-caps hover:brightness-110 hover:scale-105 active:scale-[0.98] transition-all duration-300"
        >
          Explore Work
        </a>
        <a 
          href="#contact" 
          className="border border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest text-label-caps hover:bg-primary/5 hover:scale-105 active:scale-[0.98] transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
