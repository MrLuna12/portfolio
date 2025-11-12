import { LuGithub, LuLinkedin, LuMail, LuArrowRight } from "react-icons/lu";

function HeroSection() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-4xl">
                <div className="space-y-8">
                    <p className="text-blue-500 font-mono text-sm">Hi, my name is</p>
                    <h1 className="text-5xl md:text-7xl font-bold">Michael Luna</h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-600">
                        I build things for the web.
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        I'm a software engineer specializing in building exceptional digital experiences.
                        Currently, I'm focused on creating accessible, human-centered products with modern web technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg font-medium flex items-center gap-2 justify-center">
                            View My Work
                            <LuArrowRight className="ml-2 h-5 w-5" />
                        </a>

                        <a
                            href="#contact" className="border-2 flex justify-center border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors text-lg font-medium">
                            Get In Touch
                        </a>
                    </div>

                    <div className="flex gap-6 pt-4">
                        <a
                            href="https://github.com/MrLuna12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-500 transition-colors"
                        >
                            <LuGithub className="w-6 h-6" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/michael-j-luna"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-500 transition-colors"
                        >
                            <LuLinkedin className="w-6 h-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            href="mailto:michaelluna244@gmail.com"
                            className="text-gray-600 hover:text-blue-500 transition-colors"
                        >
                            <LuMail className="w-6 h-6" />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div >
            </div >
        </section >
    )
}

export default HeroSection