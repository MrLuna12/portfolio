import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-20">
        <h1 className="text-4xl font-bold text-center pt-24">Home Page</h1>
        <p className="text-center text-gray-600 mt-4">
          This will contain: Hero, About, Experience, Projects, Contact sections
        </p>
        
        <div className="text-center mt-8">
          <Link to="/projects" className="text-blue-500 underline">
            Go to Projects Page
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home