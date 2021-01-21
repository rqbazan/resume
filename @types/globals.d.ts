declare module '@app' {
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
    description: string
    title: string
    endAt: string
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
    lines: string
    startAt: string
    location: string
    endAt: string
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
    avatarUrl: string
    langSkills: LangSkill[]
    strengths: Strength[]
    educationExperiences: EducationExperience[]
    workExperiences: WorkExperience[]
    techGroups: TechGroup[]
    workProjects: WorkProject[]
  }

  export interface TechProfile {
    id: string
    website: string
    seoBanner: string
    location: string
    twitter: string
    seoDescription: string
    github: string
    phone: string
    name: string
    email: string
    freelanceRole: string
    seoTitle: string
    interests: string[]
    linkedin: string
    nickname: string
  }

  export interface AppProps {
    lang: Lang
    techProfile: TechProfile
    techResume: TechResume
  }
}
