export interface IEducation {
  duration: string;
  desc: string;
}

export interface IProblem {
  title: string;
  problem: string;
  challenge: string[];
  solution: string[];
}
export interface ITechDecision {
  title: string;
  reason: string[];
}
export interface IProject {
  title: string;
  duration: string;
  gitHub: string;
  address: string;
  desc: string[];
  skills: string[];
  services?: string[];
  tasks?: string[];
  techDecision?: { [key: string]: ITechDecision };
  problems?: { [key: string]: IProblem };
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
