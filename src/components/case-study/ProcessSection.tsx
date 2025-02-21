
import { motion } from "framer-motion";
import { Rocket, Lightbulb } from "lucide-react";

interface ProcessSectionProps {
  challenges: string[];
  solutions: string[];
}

const ProcessSection = ({ challenges, solutions }: ProcessSectionProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="process" className="scroll-mt-24">
      <h2 className="text-3xl font-semibold mb-12 flex items-center gap-3">
        <Rocket className="h-8 w-8 text-primary" />
        Process
      </h2>
      
      <div className="space-y-16">
        <div>
          <h3 className="text-xl font-medium mb-8 flex items-center gap-2">
            <span className="text-2xl">🎯</span> The Challenge
          </h3>
          <motion.ul 
            className="space-y-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {challenges.map((challenge, index) => (
              <motion.li 
                key={index}
                variants={item}
                className="p-6 bg-secondary hover:bg-secondary/80 rounded-2xl text-secondary-foreground transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {challenge}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-8 flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-yellow-400" /> The Solution
          </h3>
          <motion.ul 
            className="space-y-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {solutions.map((solution, index) => (
              <motion.li 
                key={index}
                variants={item}
                className="p-6 bg-gradient-to-r from-secondary to-secondary/50 rounded-2xl text-secondary-foreground transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {solution}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
