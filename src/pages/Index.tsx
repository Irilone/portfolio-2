
import { ArrowRight, Sun, Moon } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "@/components/sections/Hero";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";
import { useQuery } from "@tanstack/react-query";
import { projectsService } from "@/services/projects";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();

  const { data: projects = [], isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: projectsService.getAll
  });

  // Cognitive continuity through scroll-based transforms
  const projectsScale = useTransform(scrollY, [0, 300], [0.95, 1]);
  const projectsOpacity = useTransform(scrollY, [0, 300], [0.3, 1]);

  // Predictive section tracking
  const handleScroll = useCallback(() => {
    const sections = ["hero", "about", "projects", "contact"];
    const currentSection = sections.find(section => {
      const element = document.getElementById(section);
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return rect.top <= 100 && rect.bottom >= 100;
    });
    if (currentSection) setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full">
      <Navigation activeSection={activeSection} />
      
      {/* Theme Toggle with enhanced feedback */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-24 right-6 z-50 rounded-full bg-background/80 backdrop-blur-sm shadow-md"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </motion.div>
      
      <Hero />
      <About />

      {/* Projects Section with cognitive optimization */}
      <motion.section 
        id="projects" 
        className="py-16 md:py-24 px-4 md:px-6"
        style={{ scale: projectsScale, opacity: projectsOpacity }}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Selected Work
          </motion.h2>
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-muted rounded-2xl h-[400px]" />
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-500">
              Failed to load projects. Please try again later.
            </div>
          ) : (
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  onViewCaseStudy={(slug) => navigate(`/case-study/${slug}`)}
                />
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>

      <Contact />

      {/* Enhanced floating contact button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Button
          className="fixed bottom-6 right-6 rounded-full shadow-lg group"
          size="lg"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Let's Connect
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center text-muted-foreground">
          <p>© 2024 Dorian Tykesson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
