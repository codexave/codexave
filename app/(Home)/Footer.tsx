import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className=" footer bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]  dark:bg-zinc-900   dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]   py-6">
    <div className="container mx-auto flex flex-col items-center">
        <div className="text-5xl font-bold mb-4">CodeXave</div>
        <nav className="mb-4">
            <ul className="flex space-x-6">
                <li>
                    <Link href="#about" className="hover:text-blue-400 transition-colors duration-300">About</Link>
                </li>
                <li>
                    <Link href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</Link>
                </li>
                <li>
                    <Link href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</Link>
                </li>
            </ul>
        </nav>
        <div className="flex space-x-4 mb-4">
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">LinkedIn</Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">GitHub</Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">Twitter</Link>
        </div>
        <div className="text-sm">&copy; 2024 . All Rights Reserved.</div>
    </div>
</footer>
  )
}

export default Footer