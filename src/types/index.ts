export type Lang = 'es' | 'en'

export interface Theme {
  colors: {
    text: string
    gray: string
    ligthGray: string
    primary: string
  }
}

export interface LangSkill {
  id: string
  name: string
  scoreLabel: string
  score: number
}

export interface Strength {
  id: string
  name: string
  description: string
  icon: string
}

export interface EducationExperience {
  id: string
  title: string
  location: string
  lines: string
  endAt: string
  startAt: string
  almaMater: string
}

export interface WorkExperience {
  id: string
  lines: string
  startAt: string
  location: string
  company: string
  companyUrl?: string
  description?: string
  title: string
  endAt?: string
}

export interface TechGroup {
  id: string
  title: string
  tags: string[]
}

export interface WorkProject {
  id: string
  description: string
  title: string
  company: string
  lines?: string
  startAt: string
  location: string
  endAt?: string
}

export interface TechResume {
  id: string
  published: boolean
  keywords: string
  title: string
  lang: string
  name: string
  primaryColor: string
  aboutMe: string
  createdAt: string
  avatarUrl?: string
  langSkills: LangSkill[]
  strengths: Strength[]
  educationExperiences: EducationExperience[]
  workExperiences: WorkExperience[]
  techGroups?: TechGroup[]
  workProjects?: WorkProject[]
  [key: string]: any
}

export interface TechProfile {
  id: string
  website: string
  location: string
  twitter: string
  github: string
  phone?: string
  name: string
  email: string
  freelanceRole: string
  interests: string[]
  linkedin: string
  nickname: string
  [key: string]: any
}
