"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';

function Projects() {
    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.1, 
      });

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
          });
      }, [inView]);
  return (
    <div id='project'>
    <div className='mx-auto max-w-screen-xl pt-20' ref={ref}>
    <div  className='pt-2 font-extrabold text-4xl md:text-5xl text-center uppercase' data-aos="fade-up">Our Projects</div>


    <Tabs data-aos="fade-down" defaultValue="seo" className="text-center p-8">
    <TabsList >
      <TabsTrigger  value="seo"><Image className='' src="/seo.png" width={60} height={60} alt='php'></Image>
        <div className='italic font-medium py-2'>Seo</div></TabsTrigger>

      <TabsTrigger value="web"><Image className='ml-2' src="/app-development.png" width={60} height={60} alt='php'></Image> <div className='italic font-medium py-2'>Web</div></TabsTrigger>

      <TabsTrigger value="digital"><Image className='' src="/digital-marketing.png" width={60} height={60} alt='php'></Image>
        <div className='italic font-medium py-2'>Marketing  </div> </TabsTrigger>

      <TabsTrigger value="ui"><Image className='ml-2' src="/ui.png" width={60} height={60} alt='php'>
      </Image> <div className='italic font-medium py-2'>Ui/Ux</div></TabsTrigger>
    </TabsList>

    <TabsContent value="seo">
    <div className='text-center pt-5 text-3xl md:text-4xl font-extrabold uppercase italic' data-aos="flip-up">SEO</div>
        <div className='grid lg:grid-cols-2 grid-cols-1  gap-5 p-8'>
            <div className='group '>
                <div data-aos="flip-up" className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                    <Image className='rounded-xl' src="/seo-project.webp" width={500} height={400} alt='about-tab'></Image>
                </div>
            </div>

             <div className='group '>
                <div data-aos="flip-up"  className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                    <Image className='rounded-xl' src="/seo-project-1.webp" width={500} height={500} alt='about-tab'></Image>
                </div>
            </div>
        </div>
    </TabsContent>

    <TabsContent value="web">
        <div className='text-center pt-8 text-3xl md:text-4xl font-extrabold uppercase italic' data-aos="flip-down">
            Web Development</div>
         <div className='grid lg:grid-cols-2 grid-cols-1  gap-5 p-8'>
            <div className='group '>
                <div data-aos="flip-down" className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                    <Image className='rounded-xl' src="/web-dev.webp" width={500} height={400} alt='about-tab'></Image>
                </div>
            </div>

             <div className='group '>
                <div data-aos="flip-down" className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                    <Image className='rounded-xl' src="/web-dev-1.webp" width={550} height={500} alt='about-tab'></Image>
                </div>
            </div>
        </div>



        </TabsContent>

    <TabsContent value="digital">
            <div className='text-center pt-8 text-3xl md:text-4xl font-extrabold uppercase italic' data-aos="flip-right">Digital Marketing</div>
         <div className='grid lg:grid-cols-2 grid-cols-1  gap-5 p-8'>
            <div className='group '>
                <div data-aos="flip-right" className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                    <Image className='rounded-xl' src="/marketing.webp" width={500} height={400} alt='about-tab'></Image>
                </div>
            </div>

             <div className='group '>
                <div data-aos="flip-left" className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                    <Image className='rounded-xl' src="/marketing-1.webp" width={500} height={500} alt='about-tab'></Image>
                </div>
            </div>
        </div>
    </TabsContent>

    <TabsContent value="ui">
    <div className='text-center pt-8 text-3xl md:text-4xl font-extrabold uppercase italic' data-aos="flip-left" >UI/UX Design</div>
         <div className='grid lg:grid-cols-2 grid-cols-1  gap-5 p-8'>
            <div className='group '>
                <div data-aos="flip-left" className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                    <Image className='rounded-xl' src="/uiux.webp" width={600} height={600} alt='about-tab'></Image>
                </div>
            </div>

             <div className='group '>
                <div data-aos="flip-right" className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                    <Image className='rounded-xl' src="/uiux-1.webp" width={500} height={500} alt='about-tab'></Image>
                </div>
            </div>
        </div>
        </TabsContent>
  </Tabs>

</div>
</div>
  )
}

export default Projects