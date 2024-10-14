export type ProductProps = {
  // 组件属性
  title: string
  time: string
  skills?: string[]
  bg?: string[]
  role?: string[]
  actions?: string[]
  result?: string[]
}

export type WorksProps = {
  works: {
    company: string
    time: string
    role: string
    depart: string
    bg?: string
  }[]
}

export type LinkProps = {
  phone?: string
  email?: string
  experience?: string
  age?: string
}

export type EducationProps = {
  school: string
  major: string
  gpa?: string
  time: string
  // 学历
  degree: string
}

export type HeaderProps = {
  showImg: boolean
  name: string
  avatar?: string
}

export type SocialProps = {
  iconUrl: string
  name: string
  value: string
  a_href: string
}

export type Direction = 'left' | 'top'

export interface AppState {
  works: WorksProps['works']
  link: LinkProps
  skills: string[]
  products: ProductProps[]
  educations: EducationProps[]
  header: HeaderProps
  direction: Direction
  socials: SocialProps[]
}
