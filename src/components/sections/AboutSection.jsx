import { MdChevronRight } from 'react-icons/md'

function AboutSection() {
    const skills = [
        'JavaScript (ES6+)',
        'Ruby on Rails',
        'React JS',
        'Stimulus.js',
        'Tailwind CSS',
        'PostgreSQL',
        'MySQL',
        'PHP / Laravel',
        'Git & GitHub',
        'REST APIs',
        'AWS',
        'Agile / Scrum',
    ]

    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="text-blue-500 font-mono text-lg">01.</span> About Me
                        </h2>
                        <div className="h-px bg-gray-200 max-w-xs"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4 text-gray-600">
                            <p>
                                Hello! I'm Michael, a software engineer who believes the best code is the code that
                                solves real problems for real people. My journey started with a simple "Hello World"
                                in JavaScript on Codecademy, and I was hooked. What began as curiosity became a passion,
                                leading me to pursue a Master's in Computer Science and eventually land where I am today.
                            </p>
                            <p>
                                Currently, I'm a Software Engineer at StrongMind in Arizona, where I work building 
                                full-stack features with Ruby on Rails and React JS that serve thousands of
                                students in educational platforms. What excites me most isn't just writing elegant code;
                                it's seeing users benefit from what I build. A backend optimization means nothing if it
                                doesn't make someone's day a little easier.
                            </p>
                            <p>
                                I bring a product mindset to engineering. Before writing code, I ask: "What problem are
                                we actually solving?" This approach, combined with strong communication skills and
                                leadership experience, has allowed me to lead sprint planning sessions, mentor junior
                                engineers, and collaborate effectively across teams. I'm also naturally curious and quick
                                to learn, whether it's a new framework, a different approach, or an unfamiliar problem domain.
                            </p>
                            <p>
                                Before joining StrongMind, I was a Computer Science Teaching Assistant, which taught me
                                that explaining complex ideas clearly is just as important as implementing them. That
                                experience still shapes how I work today: with patience, collaboration, and a focus on
                                continuous growth.
                            </p>
                            <p>
                                Outside of coding, I'm a runner currently logging 25-30 miles per week. Whether it's on the trails or in the terminal, I'm always pushing forward, one
                                step at a time.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-600 mb-4">
                                Here are a few technologies I've been working with recently:
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                                {skills.map((skill) => (
                                    <div key={skill} className="flex items-center gap-2">
                                        <MdChevronRight className="text-blue-500 flex-shrink-0" size={16} />
                                        <span className="text-sm font-mono">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection