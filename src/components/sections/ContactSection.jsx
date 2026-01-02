import { HiMail } from 'react-icons/hi'

function ContactSection() {
    return (
        <section id="contact" className="py-24 px-6 bg-gray-50">
            <div className="max-w-2xl mx-auto text-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="text-blue-500 font-mono text-lg">04.</span> Get In Touch
                        </h2>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        I'm always interested in connecting with other developers and exploring new ideas. Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
                    </p>

                    <a
                        href="mailto:michaelluna244@gmail.com"
                        className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors text-lg font-medium"
                    >
                        <HiMail className="w-5 h-5" />
                        Say Hello
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ContactSection