'use client'

import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);

    const handleBurgerClick = () => setIsMenu(!isMenu);

    return (
        <nav className='max-container padding-container py-5 relative flexBetween z-30'>
            <Link href='/'>
                <Image src={'/hilink-logo.svg'} alt='logo' width={74} height={29} />
            </Link>

            <ul className='hidden h-full gap-12 lg:flex'>
                {NAV_LINKS.map(l => (
                    <Link key={l.key} href={l.href}
                    className='regular-16 cursor-pointer flexCenter pb-1.5 text-gray-50 transition-all hover:font-bold'
                    >{l.label}</Link>
                ))}
            </ul>

            <div className='lg:flexCenter hidden'>
                <Button type='button' text='Login' icon='/user.svg' variant='btn_dark_green' />
            </div>

            <Image src='menu.svg' alt='menu' width={32} height={32} className='block lg:hidden cursor-pointer' onClick={handleBurgerClick} />

            {isMenu && <MobileNavbar />}
        </nav>
    )
}

export default Navbar