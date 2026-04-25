import AnimatedBackground from './components/AnimatedBackground';
import CursorFollower from './components/CursorFollower';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <div className="relative min-h-screen selection:bg-primary/10">
      <CommandPalette />
      <CursorFollower />
      <AnimatedBackground />
      <Navbar />
      <main>
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        <AnimatedSection>
          <Education />
        </AnimatedSection>
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;
