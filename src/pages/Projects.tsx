import ProjectCard from '../components/ProjectCard.tsx';
import projectsData from '../data/projectData.ts';
import { ProjectType } from "../model/projectType.ts";

const Projects = () => (
  <section id="projects" className="min-h-[calc(100vh-5.5rem)] pt-28 px-8">
    <h2 className="text-3xl font-bold mb-8">Projects</h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projectsData.map((project: ProjectType, idx: number) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
