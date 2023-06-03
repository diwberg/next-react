import Link from 'next/link'

export default function Exercicios(){

    return (
        <div>
            <h1>Exercicios
            </h1>

            <ul style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                justifyContent: "center",
                alignItems: "center",
                listStyle: "none"
            }}>
                <Link href="/" ><button style={{
                    background: "black",
                    color: "white",
                    border: "0",
                    width: "100px",
                    padding: "15px"
                }}>Home</button></Link>
                <li><a href="/exercicio_01"><button>Contador</button></a></li>
                <li><a href="/exercicio_02"><button>MegaSena</button></a></li>
            </ul>

            <div>
            </div>
        </div>
    )
}