import { useState } from "react";

export default function InputMonitorado() {

    let [text, setTexto] = useState("")

const handleChangeInput = (event) => {

    setTexto(text += event.target.value)


    console.log(event)
}

    return (
        <div style={{
            padding: "50px",
            margin: "30px",
            background: "#221e1ec0",
            borderRadius: "50px",


        }}>
            <h1>Todo digito está sendo monitorado</h1>
            <label style={{
                color: "white",
                margin: "5px",
                fontWeight: "bold"
            }}>Digite aqui o seu texto: </label>
            <input type="text" placeholder="Input Monitorado" value={text} onChange={handleChangeInput} />
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white"
            }}>
                <h3>O seu texto atual é: </h3>
                <span style={{
                    padding: "30px"
                }}>{text}</span>
            </div>


        </div>
    )
}