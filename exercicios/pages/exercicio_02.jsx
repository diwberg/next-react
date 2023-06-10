'use client'
import Link from 'next/link'
import { mega } from './mega'
import { useEffect, useState } from 'react'
import Aposta from '../components/Aposta'

export default function MegaSena(){
    const [qtd, setQtd] = useState(6)
    const [apostas, setApostas] = useState([])

    useEffect(() => {
        setApostas(mega())
    }, [])
    

    function handleChangeQtd(event){

    }

    function gerarApostas(){
        return apostas.map((numero) => ( <Aposta aposta={numero} key={numero} /> ))
    }
    
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h1>MegaSena</h1>

            <p>Quantidade de apostas é: {apostas.length}</p>

            <main>
            <div style={{
                display: "flex",
                listStyle: "none",
                gap: "5px",
                flexWrap: "wrap"
            }}>
                {
                    gerarApostas()
                }
            </div>

            </main>

                <div style={{
                    margin: "30px",
                    display: "flex",
                    gap: "15px"
                }}>
                    <input type="number" onChange={e => setQtd(e.target.value)} min={6} max={60} value={qtd} />
                    <button onClick={() => setApostas(mega(qtd))}>Gerar Apostas</button>
                </div>
            <footer style={{
                display: "flex",
                gap: "10px"
            }}>
            <Link href="/exercicios" ><button>Voltar</button></Link>
            <Link href="/" ><button>Home</button></Link>
            </footer>
        </div>
    )
}