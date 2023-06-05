import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function products(){
    const [idProduto, setIdProduto] = useState(0)

    const router = useRouter()

    function handlePushToRotas(){
        router.push("/rotas")
    }

    function handlePushWithParams(){
        router.push({
            pathname: "/rotas/id/produto",
            query: {
                param1: "param1",
                param2: "param2"
            }
        })
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center"
        }}>
            <div style={{
                height: "60vh",
                background: "grey",
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}>
                <div>
                <input type="text" placeholder='Coloque um id' onChange={e => setIdProduto(e.target.value)}  />
                <Link href={'/rotas/'+idProduto+'/produto'}><button>Rota com ID dinamico</button></Link>
                </div>
                <div>
                <form action={'/rotas/'+idProduto+'/produto'}>
                    <input type="text" name='param1' placeholder='param1' />
                    <input type="text" name='param2' placeholder='param2' />
                    <button type="submit">Enviar</button>
                </form>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <h4 style={{
                    color: "white",
                    padding: "10px"
                }}>Navegando entre páginas</h4>

                <ul style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px"
                }}>
                    <li>A navegação por meio do <code>push</code> simples</li>
                    <button onClick={handlePushToRotas}>Push rotas</button>

                    <li>A navegação por meio do <code>push</code> com Params</li>
                    <button onClick={handlePushWithParams}>Push Params</button>

                </ul>

                </div>

            </div>

            <Link href="/rotas"><button>Voltar</button></Link>
            <Link href="/"><button>Home</button></Link>
        </div>
    )
}