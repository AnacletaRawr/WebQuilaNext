import Image from "next/image";
import styles from './../GridProduct.module.css'
import Link from "next/link";

const getStaticProps = () => {
    return fetch('http://localhost:3000/productos1.json')
        .then(res => res.json())
}


export async function GridProduct() {

    const products = await getStaticProps();
    console.dir(products)

    return (<div className={styles.grid_productos}>
        {products.map(({ id, nombreCategoria, fotoCategoria }) => (

            <div key={id} className={styles.container}>
                <div key={id} className={styles.tarjeta_productos}>
                    <Image
                        alt="Imagen de producto"
                        className={styles.imagen_producto}
                        src={fotoCategoria}
                        height={300}
                        width={300}>
                    </Image>
                </div>
                <Link href={`/catalogo/productos/${id}`}
                    className={styles.nombre_producto}><h3>{nombreCategoria} </h3> </Link>
                <p className={styles.nombre_emprendedor}>{nombreCategoria}</p>
            </div>
        ))}
    </div>
    )

}
