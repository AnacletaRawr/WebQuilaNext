import Subtitle from "../components/Subtitle";
import style from "./page.module.css"


export default function AboutPage() {
    return (
        <>
            <h1>Estos somos nosotros</h1>
            <Subtitle />
            <section className={style.contenido}>
                <div className={style.nosotros_left}>
                    <h3>QUÉ ES QUILA?</h3>
                    <p>Quila exhibe artículos creados por artesanos y emprendedores de Cunco, región de la Araucanía. Adicionalmente, es un espacio donde podrás conectar con la cultura araucana auténtica a través de talleres y actividades enriquecedoras.</p>
                    <p>Aquí encontrarás pinturas, alimentos, cosmetica, textiles bisutería, entre otros. </p>
                </div>
                <div className={style.nosotros_right}>
                </div>
            </section>
        </>
    )
}