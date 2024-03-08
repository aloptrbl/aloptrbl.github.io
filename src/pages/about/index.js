"use client"
import Image from "next/image";
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Layout from '../../app/layout'
import '../../app/globals.css'


export default function About() {
  return (
    <Layout>
<h1>Introduction</h1>
<br></br>
<hr></hr>
    <p>   Hello, I am a mobile & web developer with over 4 years of experience. <br></br> I specialize in native mobile development, with a focus on Kotlin for Android and Swift & SwiftUI for iOS. My goal is to create applications that not only satisfy the end-users but also bring joy to fellow developers during the development process.</p>
    <br></br>
    <h2>Skills</h2>
    <br></br>
    <hr></hr>
    <ul className="list-disc px-3">
        <li>Kotlin & Jetpack Compose</li>
        <li>Swift & SwiftUI</li>
        <li>React Native</li>
        <li>CakePHP, Node JS, React</li>
        <li>Espresso</li>
        <li>Circle CI</li>
        <li>MYSQL, GraphQL, Firebase, Web Services (JSON, REST)</li>
    </ul>
    <br></br>
    <h2>Tools</h2>
    <br></br>
    <hr></hr>
    <ul className="list-disc px-3">
      <li>Postman</li>
      <li>Android Studio, XCode, VSCode</li>
      <li>Android SDK, Cocoapods, Gradle</li>
      <li>Git, Github, Gitlab</li>
      <li>Figma</li>
      <li>Trello</li>
    </ul>
    <br></br>
    <h2>Projects</h2>
    <br></br>
    <hr></hr>
    <h3>Qalby App</h3>
    <p>Qalby App is a comprehensive Islamic mobile application designed to provide trusted Islamic essentials, education, and lifestyle content based on the teachings of the Qur’an and Sunnah</p>
    <br></br>
    <h3>Tourplus App / Go Selangor App / Perak Pass Plus App / Hello Sabah App</h3>
    <p> The Tourplus, Go Selangor, Perak Pass Plus, Hello Sabah app is designed to support domestic tourism and help local businesses attract more tourists.</p>
    <br></br>
    <h3>Bplaz Rider App / Bplaz Merchant App</h3>
    <p>Bplaz app is a mobile application that serves as a platform for roadside assistance and a marketplace. The Bplaz Merchant app is designed to help merchants monitor and manage their sales.</p>
<br></br>
    <h3>Wahdah App</h3>
    <p> It’s designed for fleet management and has several features.</p>
    <br></br>
<h3>FASSPOS App (In flight app Air Asia)</h3>
<p>an onboard retail solution for Air Asia, enabling crews to manage inventory, scan QR codes, and accept contactless payments.</p>
<br></br>
<h3>Renorumah.com Web App</h3>
<p>a leading platform for home improvement services.</p>
<br></br>
<h3>Qalby Ilm Finder / Qalby Community Web App</h3>
<p>Qalby Ilm finder is a feature of the Qalby that helps users find Islamic classes & events. Meanwhile, Qalby Community is a platform where users can share and read daily inspirations, watch curated Islamic reminders.</p>
<br></br>
    <h2>Education</h2>
    <br></br>
    <hr></hr>
    <p>Bachelor of Computer Science (Software Development): Graduated from UTeM, Melaka in 2020.</p>
    </ Layout>
  )
}