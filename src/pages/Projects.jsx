import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

function ProjectsPage() {
    return (
        <>
            <Navigation />
            <div className="min-h-screen">
                <h1 className="text-4xl font-bold text-center pt-24">All Projects Page</h1>
                <p className="text-center text-gray-600 mt-4">
                    This will show the full project list with search and filters
                </p>

                <div className="text-center mt-8">
                    <Link to="/" className="text-blue-500 underline">
                        Go to Home Page
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProjectsPage