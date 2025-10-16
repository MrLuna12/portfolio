import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'

function Home() {
    return (
        <>
            <Navigation />
            <HeroSection />
            <AboutSection />
            <Footer />
        </>
    )
}

export default Home