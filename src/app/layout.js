import './globals.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import {Roboto} from 'next/font/google'
import Navbar from "./components/Navbar"


const roboto = Roboto({
    subsets: ["latin"],
    weight: ['400','700']
  })


export const metadata = {
  title: 'Quila Coop',
  description: 'Colaboración, sustentabilidad y compromiso con el desarrollo de los emprendedores de la Araucanía Andina.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
