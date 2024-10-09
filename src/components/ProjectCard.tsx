import { ProjectType } from "../model/projectTypes.ts";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden my-4">
      <img className="w-full h-48 object-cover" src={project.imageUrl} alt={project.title} />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
