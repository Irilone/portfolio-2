
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  coverImage: string;
}

const Hero = ({ title, subtitle, coverImage }: HeroProps) => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  
  // Parallax effect for cognitive continuity
  const imageScale = useTransform(scrollY, [0, 300], [1.1, 1]);
  const imageOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const titleY = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <motion.section 
      className="relative h-[80vh] w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        style={{ scale: imageScale, opacity: imageOpacity }}
        className="absolute inset-0"
      >
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-background" />
      </motion.div>

      <div className="container relative mx-auto px-6 h-full flex flex-col justify-end pb-24">
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-6 left-6 z-50 bg-background/80 backdrop-blur-sm text-foreground hover:bg-background/90"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <motion.div
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-4 max-w-4xl"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-yellow-400" />
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white"
              layoutId={`project-title-${title}`}
            >
              {title}
            </motion.h1>
          </div>
          <motion.p 
            className="text-xl text-white/80 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
