
import { useReducedMotion } from "framer-motion";

export const useAnimations = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 17,
      duration: 0.5 
    }
  };

  const pageTransition = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 17,
      duration: 0.3 
    }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      }
    }
  };

  const scaleOnHover = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  };

  const slideInFromRight = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  };

  return {
    animations: prefersReducedMotion
      ? {} // Return empty animations if user prefers reduced motion
      : {
          fadeInUp,
          pageTransition,
          staggerChildren,
          scaleOnHover,
          slideInFromRight
        }
  };
};
