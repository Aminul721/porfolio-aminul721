'use client'
import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import LogoImg from '@/../../public/images/logo.png'
import { sideMenu } from '@/lib/fakeData/SideMenu'
import Link from 'next/link'

const StickyHeader = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollingAfter = window.innerHeight - 100;
        if (window.scrollY > scrollingAfter) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const sectionIds = sideMenu.map(item => item.path.replace('#', ''));
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sectionIds.forEach(id => {
            const sectionGetId = document.getElementById(id);
            if (sectionGetId){
                observer.observe(sectionGetId);
            } 
        });

        return () => observer.disconnect();
    }, []);
  return (
    <>
        <div className={`
        sticky-header py-3 px-4 fixed top-0 w-full z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : 'lg:-translate-y-full'}
        bg-blue-950 shadow-md
        `}>
            <div className='container mx-auto flex items-center justify-center space-x-12'>
                <div className='logo'>
                    <Link href={'/'} aria-label='logo link'>
                        <Image src={LogoImg} alt='logo image' width={190} priority />
                    </Link>
                </div>
                <div className="humber lg:hidden">
                    <button className="btn p-2 block border rounded cursor-pointer" onClick={toggleMenu}>
                    {
                        isOpen ? <RxCross1 /> : <FaBarsStaggered />
                    }
                    </button>
                </div>
                <ul className={`flex-col lg:flex-row flex absolute lg:static w-full lg:w-auto h-auto text-end bg-blue-950 top-[99%] px-4 lg:px-0 py-8 lg:py-0 gap-4 ${isOpen ? "block lg:flex-row" : "hidden lg:flex"}`}>
                    {
                        sideMenu.map(({id, name, path})=> {
                            const isActive = activeSection === path.replace('#', '');
                            return (
                                <li key={id} id={`${id}-${name}`} 
                                className={`
                                    font-medium text-2xl ring-offset-1 transition-colors duration-300
                                    ${isActive ? 'text-pink-600 font-bold' : 'text-white hover:text-pink-500'}
                                `}
                                >
                                    <Link onClick={toggleMenu} href={path}>{name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

                {/* <ul className='flex gap-4'>
                    {
                        sideMenu.map(({id, name, path})=> {
                            const isActive = activeSection === path.replace('#', '');
                            return (
                                <li key={id} id={`${id}-${name}`} 
                                className={`
                                    font-medium text-2xl ring-offset-1 transition-colors duration-300
                                    ${isActive ? 'text-pink-600 font-bold' : 'text-white hover:text-pink-500'}
                                `}
                                >
                                    <Link href={path}>{name}</Link>
                                </li>
                            )
                        })
                    }
                </ul> */}
            </div>
        </div>
    </>
  )
}

export default StickyHeader