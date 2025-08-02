import Image from 'next/image'
import React from 'react'
import AboutImg from '../../public/images/homeSlider-3.jpg'

const About = () => {
  return (
    <section id='about' className='section section-about mb-16 lg:mb-36 px-4'>
        <div className='container mx-auto grid lg:grid-cols-2 items-center gap-14 lg:gap-8'>
            <div className='about-img max-h-[35rem] lg:max-h-[51rem] overflow-hidden rounded-2xl'>
                <Image className='w-full object-left-top' src={AboutImg} alt='aminul721'/>
            </div>
            <div className='about-content'>
                <h2 className='text-4xl uppercase font-semibold mb-7 lg:mb-10'>🧑‍💻 About Me</h2>
                <p className='mb-4 lg:mb-7'>I'm a passionate <strong> Front-End Developer </strong> with a strong eye for design and a deep commitment to writing clean, efficient, and accessible code. With experience in <strong> HTML, CSS (Tailwind, Sass bootstrap), JavaScript (ES6+), React, and Next.js, </strong> I specialize in building responsive, user-friendly interfaces that deliver seamless experiences across all devices.</p>
                <p className='mb-4 lg:mb-7'>Whether it's creating pixel-perfect UI from Figma designs, optimizing performance, or collaborating with back-end teams, I thrive on transforming ideas into beautiful, functional web applications.</p>
                <p className='mb-4 lg:mb-7'>I care deeply about <strong>  user experience, maintainable code, </strong> and staying up-to-date with the latest front-end technologies. Every project is an opportunity to learn, grow, and craft something meaningful.</p>
                <p className='mb-4 lg:mb-7'>Backed by hands-on problem-solving and a love for clean architecture, we specialize in:</p>
                <ul className='flex flex-col gap-2 pl-6 list-disc list-inside'>
                    <li>Performance-optimized components in Next.js</li>
                    <li>Utility-first design with custom Tailwind configurations</li>
                    <li>Debugging complex UI behaviors with precision</li>
                    <li>Seamless integration of third-party libraries to level up interactivity</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About