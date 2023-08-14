
/* import Image from "next/image";
import styles from './Slider.module.css'



const getStaticProps = () => {
    return fetch('http://localhost:3000/slideruno.json')
        .then(res => res.json())
}

export async function SliderHome() {
    const photos = await getStaticProps();

    return (<div className={styles.grid_productos}>
        {photos.map(({ id, fotoCategoria }) => (

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
            </div>
        ))}
    </div>
    )

}
 */