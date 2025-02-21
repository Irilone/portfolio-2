
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CustomCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  isHoverable?: boolean;
}

const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  ({ className, isHoverable = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={isHoverable ? { y: -5, transition: { duration: 0.2 } } : {}}
        className={cn(
          "rounded-xl border bg-card text-card-foreground shadow-sm",
          "transition-all duration-200",
          isHoverable && "hover:shadow-md",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
CustomCard.displayName = "CustomCard";

export { CustomCard };
