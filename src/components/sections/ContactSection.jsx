import { HiMail } from 'react-icons/hi'

function ContactSection() {
    return (
        <section id="contact" className="py-24 px-6 bg-gray-50">
            <div className="max-w-2xl mx-auto">
                <div className="space-y-8 text-center">
                    <div className="space-y-4">
                        <p className="text-blue-500 font-mono text-sm">04. What's Next?</p>
                        <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        I'm always interested in connecting with other developers and exploring new ideas. 
                        Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
                    </p>
                </div>

                <div className="mt-10 p-6 md:p-8 bg-white rounded-lg shadow-md border border-gray-200">
                    <form 
                        name="contact" 
                        method="POST" 
                        netlify
                        action="/#contact"
                        className="space-y-5"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                                Subject
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="What's this about?"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your message..."
                                rows={5}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="w-full px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                        >
                            <HiMail className="w-5 h-5" />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection