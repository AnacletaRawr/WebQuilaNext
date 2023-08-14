'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'
import logo from '../../../../public/logoQuila.png'
import Link from 'next/link'

export default function Navbar() {
    
    const [isActive, setIsActive] = useState(false);
    
    const toggleActiveClass = () => {
    setIsActive(!isActive);
    };
    
    const removeActive = () => {
    setIsActive(false)
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.container_logo}>
                <Link href='/'>
                    <Image className={styles.logo} src={logo} alt='Logo Quila'></Image>
                </Link>
            </div>
            <div className={styles.nav2}>
                <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                    <li onClick={removeActive}><Link href="/about">Nosotros</Link></li>
                    <li onClick={removeActive}><Link href="/">Actividades</Link></li>
                    <li onClick={removeActive}><Link href="/artesanos">Artesanas y Artesanos</Link></li>
                    <li onClick={removeActive}><Link href="/contact">Contacto</Link></li>
                    <li onClick={removeActive} style={{
                        backgroundColor: 'green'
                    }}><Link
                        style={{ color: 'white' }} href="/catalogo">Catálogo</Link></li>
                </ul>
            </div>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
    )
}