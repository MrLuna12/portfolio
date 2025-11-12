import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }
    return (
        <nav className='fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-background/90 backdrop-blur-lg'>
            <div className='max-w-6xl mx-auto px-6 py-4'>
                <div className='flex item-center justify-between'>
                    <a href='/' className='flex items-center gap-3 hover:opacity-80 transition-opacity'>
                        <div className='w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold'>
                            ML
                        </div>
                        <span className='font-mono text-sm text-gray-600'>michael.luna</span>
                    </a>

                    <div className='hidden md:flex items-center gap-8'>
                        <a href="#about" className='text-sm text-gray-600 hover:text-gray-900 transition-colors'>
                            About
                        </a>

                        <a href="#experience" className='text-sm text-gray-600 hover:text-gray-900 transition-colors'>
                            Experience
                        </a>

                        <a href="#projects" className='text-sm text-gray-600 hover:text-gray-900 transition-colors'>
                            Projects
                        </a>

                        <a href="#contact" className='text-sm text-gray-600 hover:text-gray-900 transition-colors'>
                            Contact
                        </a>
                    </div>

                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-gray-600">
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <div className='md:hidden mt-4 pb-4 flex flex-col gap-4 items-center'>
                        <a href="#about" onClick={closeMobileMenu} className='text-sm text-gray-600 hover:text-gray-900 transition-colors'>
                            About
                        </a>

                        <a href="#experience" onClick={closeMobileMenu} className='text-sm text-gray-600 hover:text-gray-900 transition-colors'>
                            Experience
                        </a>

                        <a href="#projects" onClick={closeMobileMenu} className='text-sm text-gray-600 hover:text-gray-900 transition-colors'>
                            Projects
                        </a>

                        <a href="#contact" onClick={closeMobileMenu} className='text-sm text-gray-600 hover:text-gray-900 transition-colors'>
                            Contact
                        </a>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navigation