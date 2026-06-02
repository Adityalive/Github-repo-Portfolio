import Hero from '../components/sections/Hero'
import ContributionGraph from '../components/sections/ContributionGraph'
import TechStack from '../components/sections/TechStack'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import Experience from '../components/sections/Experience'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <ContributionGraph />
      <TechStack />
      <FeaturedProjects />
      <Experience />
      <Contact />
    </>
  )
}
