import React from 'react'
import Image from 'next/image'
import logo from '@/public/ben10.png'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header class="sticky top-0 z-50">
            <nav class="container mx-auto px-3 flex justify-between items-center bg-black/30">
                <Image src={logo} width={"70"} alt="logo" />
                <Link href="/gallery" class="px-8 py-2 rounded-md text-md font-bold text-white">Gallery</Link>
                <Link href="/" class="px-8 py-2 rounded-md text-md font-bold  bg-[#02a302]">Play</Link>
            </nav>
        </header>
    </>
  )
}

export default Header
