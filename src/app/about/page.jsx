import Subtitle from "../components/Subtitle";
import style from "./page.module.css"




export default function AboutPage() {
    return (
        <>
            <Subtitle/>
            <div className={style.img_bg}></div>
            <section className={`${style.grid} ${style.container}`}>
                <div className={style.nosotros_left}>
                    <h3>QUÉ ES QUILA?</h3>
                    <p>Quila exhibe artículos creados por artesanos y emprendedores de Cunco, región de la Araucanía. Adicionalmente, es un espacio donde podrás conectar con la cultura araucana auténtica a través de talleres y actividades enriquecedoras.</p>
                    <p>Aquí encontrarás pinturas, alimentos, cosmetica, textiles bisutería, entre otros. </p>
                </div>
                <div className={style.nosotros_right}></div>
            </section>
            
            <section className={`${style.grid} ${style.container_two}`}>
                <div className={style.nosotros_right_two}>
                <h3>NUESTRA HISTORIA</h3>
                <p>Desde su lanzamiento en diciembre de 2021, nuestro equipo ha crecido de 15 a 52 miembros (más de la mitad liderado por mujeres) haciendo hincapié en la diversidad y la igualdad.</p>
                <p>Hoy en día, Quila busca reforzar los lazos con la comunidad y alcanzar a más personas que deseen aprender sobre la cultura del sur de Chile.</p>
                </div>
                <div className={style.nosotros_left_two}></div>
            </section>
            <section className={`${style.grid} ${style.frase_quila}`}>
                <div className={style.frase}>
                    <h3>"Valoramos el arte y oficios ancestrales traspasados de generación en generación, mientras fomentamos el comercio local, justo y sustentable."</h3>
                    <h4>COMPROMISO QUILA</h4>
                </div>
            </section>

        </>
    )
}