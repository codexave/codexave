"use client"
import { Button } from "@/components/ui/button"
import { LampContainer } from "@/components/ui/lamp"
import { motion} from "framer-motion"
import { ArrowRight } from "lucide-react"



export default function AboutUs() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }
    
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5
          }
        }
      }
  return (
    <LampContainer>
    <motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium  text-transparent md:text-7xl"
    >
      <h1 className="text-center text-slate-900 dark:text-slate-200">About us</h1>
      <p className="w-[520px] text-center font-normal pt-3 text-zinc-800 dark:text-zinc-100 text-xl ">At CodeXave, we are dedicated to creating innovative tech solutions that help businesses succeed in the digital world. Our team specializes in developing custom software that is secure, scalable, and easy to use.</p>
    </motion.h1>
    </LampContainer>
  )
}