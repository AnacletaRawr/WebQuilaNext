import Image from "next/image";
import styles from './../GridProduct.module.css';
import Link from "next/link";

const getStaticProps = () => {
    return fetch('http://localhost:3000/categorias.json')
        .then(res => res.json())
}

export async function Grid() {

    const photos = await getStaticProps();


    return (<div className={styles.grid_productos}>
        {photos.map(({ id, nombreCategoria, fotoCategoria }) => (
            <div key={id} className={styles.tarjeta_productos}>
                <Image
                    alt="Imagen de categoría"
                    className={styles.imagen}
                    src={fotoCategoria}
                    height={300}
                    width={300}>
                </Image>

                <Link className={styles.link} href="/catalogo/productos">{nombreCategoria}</Link>
            </div>

        ))}
    </div>
    )
}

