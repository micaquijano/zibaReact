import { ItemList } from "./ItemList"
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
export const ItemListContainer = () => {
    const [loading, setLoading]= useState(true)
    const  [productos, setProductos] = useState([])
    useEffect(()=> {
        console.log("ejecutando use effect")
        
        const pedido = new Promise ((res,rej) =>{
            setTimeout(()=>{
                res(productosIniciales)
            },2000)

        })
        pedido
        .then((resultado) =>{
            console.log("se ejecuto correctamente")
            console.log(resultado)
        })
        .catch((error) => {
            console.log("se ejecuto incorrectamente")
        })
        //setProductos(productosIniciales)

        
    })
    console.log(productos)
  return (
      
    <ItemList productos={productos}/>
  )
}

