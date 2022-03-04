import { useState } from 'react'

export const Main = ({ asd }) => {
    let [estado, setEstado] = useState(0)
    const handlesAdd = () => {
        setEstado(estado + 1)
    }
    const handleSub = () => {
        setEstado(estado - 1)
    }

    return (
        <>
            <p>estado: {estado}</p>
            <br />
            <button onClick={handlesAdd}>suma</button>
            <br />
            <button onClick={handleSub}>resta</button>
        </>
    )
}
