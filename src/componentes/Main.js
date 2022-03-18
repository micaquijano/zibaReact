import { ItemListContainer } from "./ItemListContainer"
import ItemDetailcontainer from "./ItemDetailcontainer"
import { Route } from "react-router-dom"

export const Main = () => {
    
    return (
        <>
        <h2 id="h2">Nuestros Productos</h2>
            <ItemListContainer/>
            
        </>
    )
}
