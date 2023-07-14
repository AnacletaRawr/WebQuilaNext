import Title from "@/app/components/Title";


export default function ProductLayout({ children }) {

    return (
        <>
            <Title>Productos</Title>
            {children}
        </>
    )
}