import { useContext } from "react"
import { contexto } from "../context/cardContext"

export const Carrito = () => {
  const {carrito, total} = useContext(contexto)
  console.log(carrito, total)

  return (
    <div>carrito</div>
  )
}

 