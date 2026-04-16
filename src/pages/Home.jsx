
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import Aboutmain from '../components/Aboutmain'
import SeasonSection from '../components/SeasonSection'
import RecentWork from '../components/Recentwork'
import Work2 from '../components/Work2'
import PortfolioCarousel from '../components/Carousal'
import BennetHero from '../components/BennetHero'


const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <BennetHero />
      <Aboutmain />
      <ProjectsSection />
      <PortfolioCarousel />
      <SkillsSection />
      <SeasonSection />
      <Work2 />
      <RecentWork />
    </div>
  )
}

export default Home
