
import { ArrowRight, ChevronDown } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Creating interfaces that align with human cognition";

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!prefersReducedMotion) {
      let i = 0;
      const timer = setInterval(() => {
        if (i <= fullText.length) {
          setDisplayText(fullText.slice(0, i));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 50);

      return () => clearInterval(timer);
    } else {
      setDisplayText(fullText);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-6"
      aria-labelledby="hero-heading"
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"
        animate={{ 
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="relative text-center space-y-6 md:space-y-8 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground"
          variants={itemVariants}
        >
          Cognitive Systems Designer & HCI Specialist
        </motion.span>
        
        <motion.h1 
          id="hero-heading"
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          variants={itemVariants}
        >
          Dorian Tykesson
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </motion.p>
        
        <motion.p 
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto"
          variants={itemVariants}
        >
          Applying the Free Energy Principle to design predictable, efficient interfaces
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <CustomButton 
            size="lg" 
            className="mt-6 md:mt-8 rounded-full shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary/80"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="View my work"
          >
            Explore My Work <ArrowRight className="ml-2 h-4 w-4" />
          </CustomButton>
        </motion.div>

        <motion.div
          className="mt-12 text-sm text-muted-foreground"
          variants={itemVariants}
        >
          <p className="max-w-lg mx-auto">
            Each project demonstrates how understanding human cognition leads to better design
          </p>
        </motion.div>
      </motion.div>

      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to about section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <ChevronDown className="h-8 w-8 animate-bounce" style={{ animationDuration: '2s' }} />
      </motion.button>
    </section>
  );
};

export default Hero;
