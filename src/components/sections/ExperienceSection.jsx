import { useState } from 'react'
import { MdChevronRight } from 'react-icons/md'

function ExperienceSection() {
    const [activeIndex, setActiveIndex] = useState(0)

    const experiences = [
        {
            company: 'StrongMind',
            shortName: 'StrongMind',
            role: 'Software Engineer',
            period: 'March 2024 - Present',
            description: [
                'Developed full-stack features for educational platforms serving thousands of students',
                'Collaborated within an agile team to engineer AI-powered chatbots for student support',
                'Gained leadership experience by rotating as sprint lead, facilitating planning sessions and retrospectives',
                'Enhanced code quality through daily pair programming and technical book clubs',
            ],
            technologies: ['Ruby on Rails', 'Stimulus.js', 'C#', '.NET', 'PostgreSQL', 'AWS'],
        },
        {
            company: 'ONEOK, Inc',
            shortName: 'ONEOK',
            role: 'Software Engineer Intern',
            period: 'May 2023 - August 2023',
            description: [
                'Collaborated with a team to develop a web application using modern frameworks and best practices',
                'Gathered customer requirements to guide software development and ensure user-centric solutions',
                'Managed code changes and automated builds using industry-standard DevOps tools',
                'Participated in daily stand-up meetings and utilized project management tools for organization',
            ],
            technologies: ['Java', 'Spring Boot', 'Azure DevOps', 'Git'],
        },
        {
            company: 'Oral Roberts University',
            shortName: 'ORU',
            role: 'Computer Science Teaching Assistant',
            period: 'August 2022 - December 2022',
            description: [
                'Conducted weekly tutoring sessions covering programming fundamentals for 25 students',
                'Graded coding assignments and provided constructive feedback for continuous improvement',
                'Maintained comprehensive tracking of student progress and performance metrics',
                'Collaborated with fellow TAs to optimize learning resources and class effectiveness',
            ],
            technologies: ['Python', 'Education', 'Mentoring'],
        },
    ]

    return (
        <section id="experience" className="py-24 px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="text-blue-500 font-mono text-lg">02.</span> Where I've Worked
                        </h2>
                        <div className="h-px bg-gray-200 max-w-xs"></div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex flex-col gap-2">
                            {experiences.map((exp, index) => (
                                <button
                                    key={exp.company}
                                    onClick={() => setActiveIndex(index)}
                                    className={`px-4 py-3 text-left border-l-2 transition-colors ${activeIndex === index
                                        ? 'border-blue-500 text-blue-500 bg-blue-50'
                                        : 'border-gray-200 text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    <span className="md:hidden">{exp.shortName}</span>
                                    <span className="hidden md:inline">{exp.company}</span>

                                </button>
                            ))}
                        </div>

                        <div className="flex-1 space-y-6">
                            <div className='flex flex-col'>
                                <h3 className="text-2xl font-bold">
                                    {experiences[activeIndex].role}
                                </h3>
                                <h4 className="text-lg text-blue-500 font-semibold">
                                    {experiences[activeIndex].company}
                                </h4>
                                <p className="text-sm text-gray-600 font-mono mt-1">
                                    {experiences[activeIndex].period}
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {experiences[activeIndex].description.map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <MdChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 pt-4">
                                {experiences[activeIndex].technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs font-mono bg-blue-100 text-blue-700 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection