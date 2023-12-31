import React from 'react'
import Image from 'next/image'
import logo from '@/public/ben10.png'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50">
            <nav className="container mx-auto px-3 flex justify-between items-center bg-black/30">
                <Link href="/"><Image src={logo} width={"70"} alt="logo" /></Link>
                <Link href="/Gallery" className="px-8 py-2 rounded-md text-md font-bold text-white">Gallery</Link>
                <Link href="/" className="px-8 py-2 rounded-md text-md font-bold  bg-[#02a302]">Play</Link>
            </nav>
        </header>
    </>
  )
}

export default Header
