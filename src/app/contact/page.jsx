import Link from "next/link"
import style from "./page.module.css"
import Image from "next/image"
import bgImage from "../../../public/images/Fotos generales/tienda-interior-4.jpg"
import Form from "../components/Form"

export default function ContactPage() {
    return (<>
        <section className={style.contact}>
            <Image className={style.bg_img} src={bgImage} height={862} width={1533} alt=""
                style={{ objectFit: 'cover', position: 'relative', width: '100%', opacity: '20%' }}></Image>
            <div className={style.contact_container}>
                <div className={style.form_container}>
                    <Form />
                </div>
                <div className={style.form_container}>

                </div>
            </div>
        </section>

        <section className={style.buy_info}>
            <div className={style.store_info}>
                <div className={style.store_img}>
                    <Image src={bgImage} height={300} width={300} alt='Tienda Quila' style={{ objectFit: 'cover', position: 'relative', width: '100%' }} />
                </div>
                <div className={style.store_content}>
                    <h2>¿Cómo comprar?</h2>
                    <p>En nuestra tienda, creemos en la cercanía y la interacción personalizada con nuestros clientes, por eso te invitamos a explorar nuestra colección y realizar tus compras de manera sencilla a través de nuestra cuenta de Instagram, llamandonos o completando el formulario de contacto.</p>
                    <p>Encontrarás una amplia selección de productos de calidad cuidadosamente seleccionados. Desde ropa y accesorios hasta artículos para el hogar, cada pieza es única y hecha con amor por nuestros talentosos emprendedores.</p>
                </div>
            </div>
            <div className={style.buy_instructions}>
                <span>
                    Para realizar una compra a través de Istagram, simplemente sigue estos sencillos pasos:
                </span>
                <ol>
                    <li>Visita nuestro perfil en Instagram PINCHANDO AQUÍ.</li>
                    <li>Explora nuestras publicaciones y conócenos.</li>
                    <li>Para comprar, envíanos un mensaje directo con los detalles del producto que deseas adquirir.</li>
                    <li>Te responderemos lo más pronto posible para coordinar los detalles de pago y envío.</li>
                </ol>
            </div>

        </section>
    </>
    )
}