function AboutSection() {
    const skills = [
        'JavaScript (ES6+)',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'Python',
        'PostgreSQL',
        'MongoDB',
        'Tailwind CSS',
        'Git',
        'Docker',
        'AWS',
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

                    <div className="space-y-4 text-gray-600">
                        <p>
                            Hello! I'm Michael, a software engineer passionate about creating things that live on the internet.
                            My interest in web development started back in 2018 when I decided to try building my first website —
                            turns out hacking together a custom WordPress theme taught me a lot about HTML & CSS!
                        </p>
                        <p>
                            Fast-forward to today, and I've had the privilege of working at a start-up, a large corporation,
                            and a digital agency. My main focus these days is building accessible, inclusive products and digital
                            experiences for a variety of clients.
                        </p>
                        <p>
                            I also recently launched a course that covers everything you need to build a web app with the
                            Spotify API using Node & React.
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-4">
                            Here are a few technologies I've been working with recently:
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                            {skills.map((skill) => (
                                <div key={skill} className="flex items-center gap-2">
                                    <span className="text-blue-500">▹</span>
                                    <span className="text-sm font-mono">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection