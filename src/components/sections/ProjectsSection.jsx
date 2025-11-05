import { FiCode, FiGithub, FiExternalLink } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'

function ProjectsSection() {
    const featuredProjects = [
        {
            id: 1,
            title: 'Grocery List Application',
            description: 'A mobile grocery list application with React Native frontend and Ruby on Rails API backend. Features include item categorization, quantity tracking, and shopping history for improved grocery planning.',
            image: '/grocery-list-preview.png', // We'll handle images later
            technologies: ['React Native', 'Ruby on Rails', 'PostgreSQL'],
            github: 'https://github.com/MrLuna12/grocery-list-frontend',
            live: null, // No live demo
        },
        {
            id: 2,
            title: 'Pizza Order Management',
            description: 'A web application built with Laravel for managing pizza orders and toppings using CRUD operations. Features MySQL database with migrations, organized MVC architecture, and comprehensive unit testing.',
            image: '/pizza-app-preview.png',
            technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
            github: 'https://github.com/MrLuna12/pizza-app',
            live: null,
        },
        {
            id: 3,
            title: 'Student Points Management System',
            description: 'A comprehensive web application for managing student points and rewards. Built with Laravel and Livewire for real-time interactions, featuring secure authentication and transparent transaction tracking.',
            image: '/student-points-preview.png',
            technologies: ['PHP', 'Laravel', 'Livewire', 'MySQL', 'Bootstrap'],
            github: 'https://github.com/MrLuna12/kidscash-Student-Points-Management-System',
            live: null,
        },
    ]

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-12">
                    {/* Heading */}
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="text-blue-500 font-mono text-lg">03.</span> Featured Projects
                        </h2>
                        <p className="text-gray-600 max-w-2xl">
                            {featuredProjects.length === 0
                                ? "I'm currently working on some exciting projects. Check back soon to see what I'm building!"
                                : "Here are some of my favorite projects. Check out the full collection to see everything I've built."}
                        </p>
                    </div>

                    {/* Empty State */}
                    {featuredProjects.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-16 px-6">
                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
                                <div className="relative bg-blue-50 p-8 rounded-2xl border-2 border-dashed border-blue-200">
                                    <FiCode className="h-16 w-16 text-blue-500" strokeWidth={1.5} />
                                </div>
                            </div>

                            <div className="text-center space-y-4 max-w-md">
                                <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
                                    Projects In Development
                                    <HiSparkles className="h-5 w-5 text-blue-500" />
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    I'm currently building some exciting projects that will be showcased here soon.
                                    In the meantime, feel free to check out my GitHub or get in touch!
                                </p>

                                <div className="flex gap-4 justify-center pt-4">
                                    <a
                                        href="https://github.com/MrLuna12"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center gap-2"
                                    >
                                        <FiGithub className="w-5 h-5" />
                                        View GitHub
                                    </a>

                                    <a
                                        href="#contact"
                                        className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium"
                                    >
                                        Get In Touch
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Project Cards */}
                    {featuredProjects.length > 0 && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all flex flex-col"
                                >
                                    {/* Image - aspect-video ratio */}
                                    <div className="aspect-video bg-gray-100 flex items-center justify-center">
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <FiCode className="h-8 w-8" />
                                            <span className="text-sm font-medium">Preview Coming Soon</span>
                                        </div>
                                    </div>

                                    {/* Header: Title + Description */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Content: Tech Tags - grows to push footer down */}
                                    <div className="px-6 pb-4 grow">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs font-mono bg-blue-100 text-blue-700 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer: Action Buttons - always at bottom */}
                                    <div className="p-6 pt-0 flex gap-2">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors ${project.live ? 'flex-1' : 'w-full'}`}
                                        >
                                            <FiGithub className="h-4 w-4" />
                                            View Code
                                        </a>

                                        {/* Live Demo button - only if live URL exists */}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                                            >
                                                <FiExternalLink className="h-4 w-4" />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection