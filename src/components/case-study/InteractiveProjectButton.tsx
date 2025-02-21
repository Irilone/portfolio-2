
import { Button } from "@/components/ui/button";

interface InteractiveProjectButtonProps {
  onClick: () => void;
}

const InteractiveProjectButton = ({ onClick }: InteractiveProjectButtonProps) => {
  return (
    <div className="flex justify-center">
      <Button
        size="lg"
        onClick={onClick}
        className="w-full max-w-md"
      >
        View Interactive Project
      </Button>
    </div>
  );
};

export default InteractiveProjectButton;
