"use client"

import Link from 'next/link'


export default function SiteHeader() {
    return (
        <header className="flex justify-between items-center p-4 w-full h-[var(--navbar-height)] shadow-sm fixed top-0 z-50">
          <Link href="#top" className="text-xl font-bold">CW</Link>
          <nav className="gap-4 text-sm font-medium  inline-flex flex-row items-center whitespace-nowrap max-w-full overflow-x-auto p-2 h-12">
            <Link href="#projects">Projects</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </header>
    );
}