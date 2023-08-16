import Image from "next/image";
import styles from './../GridProduct.module.css'
import Link from "next/link";


export default function GridArtesanos({ entrepreneurs }) {

    if (!entrepreneurs) {
        return <p>Cargando...</p>; // En caso que entrepreneurs sea undefined
    }

    return (
        <div className={styles.grid_productos}>
            {entrepreneurs.map((entrepreneur) => (
                <div key={entrepreneur.entrepreneurId} className={styles.container}>
                    <div key={entrepreneur.entrepreneurId} className={styles.tarjeta_productos}>
                        <Image
                            alt={entrepreneur.nameEntrepreneur}
                            className={styles.imagen_producto}
                            src={`http://localhost:8080${entrepreneur.urlImageEntrepreneur}`}
                            height={300}
                            width={300}
                        />
                    </div>
                    <Link href={`/emprendedor/${entrepreneur.entrepreneurId}`} className={styles.nombre_producto}><h3>{entrepreneur.nameEntrepreneurship} </h3> </Link>
                    <p className={styles.nombre_emprendedor}>{entrepreneur.nameEntrepreneur}</p>
                </div>
            ))}
        </div>
    )
}

