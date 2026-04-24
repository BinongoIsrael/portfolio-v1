import ontrackImg from '../assets/ontrack.png';
import diabetesImg from '../assets/diabetes-check.png';
import schedeulerImg from '../assets/schedeuler.png';
import growthosImg from '../assets/growth-os.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "OnTrack",
      description: "A web-based platform specifically tailored for the VSU-SSC to manage tasks and track budget while providing students with real-time project updates.",
      image: ontrackImg,
      github: "https://github.com/slpyMryll/kiwi-soda.git",
      live: "https://ontrack-web-gamma.vercel.app/",
      tags: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "TanStack Query", "Lucide React", "GROQ SDK", "Google AI", "Next.js Toploader", "React Markdown", "Sonner", "Recharts"],
      span: "md:col-span-8",
      aspect: "aspect-video"
    },
    {
      id: 2,
      title: "Diabetes Check",
      description: "A Web-based Diabetes Risk Assessment app that uses Fuzzy Logic (Mamdani Inference System) to determine diabetes risk levels based on physiological and lifestyle factors.",
      image: diabetesImg,
      github: "https://github.com/BinongoIsrael/diabetes-check-frontend.git",
      live: "https://diabetes-check-frontend.vercel.app/",
      tags: ["React", "TypeScript", "Vite", "TailwindCSS", "shadcn/ui"],
      span: "md:col-span-4",
      aspect: "aspect-video"
    },
    {
      id: 3,
      title: "SchedEuler",
      description: "A modern, intelligent academic scheduling platform designed to bridge the gap between students and instructors. It streamlines class management with real-time conflict detection and productivity tools.",
      image: schedeulerImg,
      github: "https://github.com/BinongoIsrael/class-schedeuler.git",
      live: "https://class-schedeuler.vercel.app",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "date-fns", "Sonner", "Nodemailer", "Radix UI"],
      span: "md:col-span-4",
      aspect: "aspect-video"
    },
    {
      id: 4,
      title: "GrowthOS",
      description: "Web application designed as a minimalist sanctuary for deliberate intellectual practice, featuring integrated tools for deep reading, AI-assisted reflective journaling, and critical thinking challenges.",
      image: growthosImg,
      github: "https://github.com/BinongoIsrael/GrowthOS.git",
      live: "https://growth-os-one.vercel.app",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Gemini"],
      span: "md:col-span-8",
      aspect: "aspect-video"
    }
  ];

  return (
    <section className="px-margin py-xl max-w-screen-2xl mx-auto" id="projects">
      <div className="mb-lg border-b border-outline-variant pb-md">
        <span className="text-label-caps text-primary mb-xs block">SELECTED WORKS</span>
        <h2 className="font-h2 text-h2 mb-sm">Projects</h2>
        <p className="font-body-md text-on-surface-variant max-w-4xl text-lg leading-relaxed">
          A curated collection of digital architecture, focusing on scalability and user-centric design.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {projects.map((project) => (
          <div key={project.id} className={`${project.span} group bg-surface-container border border-outline-variant overflow-hidden relative flex flex-col`}>
            <div className={`${project.aspect} w-full overflow-hidden bg-surface-container-highest/50 flex items-center justify-center p-6 lg:p-10`}>
              <img 
                alt={project.title} 
                className="max-w-full max-h-full object-contain shadow-2xl transition-all duration-700 group-hover:scale-105" 
                src={project.image}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-md">
              <div className="flex justify-between items-start mb-sm">
                <div>
                  <h3 className="font-h3 text-h3 mb-xs">{project.title}</h3>
                  <p className="text-on-surface-variant font-body-md mb-md leading-relaxed">{project.description}</p>
                </div>
                <div className="flex gap-sm shrink-0">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors" 
                    data-icon="code"
                    title="View Source"
                  >
                    code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors" 
                    data-icon="open_in_new"
                    title="Live Demo"
                  >
                    open_in_new
                  </a>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-surface-container-high border border-outline-variant dark:border-stone-800 text-on-surface-variant">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
