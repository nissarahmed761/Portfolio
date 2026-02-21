import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

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
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="text-muted-foreground">No projects to display at the moment.</p>
      </div>

     
      
    </div>
  )
}
