import React from "react";
import GridArtesanos from "../components/Grids/GridArtesanos";
import Title from "../components/Title";

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:8080/emprendedor/listaEmprendedores');
    const respJSON = await response.json();
    return { props: { respJSON } }

}

export default function ArtesanosPage({ respJSON }) {

    return (
        <>
            <Title>Artesanas y Artesanos</Title>
            <GridArtesanos entrepreneurs={respJSON} />
        </>
    )
}