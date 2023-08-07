import { Filter } from "@/app/components/Filter";
import { GridProduct } from "@/app/components/Grids/GridProduct";
import Title from "@/app/components/Title";


export default function ProductPage() {

    return (
        <div>
            <Title>Productos</Title>
            <Filter />
            <GridProduct />
        </div>
    )
}