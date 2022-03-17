import { Item } from "./Item"

export const ItemList = ({productos}) => {
    
  return (
    <ul>
                {productos.map((productos) => {
                    return <Item key={productos.id} productos={productos}/>
                })}

            </ul>
  )
}