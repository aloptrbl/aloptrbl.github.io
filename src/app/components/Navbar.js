"use client";
import Link from 'next/link'
import Image from 'next/image'
import { Silkscreen } from "next/font/google";
import "../../app/globals.css";
import { useTheme } from 'next-themes'

const silkscreen = Silkscreen({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex items-center justify-between">
      <div>
        <Link href="/">
          <a className={silkscreen.className + " text-2xl"}>Aloptrbl</a>
        </Link>
      </div>
              <div className="mx-auto">
            <Image
        className="logo hidden md:block"
      src="/main.png"
      width={35}
      height={35}
      alt="author"
    />
        </div>
      <div className="flex space-x-4 items-center">
        <Link href="/">
          <a className=" hover:text-red-300">Devlog</a>
        </Link>
        <Link href="/about">
          <a className=" hover:text-red-300">About</a>
        </Link>
        <Link href="/portfolio">
          <a className=" hover:text-red-300">Portfolio</a>
        </Link>
        <button className="px-1" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <Image
        className="logo"
      src={theme === 'dark' ? '/dark.png' : '/light.png'}
      width={35}
      height={35}
      alt="author"
    />
      </button>
      </div>
    </nav>
  )
}
