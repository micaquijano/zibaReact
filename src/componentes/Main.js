import { ItemCount } from "./ItemCount"
import { useEffect, useState } from "react"

let productosIniciales = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 300
    }
]
export const Main = () => {
    const [loading, setLoading]= useState(true)
    const  [productos, setProductos] = useState([])
    useEffect(()=> {
        console.log("ejecutando use effect")
        setTimeout(()=>{
            setProductos(productosIniciales)
        },5000)
    })
    console.log(productos)
    return (
        <>
            <h2 className="h2">bienvenidos</h2>
            <button onClick={()=> setLoading(loading)}>enviar</button>
            <ItemCount stock={5} initial={1}/>
        </>
    )
}
