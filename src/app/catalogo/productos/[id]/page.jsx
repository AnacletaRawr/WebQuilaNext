import Title from "@/app/components/Title";

export default function ProductoIdPage({ params }) {
    const { id } = params;
    return (<>
        <Title>Producto {id}</Title>
        <h1> Esta es la vista del producto {id}</h1>
    </>
    )
}