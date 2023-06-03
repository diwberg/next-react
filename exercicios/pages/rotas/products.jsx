import Link from 'next/link'
import { useState } from 'react'

export default function products(){
    const [idProduto, setIdProduto] = useState(0)
    const [param, setParam] = useState(0)

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
            </div>

            <Link href="/rotas"><button>Voltar</button></Link>
            <Link href="/"><button>Home</button></Link>
        </div>
    )
}