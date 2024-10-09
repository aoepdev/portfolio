import ProjectCard from "../components/ProjectCard.tsx";

import { ProjectType } from "../model/projectTypes.ts";

const DUMMY_PROJECTS: ProjectType[] = [
  {
    title: 'Project 1',
    description: 'This is the description of this project',
    imageUrl: 'https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg?w=1060&t=st=1728428813~exp=1728429413~hmac=2a9ba0e9b193385a5d5d5957f428b48f09230b09dc7ea05274a400a62d682db2',
    projectUrl: 'aoep.dev'
  },
  {
    title: 'Project 2',
    description: 'This is the description of this project',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    projectUrl: 'aoepapp.dev'
  },
  {
    title: 'Project 2',
    description: 'This is the description of this project',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    projectUrl: 'aoepapp.dev'
  }
]



const Projects = () => <div className="flex flex-col items-center">
  <h1 className="text-4xl">Projects Page</h1>
  {DUMMY_PROJECTS.map(proj => <ProjectCard project={proj} />)}
</div>

export default Projects;