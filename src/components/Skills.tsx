import React from 'react';
import StackIcon from "tech-stack-icons";
import { useTheme } from "../contexts/ThemeContext";

const SkillIcon = ({ name, icon }: { name: string; icon: string }) => {
  const { theme } = useTheme();
  
  const iconNameMap: Record<string, string> = {
    "tailwind": "tailwindcss",
    "vite": "vitejs",
    "js": "js",
    "android": "androidstudio",
  };

  const finalIconName = iconNameMap[icon] || icon;

  return (
    <div className="group flex flex-col items-center gap-2 px-12 transition-all">
      <div className="transition-transform duration-300 group-hover:scale-110 w-12 h-12 flex items-center justify-center">
        <StackIcon name={finalIconName as any} variant={theme === 'dark' ? 'dark' : 'light'} />
      </div>
      <span className="text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity text-primary">
        {name}
      </span>
    </div>
  );
};

const Skills = () => {
  const categories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "JavaScript", icon: "js" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" },
        { name: "Vue.js", icon: "vuejs" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "TanStack", icon: "tanstack" },
        { name: "Flutter", icon: "flutter" },
        { name: "Dart", icon: "dart" },
        { name: "Vite", icon: "vite" },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "expressjs" },
        { name: "Python", icon: "python" },
        { name: "Flask", icon: "flask" },
        { name: "TypeScript", icon: "typescript" },
        { name: "C#", icon: "csharp" },
        { name: ".NET", icon: "net" },
        { name: "C/C++", icon: "c++" },
        { name: "Java", icon: "java" },
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MySQL", icon: "mysql" },
        { name: "SQLite", icon: "sqlite" },
        { name: "Supabase", icon: "supabase" },
      ]
    },
    {
      name: "Tools & Technologies",
      skills: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Docker", icon: "docker" },
        { name: "VS Code", icon: "vscode" },
        { name: "Figma", icon: "figma" },
        { name: "Ubuntu", icon: "ubuntu" },
        { name: "Android Studio", icon: "android" },
        { name: "Vite", icon: "vite" },
      ]
    }
  ];

  return (
    <section className="py-xl bg-surface-container-low border-y border-outline-variant scroll-mt-[88px]" id="skills">
      <div className="max-w-screen-2xl mx-auto px-margin mb-16">
        <span className="text-label-caps text-primary mb-xs block">TECHNICAL COMPETENCIES</span>
        <h2 className="font-h2 text-h2">Skill Infrastructure</h2>
      </div>

      <div className="space-y-16">
        {categories.map((category, index) => (
          <div key={category.name}>
            <span className="px-margin text-[10px] font-bold uppercase tracking-[0.3em] text-outline mb-6 block">
              {category.name}
            </span>
            <div className="overflow-hidden py-6 border-y border-outline-variant/30">
              <div className={`${
                index % 2 === 0 ? "animate-infinite-scroll" : "animate-infinite-scroll-reverse"
              } flex items-center min-h-[80px]`}>
                {[...Array(10)].map((_, i) => (
                  <React.Fragment key={i}>
                    {category.skills.map((skill, idx) => (
                      <SkillIcon key={`${category.name}-${i}-${idx}`} {...skill} />
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
