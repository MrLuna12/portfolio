import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import ProjectsSection from '../components/sections/ProjectsSection';

function Home() {
    return (
        <>
            <Navigation />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <Footer />
        </>
    )
}

export default Home