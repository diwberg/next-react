
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
export default function produto(){

    const [firstParam, setFirstParam] = useState('primeiro')
    const [secondParam, setSecondParam] = useState('segundo')

    const url = '/rotas/'+firstParam+'/'+secondParam

    const router = useRouter()
    console.log(router)

    return(
        <div>
            <p>A informação do router dessa página está no console.log</p>
            <h4>Algumas informações importantes sobre o router, que foi instaciado: </h4>
            <code>const router = useRouter()</code>
            <p>asPath: <code>{router.asPath}</code></p>
            <p>pathname: <code>{router.pathname}</code></p>
            <p>query[id]: <code>{router.query.id}</code></p>
            <p>query[param1]: <code>{router.query.param1}</code></p>
            <p>query[param2]: <code>{router.query.param2}</code></p>
            <h2>Mais de um parametro:</h2>
            <span>/rotas/</span>
            <input  type="text" placeholder='primeiro/' onChange={e => setFirstParam(e.target.value)} value={firstParam} />

            <input  type="text" placeholder='segundo/' onChange={e => setSecondParam(e.target.value)} value={secondParam} />
            <Link href={url} ><button>{url}</button></Link>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px",
                gap: "5px"
            }}>
            <Link href="/rotas/products" ><button>Voltar</button></Link>
            <Link href="/" ><button>Home</button></Link>
            </div>
            
        </div>
    )
}