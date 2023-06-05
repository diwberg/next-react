import Link from 'next/link'

export default function apis(){
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px"
        }}>
            <h1>APIs</h1>
            <Link href="/api/hello"><button>API do Next</button></Link>
            <Link href="/api/types"><button>Tipo de Requisição</button></Link>
            <Link href="/"><button>Home</button></Link>
        </div>
    )
}