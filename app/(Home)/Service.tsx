"use client"
import { motion } from 'framer-motion';
import { Code, LineChart, Megaphone, Palette } from 'lucide-react'
import React from 'react'


const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Web Development',
      description: 'Creating responsive and performant websites tailored to your needs.'
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing user interfaces.'
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: 'Digital Marketing',
      description: 'Boosting your online presence through strategic digital marketing.'
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: 'SEO Optimization',
      description: 'Improving your search engine rankings to drive more traffic.'
    }
  ]

function Service() {
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
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            stiffness: 100
          }
        }
      }
  return (
    <div>
        <section className="py-16 ">
    <div className="container mx-auto px-4">
      <motion.h2 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="bg-gradient-to-b from-zinc-100 to-zinc-400 border-zinc-800 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] border-[2px] dark:border-zinc-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <div className="dark:text-violet-50 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold dark:text-zinc-100 mb-2">{service.title}</h3>
            <p className="dark:text-gray-200">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
  </div>
  )
}

export default Service