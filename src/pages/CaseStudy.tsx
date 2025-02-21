
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero from "@/components/case-study/Hero";
import RoleSection from "@/components/case-study/RoleSection";
import ProcessSection from "@/components/case-study/ProcessSection";
import GallerySection from "@/components/case-study/GallerySection";
import OutcomesSection from "@/components/case-study/OutcomesSection";
import SideNavigation from "@/components/case-study/SideNavigation";
import InteractiveProjectFrame from "@/components/interactive-projects/InteractiveProjectFrame";
import Overview from "@/components/case-study/Overview";
import InteractiveProjectButton from "@/components/case-study/InteractiveProjectButton";
import { projects } from "@/data/projects";

const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [showInteractive, setShowInteractive] = useState(false);
  
  const projectKey = id as keyof typeof projects;
  const project = projects[projectKey];

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) return null;

  if (showInteractive && project.interactiveUrl && project.interactiveType) {
    return (
      <InteractiveProjectFrame
        type={project.interactiveType}
        projectUrl={project.interactiveUrl}
        title={project.title}
      />
    );
  }

  return (
    <div className="min-h-screen w-full bg-background">
      <Hero 
        title={project.title}
        subtitle={project.subtitle}
        coverImage={project.images[0]}
      />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 py-12 md:py-16">
          <div className="flex-1 max-w-4xl space-y-16 md:space-y-24">
            {project.interactiveUrl && (
              <InteractiveProjectButton 
                onClick={() => setShowInteractive(true)} 
              />
            )}
            
            <Overview
              overview={project.overview}
              onFocus={() => setActiveSection("overview")}
            />

            <RoleSection 
              role={project.role}
              timeline={project.timeline}
              tools={project.tools}
            />

            <ProcessSection 
              challenges={project.challenges}
              solutions={project.solutions}
            />

            <GallerySection 
              title={project.title}
              images={project.images}
            />

            <OutcomesSection 
              outcomes={project.outcomes}
            />
          </div>

          <SideNavigation activeSection={activeSection} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
