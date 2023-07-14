import style from './Filter.module.css'

const getStaticProps = () => {
    return fetch('http://localhost:3000/categorias.json')
        .then(res => res.json())
}

export async function Filter() {
    const item = await getStaticProps();

    return (<div className={style.wrapper}>
        <p>Filtrar por categorías</p>
        <div className={style.btn_container}>

            <button className={style.btn} >Todos</button>
            {
                item.map(({ id, nombreCategoria }) => (
                    <button key={id}
                        className={style.btn}>
                        {nombreCategoria}
                    </button>
                ))}
        </div>
    </div>
    )
}