import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { SiGithub } from "react-icons/si";
import { BsArrowUpRight } from "react-icons/bs";

type Project = {
  title: string
  description: string
  image: string
  demo: string
  github?: string
  technologies: string[]
}

const projects: Project[] = [
  {
    title: "Datasafai.com",
    description: "AI-assisted web platform for data cleaning, filtering, and preprocessing. Features automated pipelines for deduplication, normalization, missing-value handling, and format standardization. Includes anomaly detection and transformation logic to improve data quality, with one-click export functionality for streamlined reporting.",
    image: "/datasafai.png",
    demo: "https://datasafai.com",
    technologies: ["AI", "Data Processing", "Machine Learning", "Python", "Automation"]
  }
]

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <meta name="title" content="Projects - Abdul Naeem" />
      <meta name="description" content="Read the latest articles and tutorials on technology, programming, and more." />
      <meta property="og:url" content="https://buddhsentripathi.com/projects" />
      <meta property="og:image" content="https://buddhsentripathi.com/default-image-project.webp" />
      <title>Projects - Abdul Naeem</title>
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col md:flex-row gap-6 bg-card rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg hover:bg-primary/10"
          >
            <div className="md:w-2/5 w-full h-full relative">
              <Image
                src={project.image}
                alt={project.title}
                width={640}
                height={360}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-3/5 p-4">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="mb-4 mt-4">{project.description}</p>

              <div className="flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    <SiGithub className="inline-block mr-1" /> GitHub
                  </a>
                )}

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  <BsArrowUpRight className="inline-block mr-1" /> Live
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}
