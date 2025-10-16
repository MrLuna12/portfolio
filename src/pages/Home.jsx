import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HeroSection from '../components/sections/HeroSection'

function Home() {
    return (
        <>
            <Navigation />
            <HeroSection />
            <Footer />
        </>
    )
}

export default Home