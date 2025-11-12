import { HiMail } from 'react-icons/hi'

function ContactSection() {
    return (
        <section id="contact" className="py-24 px-6 bg-gray-50">
            <div className="max-w-2xl mx-auto text-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <p className="text-blue-500 font-mono text-sm">04. What's Next?</p>
                        <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        I'm currently looking for new opportunities and my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
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