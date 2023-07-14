import {Newsreader} from 'next/font/google'
import styles from './Title.module.css'


const newsreader = Newsreader({
    subsets: ["latin"],
    weight: ['500','700']
})

export default function Title({children}) {

    return (
        <h1 className={`${styles.title} ${newsreader.className}`}>
            {children}
        </h1>
    )
}