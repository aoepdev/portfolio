import { ProjectType } from "../model/projectType.ts";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>

        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 px-2"
        >
          View Project
        </a>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 px-2"
        >
          View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
