"use client"
import { AuroraBackground } from '@/components/ui/aurora-background'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

function Banner() {
  return (

    <>

    <div className="relative h-full w-full ">
    
    <AuroraBackground>
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        CodeXave
      </div>
      <div className="font-extralight text-base text-center md:px-52 md:text-3xl dark:text-neutral-200 py-4">
CodeXave is a bold tech startup, pushing boundaries with innovative digital solutions. Empowering businesses to level up with next-gen tools and software.
      </div>
      <Link href={"mailto:codexave@gmail.com"} className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
        Contact now
      </Link>
    </motion.div>
  </AuroraBackground>
  </div>
  </>
  )
}

export default Banner