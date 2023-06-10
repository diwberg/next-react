export default function Exercicios() {

    return (
        <div>
            <ul style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
                background: "grey",
                margin: "5px",
                padding: "50px"
            }}>
                <li><h1 style={{
                    color: "darkgreen"
                }}>Exercicios</h1></li>
                <li>
                    <a href="exercicios/exercicio_01">
                        <button style={{
                            width: "150px",
                            height: "50px",
                            background: "gold",
                            borderRadius: "40%",
                            fontSize: "20px",
                        }}>Contador</button>
                    </a>
                </li>
                <li >
                    <a href="exercicios/exercicio_02"><button style={{
                            width: "150px",
                            height: "60px",
                            background: "gold",
                            borderRadius: "40%",
                            fontSize: "20px",
                        }}>Input Monitorado</button></a>
                </li>
                <li >
                    <a href="exercicios/exercicio_03"><button style={{
                            width: "150px",
                            height: "70px",
                            background: "gold",
                            borderRadius: "40%",
                            fontSize: "20px",
                        }}>Gerar número para Mega</button></a>
                </li>
            </ul>
        </div>
    )
}