export default function Titulo(props)
{
    return props.bomdia ? (
        <>
        <h1>{props.titulo}</h1>
        <h2>{props.subtitulo}</h2>
        </>
    ) : (
        <>
        <h1>Expediente encerrado</h1>
        <h2>Volte amanha!</h2>
        </>
    )
}