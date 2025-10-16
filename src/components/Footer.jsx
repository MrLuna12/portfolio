function Footer() {
    return (
        <footer className="border-t border-gray-200 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center gap-6">
                    <div className="font-mono text-2xl font-bold">
                        <span className="text-blue-500">&lt;</span>
                        ML
                        <span className="text-blue-500">/&gt;</span>
                    </div>

                    <p className="text-sm text-gray-600 text-center">
                        Designed & Built by Michael Luna
                    </p>

                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer