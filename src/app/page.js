import Image from "next/image"
import style from "./page.module.css"
import BannerImg from "./../../public/images/Fotos generales/fondo hojas y frase.jpeg"
import { ActionButton } from "./components/ActionButton"


export default function Home() {
  return (
    <main>
      <section className={style.banner}>
        <div className={style.carousel_container}>
          <Image
            className={style.carousel_img}
            src={BannerImg}
            height={900}
            width={1600}
            alt="Banner: Colaboración, sustentabilidad y compromido con el desarrollo de emprendedores de la araucanía andina"
          ></Image>
        </div>
        <ActionButton className={style.action_btn}
          href='/'>

          Considera UNIRTE a Quila <span style={{ fontWeight: '600' }}>AQUÍ</span>
        </ActionButton>
      </section>
      <div className={style.margin}>
        <h1>Aquí va el home</h1>

        <h2>Banner de Quila</h2>
        <br />
        <h2>Botón "Únete a Quila"</h2>
        <br />
        <h2>Aquí se ven 3 artesanos</h2>
        <br />
        <h2>Aquí se ven 3 productos</h2>
        <br />
        <h2>Aquí se ven 3 actividades</h2>
        <br />
        <h2>Cómo llegar</h2>
        <br />
      </div>
    </main>
  )
}
