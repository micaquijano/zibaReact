/* import { createContext, useState } from "react"

export const contexto = createContext

  
  const{ Provider } = contexto
  
  export const MiProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)
    


    const valorDelContexto = {
      carrito : carrito,
      cantidad : cantidad,
      total : total

    }
  
  return (
    <Provider value={valorDelContexto}>HIO
    {children}
    </Provider>
  )
}
 */