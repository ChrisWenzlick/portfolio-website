"use client"

import Link from 'next/link'


export default function SiteHeader() {
    return (
        <header className="site-header">
          <Link href="#top" className="site-header__brand">CW</Link>
          <nav className="site-header__nav">
            <Link href="#projects" className="site-header__link">Projects</Link>
            <Link href="#skills" className="site-header__link">Skills</Link>
            <Link href="#testimonials" className="site-header__link">Testimonials</Link>
            <Link href="#contact" className="site-header__link">Contact</Link>
          </nav>
        </header>
    );
}