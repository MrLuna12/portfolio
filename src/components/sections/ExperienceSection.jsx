import { useState } from 'react'
import { MdChevronRight } from 'react-icons/md'

function ExperienceSection() {
    const [activeIndex, setActiveIndex] = useState(0)

    const experiences = [
        {
            company: 'StrongMind',
            role: 'Software Engineer',
            period: 'March 2024 - Present',
            description: [
                'Developed full-stack features for educational platforms using Ruby on Rails, Stimulus.js, Turbo, and PostgreSQL',
                'Collaborated within an agile team to engineer AI-powered chatbots for student support using Amazon Bedrock',
                'Gained leadership experience by rotating as sprint lead, facilitating planning sessions and retrospectives',
                'Enhanced code quality through daily pair programming and participated in technical book clubs',
            ],
            technologies: ['Ruby on Rails', 'Stimulus.js', 'PostgreSQL', 'AWS'],
        },
        {
            company: 'ONEOK, Inc',
            role: 'Software Engineer Intern',
            period: 'May 2023 - August 2023',
            description: [
                'Collaborated with six interns to develop a URL shortener web application using Java and the Spring Boot Framework',
                'Gathered customer requirements to guide software development, ensuring a more user-centric application',
                'Efficiently managed code changes with Git and automated builds using Azure DevOps',
                'Conducted daily stand-up meetings and utilized Azure Boards for project organization',
            ],
            technologies: ['Java', 'Spring Boot', 'Azure DevOps', 'Git'],
        },
        {
            company: 'Oral Roberts University',
            role: 'Teaching Assistant',
            period: 'August 2022 - December 2022',
            description: [
                'Conducted weekly tutoring sessions covering Python and fundamental computer science concepts for 25 students',
                'Graded over 250 Python coding assignments and provided constructive feedback',
                'Maintained comprehensive tracking of attendance, participation, and grades',
                'Collaborated with three fellow TAs to optimize class time and resources',
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
                        {/* Company tabs */}
                        <div className="flex md:flex-col gap-2">
                            {experiences.map((exp, index) => (
                                <button
                                    key={exp.company}
                                    onClick={() => setActiveIndex(index)}
                                    className={`px-4 py-3 text-left border-l-2 transition-colors ${activeIndex === index
                                        ? 'border-blue-500 text-blue-500 bg-blue-50'
                                        : 'border-gray-200 text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {exp.company}
                                </button>
                            ))}
                        </div>

                        <div className="flex-1 space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold">
                                    {experiences[activeIndex].role}
                                    <span className="text-blue-500"> @ {experiences[activeIndex].company}</span>
                                </h3>
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