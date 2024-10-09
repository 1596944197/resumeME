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
  }[]
}

export type LinkProps = {
  phone: string
  email: string
  experience: string
}

export type EducationProps = {
  school: string
  major: string
  gpa: string
  time: string
  // 学历
  degree: string
}
