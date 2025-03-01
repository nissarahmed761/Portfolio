import { Mail} from 'lucide-react'
import { SiLinkedin} from "react-icons/si";

export default function Contact() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Reach Out</h2>
      <div className="bg-card rounded-lg shadow-md p-6">
        <p className="mb-6 text-muted-foreground">
        You're welcome to contact me via email for any questions, collaboration opportunities, or additional details. I'm also highly active on LinkedIn, so don't hesitate to drop me a DM there!
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="mailto:ashaik13@stevens.edu" 
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary bg-primary/20 hover:bg-primary/40 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            Email Me
          </a>
          <a 
            href="https://www.linkedin.com/in/abdul-naeem-7a7590203/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary bg-primary/20 hover:bg-primary/40 transition-colors"
          >
            <SiLinkedin className="w-5 h-5 mr-2" />
            DM on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}