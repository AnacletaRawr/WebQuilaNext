import Link from 'next/link';
import styles from './ActionButton.module.css'
export function ActionButton({ children, href }) {
    const path = href;
    return (
        <Link
            href={path}
            className={styles.btn}
        >
            {children}
        </Link>
    )
}