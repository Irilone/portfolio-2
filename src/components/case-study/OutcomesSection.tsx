
import { motion, useScroll, useTransform } from "framer-motion";
import { Trophy } from "lucide-react";

interface OutcomesSectionProps {
  outcomes: string[];
}

const OutcomesSection = ({ outcomes }: OutcomesSectionProps) => {
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.7, 0.8], [0.95, 1]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section 
      id="outcomes" 
      className="scroll-mt-24"
    >
      <motion.div
        style={{ opacity, scale }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-semibold flex items-center gap-3">
          <Trophy className="h-8 w-8 text-yellow-400" />
          Outcomes
        </h2>
        
        <motion.div 
          className="grid gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {outcomes.map((outcome, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group p-8 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/70 rounded-2xl text-secondary-foreground shadow-lg transform-gpu transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">✨</span>
                <p className="text-lg">{outcome}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OutcomesSection;
