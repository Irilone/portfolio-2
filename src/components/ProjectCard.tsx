
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";
import ImageWithFallback from "./ImageWithFallback";
import { ProjectCardProps } from "@/types/components/project-card";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project, onViewCaseStudy }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const navigate = useNavigate();

  const handleProjectClick = useCallback(() => {
    controls.start({
      scale: 1.02,
      transition: { duration: 0.2 }
    }).then(() => {
      onViewCaseStudy(project.slug);
    });
  }, [project.slug, onViewCaseStudy, controls]);

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { y: -5 },
    exit: { opacity: 0, scale: 0.95 }
  };

  const contentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    hover: { y: -5 }
  };

  return (
    <motion.article
      className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleProjectClick}
      role="button"
      tabIndex={0}
      aria-label={`View case study for ${project.title}`}
    >
      <div className="aspect-video bg-muted overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        >
          <ImageWithFallback
            src={project.coverImage}
            alt={`Preview of ${project.title}`}
            className="w-full h-full object-cover"
            width={800}
            height={450}
            hasMotion={true}
          />
        </motion.div>
      </div>

      <motion.div 
        className="p-6 space-y-4"
        variants={contentVariants}
      >
        <motion.h3 
          className="text-xl font-semibold"
          animate={{ color: isHovered ? "var(--primary)" : "var(--foreground)" }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="text-muted-foreground"
          variants={{ hover: { opacity: 0.9 } }}
        >
          {project.description}
        </motion.p>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Key Cognitive Principles:</p>
          <ul className="text-sm space-y-1">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/60" />
              Prediction Error Minimization
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/60" />
              Active Inference Design
            </li>
          </ul>
        </div>

        <motion.div
          className="flex items-center gap-2 text-primary pt-2"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1, x: 5 }}
        >
          Explore Case Study 
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </motion.div>
      </motion.div>
    </motion.article>
  );
};

export default ProjectCard;
