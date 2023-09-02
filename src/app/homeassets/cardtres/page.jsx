import Image from 'next/image'
import style from './../GridAssets.module.css'
import Link from 'next/link'

function CardTresHome() {
  return (
    <section id={style.actividades}>
      <Link href="/catalogo">
      <button className={style.title_pb}>ACTIVIDADES</button>
      </Link>
      <div className={style.background_act}></div>
    <div className={style.grid_productos_tres}> 
      {['imagenunoviti', 'imagendosviti', 'imagentresviti'].map(path => {
        return (
          
          <div key={path} className={style.container_cardTres}>
              <div className={style.tarjeta_productosCardTres}>
                <div className={style.container_tres}>
                  <div className={style.c_card_tres}>
                <div className={style.c_box_tres}>
            <Image 
            className={style.esfera}
            src={`/images/otros/${path}.png`} 
            alt='pet' 
            width={260} 
            height={200} />
            
            
            <div className={style.content_a}>
            <h3>CONÓCENOS</h3>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat nunc nec pulvinar lacinia. Donec tristique justo id lorem suscipit gravida.</p>
            <Link href="/" className={style.talleres}>Talleres</Link>
            </div>
            </div>
            </div>
            </div>
            </div> 
          </div>
         
        )
      })}
    </div>
    </section>
  )
}

export default CardTresHome