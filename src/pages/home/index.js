"use client"
import Image from "next/image";
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Layout from '../../app/layout'


export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
<Layout>
<h1>Home</h1>
    </Layout>
  )
}