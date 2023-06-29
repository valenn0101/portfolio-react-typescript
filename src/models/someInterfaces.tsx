interface ErrorProps {
  statusText?: string;
  message?: string;
}

interface Project {
  id: number;
  image: string;
  title: string;
  skills: string;
  category: string | string[];
  url: string;
}

interface ProjectNav {
  name: string;
}

export type { ErrorProps, Project, ProjectNav };
