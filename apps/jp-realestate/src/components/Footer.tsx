import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white px-4 sm:px-6 lg:px-8 p-10 align-baseline">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h1 className="font-bold font-serif text-xl">JP Real Estate</h1>
                    <h2>123-456-7890</h2>
                    <p className="mt-3 text-sm">&copy; {new Date().getFullYear()}. Developed by Nolan Strait.</p>
                </div>
                <div>
                    <h3 className="font-bold mb-3">Pages</h3>
                    <ul>
                        <li>
                            <Link href="/" className="border-b-2 border-transparent hover:border-white hover:text-gray-200">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="border-b-2 border-transparent hover:border-white hover:text-gray-200">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/stories" className="border-b-2 border-transparent hover:border-white hover:text-gray-200">
                                Stories 
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="border-b-2 border-transparent hover:border-white hover:text-gray-200">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}