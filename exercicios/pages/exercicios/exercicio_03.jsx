import { useState } from "react"
import NumerosDaMega from "../components/NumerosDaMega"

export default function numerosDaMega() {

    const [numeros, setNumeros] = useState(6)
    const [apostas, setApostas] = useState([])

    function handleNumerosDaMega(event){
        if(event.target.value > 6){
            setNumeros(parseInt(event.target.value))
        }

        if(event.target.value > 60){
            setNumeros(parseInt(60))
        }
    }

    function gerarApostas(){
        for (var i = 0; i < numeros; i++){
            let num = parseInt(Math.random() * 60) + 1
            setApostas([...apostas, num])
        }
    }



    console.log(apostas)
    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "grey"
            }}>
                <h1>Numeros da Mega</h1>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                justifyContent: "center",
                alignItems: "center",
                background: "black",
                margin: "30px",
                padding: "30px",
            }}>

                <div style={{
                    display: "block",

                }}>
   
                        <label htmlFor="qtd_numeros" style={{
                            color: "#757575",
                            margin: "0 20px"
                        }} >Dígite a quantidade de números que deseja gerar: </label>
                        <input type="number" name="qtd_numeros" placeholder="O mínimo é 6 o maximo é 60" style={{
                            width: "100%",
                            padding: "5px",
                            margin: "5px"
                        }} required onChange={handleNumerosDaMega} />
                        <button onClick={gerarApostas} style={{
                            paddin: "5px"
                        }}>Gerar</button>


                </div>

                <div style={{
                    background: "grey",
                    width: "100%",
                    height: "50vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>

                    <NumerosDaMega qtd_numeros={apostas} />

                </div>
















                <div style={{


                }}  >
                    <a href="/exercicios" style={{
                        background: "#9090c7",
                        borderRadius: "25px",
                        margin: "15px",
                    }} ><button style={{
                        paddin: "15px",

                        fontSize: "20px",
                        borderRadius: "25px",
                        border: "0",
                        cursor: "pointer",


                    }}>Voltar</button></a>
                    <a href="/" style={{
                        background: "#9090c7",
                        borderRadius: "25px",
                        margin: "15px"
                    }} ><button style={{
                        paddin: "15px",
                        fontSize: "20px",
                        borderRadius: "25px",
                        border: "0",
                        cursor: "pointer",

                    }}>Home</button></a>
                </div>

            </div>
        </div>
    )
}