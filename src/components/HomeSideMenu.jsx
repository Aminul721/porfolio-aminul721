'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import LogoImg from '@/../../public/images/logo.png'
import { sideMenu } from '@/lib/fakeData/SideMenu'
import Link from 'next/link'
import MenuSideBGImg from '../../public/images/menu-side-bg.jpg'
import HomeSliderVH from './HomeSliderVH'

const HomeSideMenu = () => {
    const [activeSection, setActiveSection] = useState('');

   useEffect(() => {
    const sectionIds = sideMenu.map(item => item.path.replace('#', ''));
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4,
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
        if (sectionGetId) observer.observe(sectionGetId);
    });

    // 🔥 Additional listener to set 'home' when scrolled to top
    const handleScrollTop = () => {
        if (window.scrollY < 100) {
            setActiveSection('home');
        }
    };

    window.addEventListener('scroll', handleScrollTop);

    return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScrollTop);
    };
}, []);

    return (
        <div className='flex-wrap mb-16 lg:mb-36 lg:flex'>
            <div
                className='home-side-area bg-no-repeat bg-cover bg-top-left w-full lg:w-1/5 lg:min-h-screen hidden lg:block'
                style={{ backgroundImage: `url(${MenuSideBGImg.src})` }}
            >
                <div className='home-side-menu py-20 pb-5 px-10 h-full'>
                    <div className='logo mb-20'>
                        <Link href={'/'} aria-label='logo link'>
                            <Image src={LogoImg} alt='logo image' width={190} priority />
                        </Link>
                    </div>
                    <ul className='flex flex-col gap-5'>
                        {
                            sideMenu.map(({ id, name, path }) => {
                                const isActive = activeSection === path.replace('#', '');
                                return (
                                    <li
                                        key={id}
                                        id={`${id}-${name}`}
                                        className={`
                                            font-medium text-2xl ring-offset-1 transition-colors duration-300
                                            ${isActive ? 'text-pink-600 font-bold' : 'text-white hover:text-pink-500'}
                                        `}
                                    >
                                        <Link href={path}>{name}</Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='w-full lg:w-4/5'>
                <HomeSliderVH />
            </div>
        </div>
    );
};

export default HomeSideMenu;