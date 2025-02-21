
import { useState, useEffect } from 'react';

const SkipLink = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsVisible(true);
      }
    };

    const handleMouseDown = () => {
      setIsVisible(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <a
      href="#main"
      className={`
        fixed top-4 left-4 z-50
        bg-primary text-primary-foreground
        px-4 py-2 rounded-md
        transform -translate-y-full transition-transform
        focus:translate-y-0
        ${isVisible ? 'translate-y-0' : ''}
      `}
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
