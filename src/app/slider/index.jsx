/* import Image from 'next/image';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import style from "./SliderUno.module.css"

import imgCar1 from "./../../../public/images/Fotos generales/fondo-hojas-y-frase.jpeg";
import imgCar2 from "./../../../public/images/Fotos generales/camino-Hortensias-Cunco.jpg";
import imgCar3 from "./../../../public/images/Fotos generales/tienda-interior-4.jpg";

export default function SliderHome() {
    return(
        <>
        <div>
          <Carousel>
            <div>
                <Image 
                    className={style.carousel_img}
                    src={imgCar1} 
                    height={900}
                    width={1600}
                    alt="Banner: Colaboración, sustentabilidad y compromido con el desarrollo de emprendedores de la araucanía andina">
                </Image>
            </div>
            <div>
                <Image>
                <img src={imgCar2} 
                className={style.carousel_img}
                height={900}
                width={1600}
                alt="Banner: Colaboración, sustentabilidad y compromido con el desarrollo de emprendedores de la araucanía andina"/>
                </Image>
            </div>
            <div>
                <Image>
                <img src={imgCar3} 
                className={style.carousel_img}
                height={900}
                width={1600}
                alt="Banner: Colaboración, sustentabilidad y compromido con el desarrollo de emprendedores de la araucanía andina"/>
                </Image>
            </div>       
          </Carousel>
        </div>

        </>
    );
} */