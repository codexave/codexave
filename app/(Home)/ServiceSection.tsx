"use client"
import { HoverEffect } from '@/components/ui/card-hover-effect';
import React from 'react'


export function ServiceSection() {
  return (
    <div className="max-w-screen-xl mx-auto px-8">
        <div className='mt-10 text-center font-bold md:text-4xl text-2xl '>Our Services</div>
    <HoverEffect items={projects} />
  </div>
  )
}



export const projects = [
    {
      title: "Web Development",
      description:
        "Creating responsive and performant websites tailored to your needs.",
      link: "#",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing user interfaces.",
      link: "#",
    },
    {
      title: "Digital Marketing",
      description:
        "Boosting your online presence through strategic digital marketing..",
      link: "#",
    },
    {
      title: "SEO Optimization",
      description:
        "Improving your search engine rankings to drive more traffic.",
      link: "#",
    },
   
  ];