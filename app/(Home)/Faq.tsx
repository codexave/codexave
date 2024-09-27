"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
    {
      question: "What services does Codexave offer?",
      answer: "At Codexave, we specialize in web development, digital marketing, SEO, and app development. We aim to provide comprehensive solutions to help businesses establish a strong online presence and achieve their digital goals."
    },
    {
      question: "How long does it take to develop a website?",
      answer: "The timeline for website development depends on the complexity of the project. On average, it takes between 4-12 weeks, depending on your specific requirements and features."
    },
    {
      question: "Do you offer maintenance and support after project completion?",
      answer: "Yes, we provide ongoing maintenance and support services to ensure your website or app continues to function smoothly and remains up to date with the latest technologies."
    },
    {
      question: "What is the process of working with Codexave?",
      answer: "Our process begins with a consultation to understand your needs. From there, we move to design, development, testing, and launch, with regular updates and client feedback throughout each stage."
    },
    {
      question: "How much does a web development project cost?",
      answer: "The cost of web development varies depending on the complexity, features, and scale of your project. After a consultation, we will provide a customized quote based on your specific needs."
    }
  ]

  export default function Faq() {
  return (
    <div id='faq' className="max-w-2xl mx-auto  py-24">
      <h2 className="text-2xl font-bold text-center md:text-4xl mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <div className="border border-gray-200 rounded-lg">
        <button
          className="flex justify-between items-center w-full p-4 text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium">{question}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 }
              }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <div className="p-4 pt-0 text-muted-foreground">{answer}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }