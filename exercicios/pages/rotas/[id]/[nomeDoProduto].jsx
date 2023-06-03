import { useRouter } from 'next/router'
import Link from 'next/link'
export default function nomeDoProduto(){

    const router = useRouter()
    console.log(router)

    return (
        <div>
            <p>asPath: {router.asPath}</p>
            <p>pathNname: {router.pathname}</p>
            <p>id: {router.query.id}</p>
            <p>nomeDoProduto: {router.query.nomeDoProduto}</p>
            <Link href="/rotas/products" ><button>Voltar</button></Link>
            <Link href="/" ><button>Home</button></Link>
        </div>
    )
}