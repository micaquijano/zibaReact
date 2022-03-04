import { useState } from "react";

export const ItemCount = ({ stock, initial, toAdd }) => {
    const [currentInput, setCurrentInput] = useState(Number(initial));
    return <>
        <div>
            <button disabled={currentInput <= initial} onClick={() => setCurrentInput(currentInput - 1)}>-</button>
            {currentInput}
            <button disabled={currentInput >= stock} onClick={() => setCurrentInput(currentInput + 1)}>+</button>
        </div>
        <div>
            <button disabled={!stock || currentInput > stock} onClick={() => toAdd(currentInput)} >Agregar al carrito</button>
        </div>
    </>
}