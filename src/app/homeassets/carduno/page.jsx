import Image from 'next/image'
import style from './../GridAssets.module.css'
import Link from 'next/link'

function CardUnoHome() {
  return (
    <section id={style.nuestros_colaboradores}>
      <button className={style.title_pb}>NUESTROS COLABORADORES</button>
    <div className={style.grid_productos}> 
      {['artesania', 'tejidos', 'cosmetica-natural'].map(path => {
        return (
          
          <div key={path} className={style.container_cardUno}>
            <div className={style.tarjeta_productosCardUno}>
            <div className={style.container_uno}>
            <div className={style.c_card}>
            <div className={style.c_box}>
            <Image 
            className={style.esfera}
            src={`/images/categorias/${path}.jpg`} 
            alt='pet' 
            width={300} 
            height={300} />
            
            <Link href="/artesanos" className={style.nombre_producto}><h3>CONÓCENOS</h3> </Link>
            <p className={style.nombre_emprendedor}></p>
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

export default CardUnoHome
/* 
import Image from 'next/image'

function PetsPage() {
  return (
    <div>
      {['arbolesquila', 'arbolesquila', 'arbolesquila'].map(path => {
        return (
          <div key={path}>
            <Image src={`/images/otros/${path}.jpg`} alt='pet' width='280' height='420' />
          </div>
        )
      })}
    </div>
  )
}

export default PetsPage */