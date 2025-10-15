import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200'>
            <div className='max-w-6xl mx-auto px-6 py-4'>
                <div className='flex item-center justify-between'>
                    <Link to='/' className='flex items-center gap-3 hover:opacity-80 transition-opacity'>
                        <div className='w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold'>
                            ML
                        </div>
                        <span className='font-mono text-sm text-gray-600'>michael.luna</span>
                    </Link>

                    <div className='flex items-center gap-8'>
                        <Link to="/#about" className='text-sm text-gray-600 hover:text-gray-900 transition-colors'>
                            About
                        </Link>

                        <Link to="/#experience" className='text-sm text-gray-600 hover:text-gray-900 transition-colors'>
                            Experience
                        </Link>

                        <Link to="/projects" className='text-sm text-gray-600 hover:text-gray-900 transition-colors'>
                            Projects
                        </Link>

                        <Link to="/#contact" className='text-sm text-gray-600 hover:text-gray-900 transition-colors'>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation