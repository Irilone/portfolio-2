
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";
import { motion } from "framer-motion";

export interface CustomButtonProps extends ButtonProps {
  isLoading?: boolean;
  loadingText?: string;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant, size, isLoading, loadingText, children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button
          ref={ref}
          variant={variant}
          size={size}
          className={cn(
            "font-medium transition-all duration-200",
            isLoading && "opacity-70 cursor-not-allowed",
            className
          )}
          disabled={isLoading}
          {...props}
        >
          {isLoading ? (
            <>
              <span className="animate-spin mr-2">⚪</span>
              {loadingText || "Loading..."}
            </>
          ) : (
            children
          )}
        </Button>
      </motion.div>
    );
  }
);
CustomButton.displayName = "CustomButton";

export { CustomButton };
