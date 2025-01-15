export interface IEducation {
  duration: string;
  desc: string;
}

export interface IProject {
  title: string;
  duration: string;
  gitHub: string;
  address: string;
  desc: string[];
  skills: string[];
}

export interface IExperience {
  company: string;
  role: string;
  duration: string;
  tasks: string[];
}

export interface ISkill {
  soft: string[];
  hard: string[];
}
