'use client'
import Marquee from 'react-fast-marquee'
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiAngular, SiCplusplus, SiDocker, SiFlask, SiGooglecloud, SiJenkins, SiKubernetes, SiMysql, SiNestjs, SiPostgresql, SiPython, SiSupabase, SiGithubactions, SiMocha, SiTensorflow, SiR} from 'react-icons/si'
import { FaAws, FaJava } from "react-icons/fa"
import { VscAzure } from "react-icons/vsc"

const FRONTEND_N_CICD_SKILLS = [
  { Icon: SiPython, name: "Python" },
  { Icon: SiR, name: "R" },
  { Icon: SiMysql, name: "MySQL" },
  { Icon: SiTensorflow, name: "Tensorflow" },
]

const BACKEND_DEVOPS_SKILLS = [
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: FaAws, name: "AWS" },
  { Icon: SiGooglecloud, name: "Google Cloud" },
]

export default function Skills() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-foreground">Skills</h2>
      <section className="my-8 space-y-6 bg-background p-2 transition-colors duration-300">
        {/* Frontend Skills */}
        <div className="relative overflow-hidden">
          <Marquee
            autoFill
            pauseOnHover
            pauseOnClick
            speed={20}
            className="[&>div]:flex [&>div]:items-center"
          >
            <SkillsList skills={FRONTEND_N_CICD_SKILLS} />
          </Marquee>
        </div>

        {/* Backend & DevOps Skills (Reversed Direction) */}
        <div className="relative overflow-hidden">
          <Marquee
            autoFill
            pauseOnHover
            pauseOnClick
            direction="right"
            speed={20}
            className="[&>div]:flex [&>div]:items-center"
          >
            <SkillsList skills={BACKEND_DEVOPS_SKILLS} />
          </Marquee>
        </div>
      </section>
    </>
  )
}

interface Skill {
  Icon: React.ComponentType<{ className?: string }>
  name: string
}

const SkillsList = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="flex items-center gap-4 px-4">
      {skills.map(({ Icon, name }, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-200 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 text-sm shadow-sm transition-colors duration-300 hover:bg-neutral-300 dark:hover:bg-neutral-800"
        >
          <Icon className="w-5 h-5" aria-label={name} />
          <span className="whitespace-nowrap">{name}</span>
        </div>
      ))}
    </div>
  )
}
