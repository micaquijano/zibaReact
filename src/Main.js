import { useState } from 'react'

export const Main = ({ asd }) => {
    const [estado, setEstado] = useState("2")
 
    return (
        <>
            <p>estado: {estado}</p>
            <br/>
            <button onClick={() =>setEstado(7)}>suma</button>
            <br/>
            <alert variant="denger">
                text
            </alert>
        </>
    )
}
