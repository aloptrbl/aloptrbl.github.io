import { DotGothic16 } from "next/font/google";
import { Providers } from './components/theme-provider'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./globals.css";

const dot = DotGothic16({ subsets: ["latin"], weight: "400" });

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Aloptrbl - Devlog</title>
      <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body className={dot.className}>
      <Providers>
      <Navbar />
        {children}
        <Footer />
        </Providers>
        </body>
    </html>
  );
}
