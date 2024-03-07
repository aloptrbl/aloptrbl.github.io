"use client"
import Image from "next/image";
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Layout from '../../app/layout'
import '../../app/globals.css'


export default function About() {
  const { theme, setTheme } = useTheme()
  return (
    <Layout>
<h1>Introduction</h1>
<hr className="bg-white"></hr>
    <p>Hello, I am a mobile developer with over 4 years of experience. <br></br> I specialize in native mobile development, with a focus on Kotlin for Android and Swift & SwiftUI for iOS. My goal is to create applications that not only satisfy the end-users but also bring joy to fellow developers during the development process.</p>

    <h2>Skills</h2>
    <hr></hr>
    <ul>
        <li>Kotlin</li>
        <li>Swift & SwiftUI</li>
        <li>React Native</li>
        <li>CakePHP, Node JS, React</li>
    </ul>

    <h2>Projects</h2>
    <hr></hr>
    <h3>Qalby App</h3>
    <p>Qalby App is a comprehensive Islamic mobile application designed to provide trusted Islamic essentials, education, and lifestyle content based on the teachings of the Qur’an and Sunnah</p>

    <h3>Tourplus App / Go Selangor App / Perak Pass Plus App / Hello Sabah App</h3>
    <p> The Tourplus, Go Selangor, Perak Pass Plus, Hello Sabah app is designed to support domestic tourism and help local businesses attract more tourists.</p>

    <h3>Bplaz Rider App / Bplaz Merchant App</h3>
    <p>Bplaz is a mobile application that serves as a platform for roadside assistance and a marketplace. The Bplaz Merchant app is designed to help merchants monitor and manage their sales.</p>

<h3>FASSPOS app (In flight app Air Asia)</h3>
<p>an onboard retail solution for Air Asia, enabling crews to manage inventory, scan QR codes, and accept contactless payments.</p>

    <h2>Education</h2>
    <hr></hr>
    <p>Bachelor of Computer Science (Software Development): Graduated from UTeM, Melaka in 2020.</p>
    </ Layout>
  )
}