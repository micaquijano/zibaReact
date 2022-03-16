import { Item } from "./Item"

export const ItemList = ({productos}) => {
    
  return (
    <ul>
                {productos.map((producto) => {
                    return <Item key={productos.id} productos={productos}/>
                })}

            </ul>
  )
}

