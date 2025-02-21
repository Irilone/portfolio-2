
import Navigation from "@/components/Navigation";
import { ReactNode } from "react";
import { AnimatedLayout } from "./AnimatedLayout";
import { motion, useScroll, useSpring } from "framer-motion";

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <AnimatedLayout>
      <Navigation />
      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <main 
        className="relative min-h-screen w-full bg-background"
        role="main"
      >
        {children}
      </main>
    </AnimatedLayout>
  );
};
