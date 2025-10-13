function Layout({ children }) {
    return (
        <div className="min-h-scren flex flex-col">
            {/* Header will go here */}
            <header className="bg-gray-800 text-white p-4">
                <nav>
                    <h1 className="text-xl font-bold">My Website</h1>
                </nav>
            </header>

            {/* Main content area - this is where page content appears */}
            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>

            {/* Footer will go here */}
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2024 My Website. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Layout;