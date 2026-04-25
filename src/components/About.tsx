import israelImage from '../assets/israel.jpg';

const About = () => {
  return (
    <section className="px-margin py-xl max-w-screen-2xl mx-auto border-t border-outline-variant" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
        <div className="order-2 lg:order-1">
          <span className="text-label-caps text-primary uppercase tracking-[0.3em] mb-sm block">THE NARRATIVE</span>
          <h2 className="font-h2 text-h2 mb-md leading-tight">Logic with <span className="italic text-primary">Purpose.</span></h2>
          <div className="space-y-md text-body-lg text-on-surface-variant">
            <p>
              I am a software developer and aspiring AI engineer dedicated to building secure, scalable, and robust full-stack systems.
            </p>
            <p>
              My work bridges the gap between high-performance data infrastructure and refined user interfaces, rooted in a <span className="text-on-surface">"Midnight Coffee"</span> philosophy—distilling complex technical constraints into elegant, resilient solutions.
            </p>
            <p>
              From the core logic of GrowthOS to project tracking tools for student leadership, I build software that turns complicated challenges into simple, functional solutions for people.
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="aspect-square bg-surface-container-low border border-outline-variant overflow-hidden relative">
            <img 
              alt="Israel Binongo's Photo" 
              className="w-full h-full object-cover" 
              src={israelImage}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-surface/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
