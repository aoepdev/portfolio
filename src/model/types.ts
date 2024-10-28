export interface ProjectType {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
}

export interface ContactFormActionData {
  success: boolean;
  error?: string;
}
