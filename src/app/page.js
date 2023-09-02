"use client"

import Image from "next/image"
import style from "./page.module.css"
/* import BannerImg from "./../../public/images/Fotos generales/fondo hojas y frase.jpeg" */
import { ActionButton } from "./components/ActionButton"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselDos from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import imgCar1 from "./../../public/images/Fotos generales/fondo-hojas-y-frase.jpeg";
import imgCar2 from "./../../public/images/Fotos generales/camino-Hortensias-Cunco.jpg";
import imgCar3 from "./../../public/images/Fotos generales/tienda-interior-4.jpg";

import videoBg from "./../../public/images/Fotos Generales/feria en terraza quila.jpeg"
import quienesSomos from "./../../public/images/otros/opcion2.png"
import svgCincuenta from "./../../public/images/assetsQuila/cincuenta.svg"
import svgUnion from "./../../public/images/assetsQuila/union.svg"

import CardUnoHome from "./homeassets/carduno/page";
import CardDosHome from "./homeassets/carddos/page";
import CardTresHome from "./homeassets/cardtres/page";
import NavigationBar from "./homeassets/btnicons/page";

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility'; 

import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

import macrame from "./../../public/images/otros/macrame.png";
import encuentido from "./../../public/images/otros/encurtido.png";
import merken from "./../../public/images/otros/merken.png";
import kombuncha from "./../../public/images/otros/kombuncha.png";
import apicolon from "./../../public/images/otros/apicolon.png";
import chucrut from "./../../public/images/otros/chucrut.png";


//Nuevo Carrusel

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 
  const position = [-38.931254202840485, -72.03376231791177]
  return (
    <main>
      <NavigationBar></NavigationBar>
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
          href='/contact'>

          Considera UNIRTE a Quila <span style={{ fontWeight: '600' }}>AQUÍ</span>
        </ActionButton>
        </section>
        <section id={style.drone}>
        <div className={style.colab}>
            <div className={style.box}>
                <div className={style.img_bxc}>
                    <Image
                    className={style.img_bg}
                    src={videoBg}
                    height={700}
                    width={1400}>
                      
                    </Image>
                </div>
            </div>
        </div>
        </section>

        <section id={style.somos}>
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.imgBx}>
                    <Image
                    src={quienesSomos}
                    className={style.src}
                    >
                    </Image>
                </div>
                <div className={style.orden_content}>
                <div className={style.content}>
                    <h2>Nuestra Historia</h2>
                    <p>Desde su lanzamiento en diciembre de 2021, nuestro equipo ha crecido de 15 a 52 miembros (más de la mitad liderado por mujeres) haciendo hincapié en la diversidad y la igualdad.</p>
                    <p>Hoy en día, Quila busca reforzar los lazos con la comunidad y alcanzar a más personas que deseen aprender sobre la cultura del sur de Chile.</p>
                </div>
                <div className={style.content}>
                    <h3>Paridad de género</h3>    
                    <p>Sobre el</p>
                    <Image
                    src={svgCincuenta}>

                    </Image>
                    <p>De nuestros integrantes se identifica como mujer</p>
                </div>
                <div className={style.content}>
                    <h3>QUILA ES</h3>
                    <Image
                    src={svgUnion}>

                    </Image>
                <h3>UNIÓN</h3>
                </div>
                </div>
            </div>
        </div>
        </section>
        <CardUnoHome/>
        <CardDosHome/>
        <div>
        <CarouselDos responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        containerClass={style.carousel_container2}
       
        
        >
        <div><Image
              className={style.carousel_img2}
              src={macrame} 
              height={250}
              width={250}
              alt="Banner: Colaboración, sustentabilidad y compromido con el desarrollo de emprendedores de la araucanía andina">
              </Image></div>
              <div><Image
              className={style.carousel_img2}
              src={encuentido} 
              height={250}
              width={250}
              alt="Banner: Colaboración, sustentabilidad y compromido con el desarrollo de emprendedores de la araucanía andina">
              </Image></div>
              <div><Image
              className={style.carousel_img2}
              src={merken} 
              height={250}
              width={250}
              alt="Banner: Colaboración, sustentabilidad y compromido con el desarrollo de emprendedores de la araucanía andina">
              </Image></div>
              <div><Image
              className={style.carousel_img2}
              src={kombuncha} 
              height={250}
              width={250}
              alt="Banner: Colaboración, sustentabilidad y compromido con el desarrollo de emprendedores de la araucanía andina">
              </Image></div>
              <div><Image
              className={style.carousel_img2}
              src={apicolon} 
              height={250}
              width={250}
              alt="Banner: Colaboración, sustentabilidad y compromido con el desarrollo de emprendedores de la araucanía andina">
              </Image></div>
              <div><Image
              className={style.carousel_img2}
              src={chucrut} 
              height={250}
              width={250}
              alt="Banner: Colaboración, sustentabilidad y compromido con el desarrollo de emprendedores de la araucanía andina">
              </Image></div>
        
        </CarouselDos>;
        </div>
        <div className={style.action_btn2}>
        <ActionButton className={style.action_btn2}
          href='/contact'>

          Explora MÁS PRODUCTOS <span style={{ fontWeight: '600' }}>AQUÍ</span>
        </ActionButton>
        </div>
        <CardTresHome/>
        <div className={style.title_pb2}>
          <h2>COMO LLEGAR</h2>
        </div>
        <MapContainer className={style.map} center={position} zoom={20} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
            <Popup>
            Hernán Trizano 522, Cunco. Región de la Araucanía, Chile.<br /> 
            </Popup>
            </Marker>
            
           
        </MapContainer>
        
      <div className={style.margin}>
        
      </div>
    </main>
  )
}


