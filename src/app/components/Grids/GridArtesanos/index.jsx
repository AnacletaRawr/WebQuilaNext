import Image from "next/image";
import styles from './../GridProduct.module.css'
import Link from "next/link";

{/* FETCH en el servidor */ }
const getStaticProps = () => {
    return fetch('http://localhost:3000/artesanos.json')
        .then(res => res.json())
}

export async function GridArtesanos() {
    const photos = await getStaticProps();

    return (<div className={styles.grid_productos}>
        {photos.map(({ id, nombreCategoria, fotoCategoria }) => (

            <div key={id} className={styles.container}>
                <div key={id} className={styles.tarjeta_productos}>
                    <Image
                        alt="Imagen de artesano"
                        className={styles.imagen_producto}
                        src={fotoCategoria}
                        height={300}
                        width={300}>
                    </Image>
                </div>
                <Link href="/" className={styles.nombre_producto}><h3>{nombreCategoria} </h3> </Link>
                <p className={styles.nombre_emprendedor}>{nombreCategoria}</p>
            </div>
        ))}
    </div>
    )

}
