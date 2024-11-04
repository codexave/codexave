import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Facebook, Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
<footer className="footer bg-gradient-to-t from-purple-300 via-slate-200 to-zinc-50  dark:bg-zinc-900   dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
          <Image className="dark:hidden block" src={'/LOGO BLACK.png'} width={110} height={110} alt="Logo" ></Image>
          <Image className="dark:block hidden" src={'/LOGO WHITE.png'} width={110} height={110} alt="Logo"></Image>
            <p className="text-sm">
              Innovating the future, one line of code at a time. We're a passionate team of developers and designers creating cutting-edge solutions.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold  mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:font-semibold hover:scale-105 transition ease-in duration-300 delay-300 hover:text-accent-foreground">Home</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:font-semibold hover:scale-105 transition ease-in duration-300 delay-300 hover:text-accent-foreground">About</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:font-semibold hover:scale-105 transition ease-in duration-300 delay-300 hover:text-accent-foreground">Projects</Link></li>
              <li><Link href="#service" className="text-muted-foreground hover:font-semibold hover:scale-105 transition ease-in duration-300 delay-300 hover:text-accent-foreground">Services</Link></li>
              <li><Link href="#faq" className="text-muted-foreground hover:font-semibold hover:scale-105 transition ease-in duration-300 delay-300 hover:text-accent-foreground">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold  mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className='flex gap-2'><Mail/> codexave@gmail.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold  mb-4">Stay Updated</h4>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="outline-none  placeholder-gray-100"
              />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          {/* <div className="flex space-x-4 mb-4 sm:mb-0">
            <Link href="https://www.facebook.com/share/pU1K8sovxyi6TJqo/" className="hover: transition-colors duration-300">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <a href="#" className="hover: transition-colors duration-300">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="hover: transition-colors duration-300">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="hover: transition-colors duration-300">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div> */}
          <div className="text-sm text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} CodeXave. All rights reserved.</p>
            <p className="mt-2">
              <a href="#" className="hover: transition-colors duration-300">Privacy Policy</a>
              {' | '}
              <a href="#" className="hover: transition-colors duration-300">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

