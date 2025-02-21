
import { Project } from '../project';

export interface ProjectCardProps {
  project: Project;
  onViewCaseStudy: (slug: string) => void;
}
