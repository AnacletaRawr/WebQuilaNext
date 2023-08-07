import Image from 'next/image'
import styles from './Navbar.module.css'
import logo from '../../../../public/logoQuila.png'
import Link from 'next/link'

export default function Navbar() {

    return (
        <nav className={styles.navbar}>
            <div className={styles.container_logo}>
                <Link href='/'>
                    <Image className={styles.logo} src={logo} alt='Logo Quila'></Image>
                </Link>
            </div>
            <div className={styles.nav2}>
                <ul>
                    <li><Link href="/about">Nosotros</Link></li>
                    <li><Link href="/">Actividades</Link></li>
                    <li><Link href="/artesanos">Artesanas y Artesanos</Link></li>
                    <li><Link href="/contact">Contacto</Link></li>
                    <li style={{
                        backgroundColor: 'green'
                    }}><Link
                        style={{ color: 'white' }} href="/catalogo">Catálogo</Link></li>
                </ul>
            </div>
        </nav>
    )
}