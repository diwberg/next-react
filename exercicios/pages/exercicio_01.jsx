import { useState } from "react"

export default function Contador(){

    let [contador, setContador] = useState(0)

    const handleContador = (event) => (
        
        setContador(contador + parseInt(event.target.value))
    )


    return (
        <div style={{
            backgroundColor: "black",
            color: "white"
            }}>
            <h3>O valor atual é: {contador}</h3>

            <button value={1} onClick={handleContador}>+ Adicionar</button>
            <button value={-1} onClick={handleContador}>- Remover</button>

            <hr />

            <a href="/exercicios"><button>Voltar</button></a>
            <a href="/"><button>Home</button></a>
        </div>
    )
}