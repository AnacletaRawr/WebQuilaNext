"use client"

import Image from "next/image"
import style from "./page.module.css"
/* import BannerImg from "./../../public/images/Fotos generales/fondo hojas y frase.jpeg" */
import { ActionButton } from "./components/ActionButton"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import imgCar1 from "./../../public/images/Fotos generales/fondo-hojas-y-frase.jpeg";
import imgCar2 from "./../../public/images/Fotos generales/camino-Hortensias-Cunco.jpg";
import imgCar3 from "./../../public/images/Fotos generales/tienda-interior-4.jpg";



export default function Home() {
  return (
    <main>
      <section className={style.banner}>
        <div>
          <Carousel className="crsl" autoPlay infiniteLoop  interval={3000} showThumbs={false}  >
            <div className={style.carousel_container}>
              <Image
              className={style.carousel_img}
              src={imgCar1} 
              height={900}
              width={1600}
              alt="Banner: Colaboración, sustentabilidad y compromido con el desarrollo de emprendedores de la araucanía andina">
              </Image>
            </div>
            <div className={style.carousel_container}>
              <Image
              className={style.carousel_img}
              src={imgCar2} 
              height={900}
              width={1600}
              alt="Camino Hortensias a Cunco">
              </Image>
            </div>
            <div className={style.carousel_container}>
              <Image
              className={style.carousel_img}
              src={imgCar3} 
              height={900}
              width={1600}
              alt="Intrior tras ventanales Tienda Quila">
              </Image>
            </div>
                   
          </Carousel>
        </div>
        {/* <div className={style.carousel_container}>
        <Image>
            className={style.carousel_img}
            src={BannerImg}
            height={900}
            width={1600}
            alt="Banner: Colaboración, sustentabilidad y compromido con el desarrollo de emprendedores de la araucanía andina" 
        </Imager>  
        </div> */}
        <ActionButton className={style.action_btn}
          href='/'>

          Considera UNIRTE a Quila <span style={{ fontWeight: '600' }}>AQUÍ</span>
        </ActionButton>
      </section>
      <div className={style.margin}>
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


