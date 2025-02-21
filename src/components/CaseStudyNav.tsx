
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'role', label: 'Role & Tools' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'outcomes', label: 'Outcomes' }
];

const CaseStudyNav = () => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav 
      className="hidden lg:block sticky top-24 h-fit ml-8 border-l border-border"
      aria-label="Case study navigation"
    >
      <ul className="space-y-4">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                "block pl-4 py-1 text-sm transition-colors relative",
                "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                activeSection === id 
                  ? "text-foreground font-medium before:absolute before:left-[-1px] before:top-0 before:h-full before:w-[2px] before:bg-foreground" 
                  : "text-muted-foreground"
              )}
              aria-current={activeSection === id ? 'true' : 'false'}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CaseStudyNav;
