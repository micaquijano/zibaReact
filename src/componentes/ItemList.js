import { Item } from "./Item"

export const ItemList = ({productos}) => {
    
  return (
    <ul>
                {productos.map((producto) => {
                    return <Item key={producto.id} producto={producto}/>
                })}

            </ul>
  )
}

