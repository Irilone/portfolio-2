
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { useAnimations } from "@/hooks/use-animations";
import { ReactNode, useEffect, useState } from "react";

interface AnimatedLayoutProps {
  children: ReactNode;
}

export const AnimatedLayout = ({ children }: AnimatedLayoutProps) => {
  const { animations } = useAnimations();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        {...animations.pageTransition}
        className="min-h-screen bg-background"
        initial={isFirstLoad ? { opacity: 0, y: 20 } : false}
        animate={isFirstLoad ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <motion.main 
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </motion.div>
    </LazyMotion>
  );
};
