import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu} from 'lucide-react'

function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

                    <div className='hidden md:flex items-center gap-8'>
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

                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-gray-600">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation