
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface InteractiveProjectFrameProps {
  type: 'papyrus' | 'figma';
  projectUrl: string;
  title: string;
}

const InteractiveProjectFrame = ({ type, projectUrl, title }: InteractiveProjectFrameProps) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen">
      {/* Back button */}
      <Button
        variant="outline"
        size="sm"
        className="absolute top-4 left-4 z-50 bg-background/80 backdrop-blur-sm"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>

      {/* Project iframe */}
      <iframe
        src={projectUrl}
        title={title}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
      />
    </div>
  );
};

export default InteractiveProjectFrame;
