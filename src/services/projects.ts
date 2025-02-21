
import { Project } from '@/types/project';
import { api } from './api';

export const projectsService = {
  async getAll(): Promise<Project[]> {
    try {
      const { data: projects, error } = await api.supabase
        .from('projects')
        .select(`
          *,
          project_images (
            url,
            type,
            "order"
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      const { data: publicUrl } = api.supabase
        .storage
        .from('project-images')
        .getPublicUrl('');

      const storageUrl = publicUrl.publicUrl;

      return projects.map(project => {
        // Get project images sorted by order
        const sortedImages = project.project_images
          .sort((a: any, b: any) => a.order - b.order)
          .map((img: any) => `${storageUrl}/public/lovable-uploads/${project.slug}/${img.url}`);

        // Always use the project card image for the cover
        const coverImagePath = `${storageUrl}/public/lovable-uploads/${project.slug}/${project.slug}-projectcard-img.png`;

        return {
          id: project.id,
          slug: project.slug,
          title: project.title,
          description: project.description,
          category: project.category,
          overview: project.overview,
          role: project.role,
          tools: project.tools,
          challenges: project.challenges,
          solutions: project.solutions,
          outcomes: project.outcomes,
          images: sortedImages,
          coverImage: coverImagePath,
          profileImage: coverImagePath // Using the same cover image for profile if needed
        };
      });
    } catch (error) {
      return api.handleError(error as Error);
    }
  }
};
