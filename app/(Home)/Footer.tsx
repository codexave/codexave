import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Facebook, Github, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="footer bg-gradient-to-t from-purple-300 via-slate-200 to-zinc-50  dark:bg-zinc-900   dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image className="dark:hidden block" src={'/LOGO BLACK.png'} width={110} height={110} alt="website development" ></Image>
            <Image className="dark:block hidden" src={'/LOGO WHITE.png'} width={110} height={110} alt="software development"></Image>
            <p className="text-sm">
              Innovating the future, one line of code at a time. We're a passionate team of developers and designers creating cutting-edge solutions.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold  mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:font-semibold hover:scale-105 transition ease-in duration-300 delay-300 hover:text-accent-foreground">Home</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:font-semibold hover:scale-105 transition ease-in duration-300 delay-300 hover:text-accent-foreground">About</Link></li>
              <li><Link href="#project" className="text-muted-foreground hover:font-semibold hover:scale-105 transition ease-in duration-300 delay-300 hover:text-accent-foreground">Projects</Link></li>
              <li><Link href="#service" className="text-muted-foreground hover:font-semibold hover:scale-105 transition ease-in duration-300 delay-300 hover:text-accent-foreground">Services</Link></li>
              <li><Link href="#faq" className="text-muted-foreground hover:font-semibold hover:scale-105 transition ease-in duration-300 delay-300 hover:text-accent-foreground">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold  mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <Link href={'mailto:codexave@gmail.com'}><li className='flex gap-2'><Mail /> codexave@gmail.com</li></Link>
              <Link  href={'tel:+923253452292'}> <li className='flex gap-2 pt-4'><Phone /> +92 3253452292 </li></Link>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold  mb-4">Social Links</h4>
            <div className="flex space-x-4 mb-4 sm:mb-0">
              <Link href="https://www.facebook.com/share/pU1K8sovxyi6TJqo/" className="hover: transition-colors duration-300">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover: transition-colors duration-300">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.instagram.com/code.xave/" className="hover: transition-colors duration-300">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.linkedin.com/company/codexave" className="hover: transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

            
         

        </div>
        <div className='flex justify-center pt-8 '>
        <p>&copy; {new Date().getFullYear()} CodeXave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

