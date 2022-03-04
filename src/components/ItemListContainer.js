import { ItemCount } from "./ItemCount";
import { item } from "../data-fake/items";
export const ItemListContainer = ({count, toAdd}) => {
    return <>
        <h1>Catalogo de productos</h1>
        <span>Aca se visualizaran los catalogos</span>
        <ItemCount stock={item.stock} initial="1" toAdd={toAdd}/>
        {count}    
    </>;
}