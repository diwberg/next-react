import Link from 'next/link'
export default function rotas(){
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px"
        }}>
            <h1>Rotas</h1>
            <Link href="/rotas/products"><button>Produtos</button></Link>
            <Link href="/"><button>Home</button></Link>
        </div>
    )
}