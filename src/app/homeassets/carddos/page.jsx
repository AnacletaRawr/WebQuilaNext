import Image from 'next/image'
import style from './../GridAssets.module.css'
import Link from 'next/link'

function CardDosHome() {
  return (
    <section id={style.nuestros_productos}>
      <Link href="/catalogo">
      <button className={style.title_pb}>PRODUCTOS</button>
      </Link>
    <div className={style.grid_productos_dos}> 
    
    
      {['imagproduno','imageproddos','imageprodtres'].map(path => {
        return (
          
          <div key={path} className={style.container_cardDos}>
            
            
            <div className={style.tarjeta_productosCardDos}>
            <div className={style.container_dos}>
            <div className={style.c_card_dos}>
            <div className={style.c_box_dos}>
            <Link href="/catalogo"><button className={style.prod_btn} >EXPLORAR</button></Link>
            
            <Image 
            className={style.imagen_producto}
            src={`/images/otros/${path}.png`} 
            alt='pet' 
            width={450} 
            height={450} />
              
           
            </div>
            <Link href="/" className={style.nombre_producto}></Link>
            </div>  
            <p className={style.nombre_emprendedor}></p>
            </div>
          </div>  
          </div>
        )
      })}
    </div>
    </section>
  )
}

export default CardDosHome