
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useAnimations } from "@/hooks/use-animations";

interface LoadingStateProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

export const LoadingState = ({ 
  message = "Loading...", 
  size = "md" 
}: LoadingStateProps) => {
  const { animations } = useAnimations();

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12"
  };

  return (
    <motion.div
      {...animations.fadeInUp}
      className="flex flex-col items-center justify-center p-8 space-y-4"
      role="status"
      aria-label={message}
      aria-live="polite"
    >
      <Loader2 
        className={`animate-spin text-muted-foreground ${sizeClasses[size]}`}
        aria-hidden="true"
      />
      <p className="text-sm text-muted-foreground">{message}</p>
    </motion.div>
  );
};
