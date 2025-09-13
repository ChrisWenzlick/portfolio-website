import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-x1 font-bold">My Portfolio</h1>
            <div className="space-x-6">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/resume">Resume</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
}