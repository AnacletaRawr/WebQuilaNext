import style from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import fbook from './../../../../public/images/assetsQuila/fckk2.svg'
import insta from './../../../../public/images/assetsQuila/inss2.svg'
import wsp from './../../../../public/images/assetsQuila/wssp.svg'


export default function Footer() {
    return (
        <>  
            <div className={style.img_footer}></div>
            <footer className={style.footer}>
                <div className={style.section}>
                    <h3>HORARIO DE ATENCIÓN</h3>
                    <p>Lunes a viernes de 09:30 a 19:00  
                    Sabado de 12:00 a 18:00
                    </p>
                </div>
                <div className={style.section}> 
                    <h3>TIENDA</h3>
                    <p>Direccion:
                    Hernán Trizano 522, Cunco.           
                    Región de la Araucanía, Chile.
                    </p>
                </div>
                
                <div className={style.section}>
                    <h3>CONECTA CON QUILA</h3>
                    <p>¡Haz click en el botón para dirigirte al apartado de contacto con nosotros!</p>
                    <form className={style.mail_footer}>
                        {/* 0 */}
                        <button className={style.footer_btn}>CONTÁCTANOS</button>
                    </form>
                </div>
                {/* <div className={style.line}></div> 
                <div className={style.container}>
                <div className={style.footer_row}>
                    <div className={style.content}>
                        <p>Horario de atencion:
                        Lunes a viernes de 09:30 a 19:00  
                        Sabado de 12:00 a 18:00
                        </p>
                    </div>
                    <div className={style.content}>
                        <h3>TIENDA</h3>
                        <p>Direccion:
                        Hernán Trizano 522, Cunco.           
                        Región de la Araucanía, Chile.
                        </p>
                    </div>
                    <div className={style.content}>
                        <h3>CONECTA CON QUILA</h3>
                        <p>¡Ingresa tu Email para enterarte de todas nuestras novedades!</p>
                        <form className={style.mail_footer}>
                            <p className={style.inline_f}>Ingresar email</p>
                            <button className={style.footer_btn}>ENVIAR</button>
                        </form>
                    </div>
                </div>
                <div className={style.footer_bottom}>
                    <p>Todos los derechos reservados.&copy;2023 Quila.</p>
                </div>
                </div> */}
            </footer>
                <div class={style.footer_bottom}>
                    <p>Todos los derechos reservados.&copy;2023 Quila.</p>
                </div>
                <div className={style.social}>
                <a href="" className={style.facebook_btn}>
                    <Image
                        className={style.carousel_img}
                        src={fbook} 
                        height={30}
                        width={30}
                        alt="Banner: Colaboración, sustentabilidad y compromido con el desarrollo de emprendedores de la araucanía andina">
                    </Image>
                </a>
                <a href="" className={style.instagram_btn}>
                    <Image
                        className={style.carousel_img}
                        src={insta} 
                        height={30}
                        width={30}
                        alt="Banner: Colaboración, sustentabilidad y compromido con el desarrollo de emprendedores de la araucanía andina">
                    </Image>
                </a>
                <a href="" className={style.whatsapp_btn}>
                    <Image
                        className={style.carousel_img}
                        src={wsp} 
                        height={30}
                        width={30}
                        alt="Banner: Colaboración, sustentabilidad y compromido con el desarrollo de emprendedores de la araucanía andina">
                    </Image>
                </a>
            </div>
        </>
    )
}