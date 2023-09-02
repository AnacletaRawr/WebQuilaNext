import Image from 'next/image'
import style from './../GridAssets.module.css'
import Link from 'next/link'
import faceIcon from './../../../../public/images/assetsQuila/fckk2.svg'
import instaIcon from './../../../../public/images/assetsQuila/inss2.svg'
import wspIcon from './../../../../public/images/assetsQuila/wssp.svg'

function NavigationBar() {
  return (
    <div className={style.grid_productos}> 
        <section id={style.navigation}>
        <div className={style.navigation_bar}>
        <ul>
            <div id={style.marker}></div>
            <li className={style.list}>
                <a href="#">
                    <span className={style.icon}> <Image
                    /* className={style.img_bg} */
                    src={faceIcon}
                    height={30}
                    width={30}>
                    </Image></span>
                    <span className={style.title}>Facebook</span>
                </a>
            </li>
            <li className={style.list}>
                <a href="#">
                    <span className={style.icon}><Image
                    /* className={style.img_bg} */
                    src={instaIcon}
                    height={30}
                    width={30}>
                    </Image></span>
                    <span className={style.title}>Instagram</span>
                </a>
            </li>
            <li className={style.list}>
                <a href="#">
                    <span className={style.icon}><Image
                    /* className={style.img_bg} */
                    src={wspIcon}
                    height={30}
                    width={30}>
                    </Image></span>
                    <span className={style.title}>Whatsapp</span>
                </a>
            </li>
        <div className={style.indicator}></div>
        </ul>
        </div>
        </section>
    </div>
  )
}

export default NavigationBar