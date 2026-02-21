import Image from 'next/image'
import { SiX, SiLinkedin, SiGithub, SiBuymeacoffee, SiYoutube, SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16">
      <div className="w-48 h-48 relative flex-shrink-0 rounded-full overflow-hidden shadow-lg">
        <Image
          src="/profpic.jpg"
          alt="Abdul Naeem"
          fill
          className="object-cover border-4 border-transparent rounded-full hover:border-[#4299e1] transition-all duration-300"
        />
      </div>
      <div className="flex flex-col items-center md:items-start space-y-4">
        <h1 className="text-4xl font-bold">Abdul Naeem</h1>
        <p className="max-w-2xl text-center md:text-left text-muted-foreground">
          Hello! I'm a data analyst with a strong foundation in data science, analytics, and machine learning, and I have completed my <strong>MS in Data Science from Stevens Institute of Technology</strong>.
          <br/>
          I specialize in data visualization, statistical analysis, and predictive modeling, using tools like Python, SQL, Tableau, and Power BI to derive insights and drive data-driven decisions. Open to full-time opportunities in data analytics, business intelligence, and data science. Find my resume <a href="/Abdul_Naeem_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline">here</a>.
        </p>
        <div className="flex space-x-4">
          <a href="https://github.com/nissarahmed761" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <SiGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/abdul-naeem-7a7590203/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <SiLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}