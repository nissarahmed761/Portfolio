import Hero from '@/components/HeroSection'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import FeaturedProjects from '@/components/FeaturedProjects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </div>
  )
}
