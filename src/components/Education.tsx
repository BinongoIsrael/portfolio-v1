const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Visayas State University - Main Campus",
      period: "2022 — Present",
      description: ""
    },
  ];

  return (
    <section className="px-margin py-xl max-w-screen-2xl mx-auto border-t border-outline-variant scroll-mt-[88px]" id="education">
      <div className="mb-lg">
        <span className="text-label-caps text-primary mb-xs block">ACADEMIC FOUNDATION</span>
        <h2 className="font-h2 text-h2">Education</h2>
      </div>
      <div className="space-y-12">
        {educationData.map((item, idx) => (
          <div key={idx} className="relative pl-8 border-l border-outline-variant hover:border-primary transition-colors">
            <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-primary" />
            <h3 className="font-h3 text-h3 mb-1">{item.degree}</h3>
            <div className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2">
              {item.institution} | {item.period}
            </div>
            <p className="font-body-md text-on-surface-variant max-w-2xl leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
