
 
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

export function Testimonial() {
  return (
    <>
    <div className="text-center font-bold md:text-4xl text-2xl ">Our Testimonials</div>
    <div className="h-[25rem] rounded-md flex flex-col antialiased   items-center justify-center relative overflow-hidden">
    <InfiniteMovingCards
      items={testimonials}
      direction="right"
      speed="slow"
    />
  </div>
  </>
  )
}

const testimonials = [
    {
      quote:
        "Codexave transformed our website! Their web development team is fast, professional, and the end result was beyond our expectations. Our online traffic has tripled!",
      name: "John D.",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "Thanks to Codexave’s SEO expertise, we now rank on the first page for all our target keywords. We’ve seen a 40% increase in organic traffic within just a few months.",
      name: "Sarah M.",
      title: "Hamlet",
    },
    {
      quote: "Codexave’s digital marketing strategies helped us boost our social media presence and drive more leads than we thought possible. Their creativity and understanding of our business were spot-on",
      name: "David L.",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "The Codexave team built a seamless app for our business that not only improved customer engagement but also simplified our internal processes. Excellent work!",
      name: "Emily R.",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Codexave’s all-in-one digital solutions have taken our online presence to the next level. From SEO to web development, they covered every aspect professionally.",
      name: "Tom S.",
      title: "Moby-Dick",
    },
  ];