'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ModeToggle } from "@/components/ui/Toggle"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "FAQ", href: "/faq" },
]

const serviceItems = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "App Development", href: "/services/app-development" },
  { name: "SEO", href: "/services/seo" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
]

export function Navbar2() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="container mx-auto flex h-20 items-center justify-between">
    <div className="hidden md:flex w-full justify-center">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image
          className="dark:hidden block p-1"
          src={'/LOGO BLACK.png'}
          width={80}
          height={80}
          alt="codexave"
        />
        <Image
          className="dark:block hidden p-1"
          src={'/LOGO WHITE.png'}
          width={80}
          height={80}
          alt="seo"
        />
      </Link>
      <NavigationMenu className="w-full justify-center bg-none">
        <NavigationMenuList className="flex justify-center">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {serviceItems.map((item) => (
                  <li key={item.href}>
                    <NavigationMenuLink asChild>
                      <a
                        href={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{item.name}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item.name} services tailored to your needs.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="pr-0 flex flex-col items-center justify-center"
      >
        <MobileLink
          href="/"
          className="flex items-center mb-4"
          onOpenChange={setIsOpen}
        >
          <span className="font-bold">Your Logo</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6 flex flex-col items-center">
          <div className="flex flex-col space-y-3 items-center">
            {navItems.map((item) => (
              <MobileLink
                key={item.href}
                href={item.href}
                onOpenChange={setIsOpen}
                className="text-center"
              >
                {item.name}
              </MobileLink>
            ))}
          </div>
          <div className="flex flex-col space-y-2 items-center">
            <div className="flex flex-col space-y-3 pt-6 items-center">
              <h4 className="font-medium">Services</h4>
              {serviceItems.map((item) => (
                <React.Fragment key={item.href}>
                  <MobileLink
                    href={item.href}
                    onOpenChange={setIsOpen}
                    className="text-center"
                  >
                    {item.name}
                  </MobileLink>
                </React.Fragment>
              ))}
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  </div>
</header>
  )
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string
  onOpenChange?: (open: boolean) => void
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        pathname === href && "text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}