export default function lista(){

    function gerar(num = 10){
        lista = []
            for (let i = 0; i < num; i++) {
                lista.push(<li>{i}, </li>) 
            }
        return lista
    }

    return (
        <div>
        <ul>
            {gerar(10)}
        </ul>
        <hr />

        <a href="/primeiro">Voltar</a>
        </div>

    )

}