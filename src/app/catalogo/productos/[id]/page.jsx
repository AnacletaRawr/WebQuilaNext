import Title from "@/app/components/Title";
import Image from "next/image";
import style from "./page.module.css"
import foto from "../../../../../public/images/categorias/gourmet.webp"
import Link from "next/link";

export default function ProductoIdPage({ params }) {
    const { id } = params;
    return (<>

        <section className={style.product_container}>

            {/**Fotografías del producto */}
            <div className={style.container}>
                <div className={style.photo_container}>
                    <Image
                        alt="Imagen de producto"
                        className={style.first_photo}
                        src={foto}
                        height={500}
                        width={500}>
                    </Image>
                </div>
            </div>

            {/**Descripción del producto */}
            <div className={style.info_container}>
                <div className={style.text_container}>
                    <Title className={style.title}>Producto {id}</Title>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et doloribus nesciunt soluta, corporis dolores facilis impedit debitis recusandae, nobis animi. Distinctio obcaecati unde sed itaque? Natus ut in pariatur!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quibusdam explicabo corrupti deleniti autem quidem minima. Neque fugit, perferendis necessitatibus pariatur incidunt quam delectus atque, quaerat eaque, aliquam ullam voluptate.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quibusdam explicabo corrupti deleniti autem quidem minima. Neque fugit, perferendis necessitatibus pariatur incidunt quam delectus atque, quaerat eaque, aliquam ullam voluptate.
                    </p>
                </div>
                {/**Hacer un componente de ActionButton */}
                <Link href="/contact" className={style.action_btn} >
                    Quiero comprar
                </Link>
            </div>
        </section >

        {/**Carrusel de fotos */}
        <section className={style.carousel}>

            <div className={style.margin}>
                <p>Productos similares:</p>
                <div className={style.carousel_container}>

                    <div>
                        <Image
                            alt="Imagen de producto"
                            className={style.mini_photo}
                            src={foto}
                            height={500}
                            width={500}>
                        </Image>
                    </div>
                    <div>
                        <Image
                            alt="Imagen de producto"
                            className={style.mini_photo}
                            src={foto}
                            height={500}
                            width={500}>
                        </Image>
                    </div>
                    <div>
                        <Image
                            alt="Imagen de producto"
                            className={style.mini_photo}
                            src={foto}
                            height={500}
                            width={500}>
                        </Image>
                    </div>
                    <div>
                        <Image
                            alt="Imagen de producto"
                            className={style.mini_photo}
                            src={foto}
                            height={500}
                            width={500}>
                        </Image>
                    </div>
                </div>
            </div>

        </section>

        {/**Carrusel de fotos */}
    </>
    )
}