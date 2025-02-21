
interface SideNavigationProps {
  activeSection: string;
}

const SideNavigation = ({ activeSection }: SideNavigationProps) => {
  return (
    <aside className="hidden lg:block sticky top-24 h-fit">
      <nav 
        className="space-y-4 text-sm border-l border-border pl-8"
        aria-label="Case study sections"
      >
        {["overview", "role", "process", "gallery", "outcomes"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`block py-2 transition-colors ${
              activeSection === section
                ? "text-foreground font-medium border-l-2 border-foreground -ml-[33px] pl-8"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default SideNavigation;
